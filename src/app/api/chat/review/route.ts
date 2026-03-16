import { createServiceClient } from "@/lib/supabase/server";
import { callSpecialist } from "@/lib/ai/orchestrator";
import { TASK_MAP } from "@/lib/tasks/task-graph";
import type { Message, ProjectStateEntry, AgentType } from "@/lib/ai/types";

export const maxDuration = 60;

/**
 * POST /api/chat/review
 * Runs an AI checklist review for a task before allowing completion.
 * Streams the review response back. The client detects pass/fail from
 * the VERDICT line in the streamed content.
 */
export async function POST(req: Request) {
  try {
    const { taskId } = await req.json();

    if (!taskId || typeof taskId !== "string") {
      return new Response("Task ID is required", { status: 400 });
    }

    const task = TASK_MAP[taskId];
    if (!task) {
      return new Response("Unknown task ID", { status: 404 });
    }

    const agentType = task.agentType as AgentType;
    const supabase = await createServiceClient();

    // Load recent messages for this task
    const { data: recentMessages } = await supabase
      .from("task_messages")
      .select("*")
      .eq("task_id", taskId)
      .order("created_at", { ascending: false })
      .limit(20);

    const messages: Message[] = (recentMessages || [])
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

    // Load project state
    const { data: stateEntries } = await supabase
      .from("project_state")
      .select("*");

    const projectState: ProjectStateEntry[] = (stateEntries || []).map(
      (s) => ({
        category: s.category,
        key: s.key,
        value: s.value,
        unit: s.unit,
        source: s.source,
      })
    );

    // Build a review prompt that asks the agent to evaluate conversation completeness
    const reviewMessage =
      `Review the conversation for task "${task.title}" and determine if all requirements are met. ` +
      `The task requires: ${task.description}\n\n` +
      `Evaluate the conversation and project state against the checklist. ` +
      `For each requirement:\n` +
      `- Mark it PASS if the conversation shows it has been addressed\n` +
      `- Mark it FAIL if it has not been addressed or is incomplete\n\n` +
      `End your review with a clear verdict line:\n` +
      `VERDICT: ALL_PASSED if every item passes, or NEEDS_WORK if any item fails.`;

    // Call the specialist with isChecklist: true to trigger checklist prompt injection
    const result = callSpecialist(
      agentType,
      reviewMessage,
      messages,
      projectState,
      true,
      taskId
    );

    const stream = await result;
    const encoder = new TextEncoder();
    let fullText = "";

    const responseStream = stream.textStream;
    const reader = responseStream.getReader();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              // Save the review message to task_messages
              try {
                await supabase.from("task_messages").insert({
                  task_id: taskId,
                  role: "assistant",
                  content: fullText,
                  agent_type: agentType,
                  metadata: {
                    badge: `Completion Review`,
                    is_review: true,
                  },
                });
              } catch (err) {
                console.error("Failed to save review message:", err);
              }
              controller.close();
              break;
            }
            fullText += value;
            controller.enqueue(encoder.encode(value));
          }
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Agent-Type": agentType,
        "X-Agent-Badge": encodeURIComponent("Completion Review"),
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Review API error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to run review",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
