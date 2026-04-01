"use client";

import { useEffect, useRef } from "react";
import { useChatStore } from "@/stores/chat-store";
import { supabase, isPlaceholder } from "@/lib/supabase/client";

/** Get the current Supabase access token for API calls. */
async function getAccessToken(): Promise<string | null> {
  const { data } = await supabase.auth.getSession();
  return data.session?.access_token ?? null;
}

const PAGE_SIZE = 50;

/** Map a Supabase row to the ChatMessage shape used by the store. */
function rowToMessage(row: Record<string, unknown>) {
  const metadata = (row.metadata ?? {}) as Record<string, unknown>;
  return {
    id: String(row.id),
    role: row.role as "user" | "assistant" | "system",
    content: String(row.content ?? ""),
    agentType: row.agent_type ? String(row.agent_type) : undefined,
    badge: metadata.badge ? String(metadata.badge) : undefined,
    userId: row.user_id ? String(row.user_id) : undefined,
    createdAt: String(row.created_at),
  };
}

/**
 * Fetch chat history with a single retry on failure.
 * Detects auth redirects (HTML responses) and treats them as errors.
 */
async function fetchHistory(
  taskId: string,
  limit: number
): Promise<Record<string, unknown>[]> {
  // Send the Supabase access token so the API can verify auth
  // independently of cookie forwarding (works around Next.js middleware issues)
  const token = await getAccessToken();
  const headers: Record<string, string> = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(
    `/api/chat/history?taskId=${encodeURIComponent(taskId)}&limit=${limit}`,
    { headers }
  );

  // Detect middleware redirect to login (fetch follows redirect, returns HTML)
  const contentType = res.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    throw new Error(
      `Expected JSON but got ${contentType} (status ${res.status}) — possible auth redirect`
    );
  }

  if (!res.ok) {
    throw new Error(`History API returned ${res.status}`);
  }

  const { messages: data } = await res.json();
  return data ?? [];
}

/**
 * Loads chat history from the server API for a given task and subscribes
 * to realtime inserts. Uses the API route (which has the service role key)
 * to bypass RLS, so messages are always readable regardless of RLS policies.
 */
export function useRealtimeMessages(taskId: string | null) {
  const setMessages = useChatStore((s) => s.setMessages);
  const setHistoryLoading = useChatStore((s) => s.setHistoryLoading);
  const addMessage = useChatStore((s) => s.addMessage);

  // Track the current taskId to avoid stale async updates
  const currentTaskIdRef = useRef(taskId);
  currentTaskIdRef.current = taskId;

  useEffect(() => {
    if (!taskId) {
      setMessages([]);
      return;
    }

    // Skip when Supabase isn't configured
    if (isPlaceholder) {
      setMessages([]);
      return;
    }

    let cancelled = false;

    async function loadHistory() {
      setHistoryLoading(true);

      // Try up to 2 times (initial + 1 retry)
      for (let attempt = 0; attempt < 2; attempt++) {
        if (cancelled || currentTaskIdRef.current !== taskId) return;

        try {
          const data = await fetchHistory(taskId!, PAGE_SIZE);

          if (cancelled || currentTaskIdRef.current !== taskId) return;

          // data comes in descending order from API — reverse to ascending,
          // filter out internal system messages (e.g. context summaries)
          const messages = data
            .reverse()
            .filter((row: Record<string, unknown>) => {
              const meta = (row.metadata ?? {}) as Record<string, unknown>;
              return meta.type !== "context_summary";
            })
            .map(rowToMessage);

          // Set messages in one shot — no intermediate empty state
          setMessages(messages);
          return; // success — exit retry loop
        } catch (err) {
          console.error(
            `Failed to load chat history (attempt ${attempt + 1}):`,
            err
          );

          // On first failure, wait briefly then retry
          if (attempt === 0) {
            await new Promise((r) => setTimeout(r, 1000));
            continue;
          }

          // Final failure — set empty messages
          if (!cancelled && currentTaskIdRef.current === taskId) {
            setMessages([]);
          }
        }
      }
    }

    loadHistory().finally(() => {
      if (!cancelled && currentTaskIdRef.current === taskId) {
        setHistoryLoading(false);
      }
    });

    // Subscribe to realtime inserts for this task
    const channel = supabase
      .channel(`messages:task_id=eq.${taskId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "task_messages",
          filter: `task_id=eq.${taskId}`,
        },
        (payload) => {
          if (currentTaskIdRef.current !== taskId) return;

          const row = payload.new as Record<string, unknown>;
          addMessage(rowToMessage(row));
        }
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, [taskId, setMessages, setHistoryLoading, addMessage]);
}
