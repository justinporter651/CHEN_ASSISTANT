"use client";

import { useEffect, useRef } from "react";
import { useChatStore } from "@/stores/chat-store";
import { supabase, isPlaceholder } from "@/lib/supabase/client";

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

      try {
        // Fetch history via API route (uses service role key, bypasses RLS)
        const res = await fetch(
          `/api/chat/history?taskId=${encodeURIComponent(taskId!)}&limit=${PAGE_SIZE}`
        );

        // Don't update state if the taskId changed while we were loading
        if (cancelled || currentTaskIdRef.current !== taskId) return;

        if (!res.ok) {
          console.error("Failed to load chat history:", res.status);
          setMessages([]);
          return;
        }

        const { messages: data } = await res.json();

        if (cancelled || currentTaskIdRef.current !== taskId) return;

        // data comes in descending order from API — reverse to ascending,
        // filter out internal system messages (e.g. context summaries)
        const messages = (data ?? [])
          .reverse()
          .filter((row: Record<string, unknown>) => {
            const meta = (row.metadata ?? {}) as Record<string, unknown>;
            return meta.type !== "context_summary";
          })
          .map(rowToMessage);

        // Set messages in one shot — no intermediate empty state
        setMessages(messages);
      } catch (err) {
        console.error("Failed to load chat history:", err);
        if (!cancelled && currentTaskIdRef.current === taskId) {
          setMessages([]);
        }
      } finally {
        if (!cancelled && currentTaskIdRef.current === taskId) {
          setHistoryLoading(false);
        }
      }
    }

    loadHistory();

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
