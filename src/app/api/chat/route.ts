import { generateText } from "ai";
import { headers } from "next/headers";
import { after } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { insertWithRetry } from "@/lib/supabase/insert-with-retry";
import { orchestrate } from "@/lib/ai/orchestrator";
import { model } from "@/lib/ai/provider";
import { Message, ProjectStateEntry } from "@/lib/ai/types";
import { buildSummaryPrompt } from "@/lib/ai/context-builder";
import {
  estimateTokens,
  estimateMessagesTokens,
  shouldCompact,
} from "@/lib/ai/token-utils";

export const maxDuration = 1200;

const MAX_RECENT_MESSAGES = 10;
const ESTIMATED_SYSTEM_PROMPT_TOKENS = 8000;

/** Derive a stable client identifier from the IP address. */
async function getClientId(req: Request): Promise<string> {
  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown";
  // Hash the IP so we don't store raw addresses
  const encoder = new TextEncoder();
  const data = encoder.encode(ip + "_chen4470_salt");
  const hash = await crypto.subtle.digest("SHA-256", data);
  const bytes = new Uint8Array(hash);
  return Array.from(bytes.slice(0, 8))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(req: Request) {
  try {
    const { message, userId, taskId } = await req.json();

    if (!message || typeof message !== "string") {
      return new Response("Message is required", { status: 400 });
    }
    if (!taskId || typeof taskId !== "string") {
      return new Response("Task ID is required", { status: 400 });
    }

    const supabase = await createServiceClient();
    const clientId = await getClientId(req);

    // 1. Save user message to task_messages (always save, even without auth)
    const { error: insertError } = await supabase.from("task_messages").insert({
      task_id: taskId,
      user_id: userId || null,
      role: "user",
      content: message,
      metadata: { client_id: clientId },
    });
    if (insertError) {
      console.error("Failed to save user message:", insertError);
    }

    // 2. Load ALL messages for this task (no limit — token counting drives the window)
    const { data: recentMessages, error: fetchError } = await supabase
      .from("task_messages")
      .select("*")
      .eq("task_id", taskId)
      .order("created_at", { ascending: false });
    if (fetchError) {
      console.error("Failed to load messages:", fetchError);
    }

    const allMessages: Message[] = (recentMessages || [])
      .reverse()
      .map((m) => ({
        id: m.id,
        user_id: m.user_id,
        role: m.role,
        content: m.content,
        agent_type: m.agent_type,
        agents_consulted: null,
        metadata: m.metadata || {},
        created_at: m.created_at,
      }));

    // 3. Separate out existing summary and chat messages
    const existingSummary = allMessages.find(
      (m) =>
        m.role === "system" &&
        (m.metadata as Record<string, unknown>)?.type === "context_summary"
    );
    const chatMessages = allMessages.filter(
      (m) =>
        m.role !== "system" ||
        (m.metadata as Record<string, unknown>)?.type !== "context_summary"
    );

    // 4. Load project state (shared across all tasks)
    const { data: stateEntries, error: stateError } = await supabase
      .from("project_state")
      .select("*");
    if (stateError) {
      console.error("Failed to load project state:", stateError);
    }

    const projectState: ProjectStateEntry[] = (stateEntries || []).map(
      (s) => ({
        category: s.category,
        key: s.key,
        value: s.value,
        unit: s.unit,
        source: s.source,
      })
    );

    // 5. Check if context compaction is needed (40% of 262K tokens)
    const messageTokens = estimateMessagesTokens(chatMessages);
    const stateTokens = estimateTokens(
      projectState.map((s) => `${s.key}: ${s.value}`).join("\n")
    );
    const totalEstimate =
      messageTokens + stateTokens + ESTIMATED_SYSTEM_PROMPT_TOKENS;

    let conversationSummary: string | undefined = existingSummary?.content;
    let messagesToSend = chatMessages;

    if (shouldCompact(totalEstimate) && chatMessages.length > MAX_RECENT_MESSAGES) {
      const olderMessages = chatMessages.slice(0, -MAX_RECENT_MESSAGES);
      const existingSummarizedCount =
        (existingSummary?.metadata as Record<string, unknown>)
          ?.summarized_count as number | undefined;

      // Only regenerate summary if new older messages exist since last summary
      const needsNewSummary =
        !existingSummary || existingSummarizedCount !== olderMessages.length;

      if (needsNewSummary) {
        const summaryPrompt = buildSummaryPrompt(olderMessages);
        const { text: summaryText } = await generateText({
          model,
          prompt: summaryPrompt,
          temperature: 1,
        });

        // Delete old summary if exists
        if (existingSummary) {
          const { error: deleteError } = await supabase
            .from("task_messages")
            .delete()
            .eq("id", existingSummary.id);
          if (deleteError) {
            console.error("Failed to delete old summary:", deleteError);
          }
        }

        // Save new summary
        const { error: summaryInsertError } = await supabase.from("task_messages").insert({
          task_id: taskId,
          role: "system",
          content: summaryText,
          metadata: {
            type: "context_summary",
            summarized_count: olderMessages.length,
          },
        });
        if (summaryInsertError) {
          console.error("Failed to save new summary:", summaryInsertError);
        }

        conversationSummary = summaryText;
      }

      messagesToSend = chatMessages.slice(-MAX_RECENT_MESSAGES);
    }

    // 6. Orchestrate with task context and optional summary
    const { stream, agentType, agentsConsulted, badge } = await orchestrate(
      message,
      messagesToSend,
      projectState,
      taskId,
      conversationSummary
    );

    // 7. Stream response; save to DB after response completes via after()
    const streamResult = await stream;
    const encodedStream = streamResult.textStream.pipeThrough(new TextEncoderStream());

    after(async () => {
      try {
        const fullText = await streamResult.text;
        await insertWithRetry(
          supabase,
          "task_messages",
          {
            task_id: taskId,
            role: "assistant",
            content: fullText,
            agent_type: agentType,
            metadata: { badge, agents_consulted: agentsConsulted },
          },
          `assistant message for task ${taskId}`
        );
      } catch (err) {
        console.error("after() DB insert failed:", err);
      }
    });

    return new Response(encodedStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Client-Id": clientId,
        "X-Agent-Type": agentType,
        "X-Agents-Consulted": agentsConsulted.join(","),
        "X-Agent-Badge": encodeURIComponent(badge),
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process message",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
