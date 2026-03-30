import { after } from "next/server";
import { createServiceClient, getAuthUser } from "@/lib/supabase/server";
import { streamText } from "ai";
import { model } from "@/lib/ai/provider";
import { INTEGRITY_POLICY } from "@/lib/ai/prompts/integrity-policy";
import { TASK_MAP } from "@/lib/tasks/task-graph";
import { CATEGORY_MAP } from "@/lib/tasks/categories";
import { DELIVERABLE_DESTINATIONS } from "@/lib/ai/orchestrator";
import { AGENT_CONFIGS } from "@/lib/ai/specialists";
import type { Message, AgentType } from "@/lib/ai/types";

export const maxDuration = 800;

/**
 * Build a documentation-indexing prompt that scans chat history
 * and compares findings against the rubric for what needs documenting.
 */
function buildDocumentFindingsPrompt(
  taskId: string,
  messages: Message[]
): string {
  const task = TASK_MAP[taskId];
  if (!task) return "";

  const category = CATEGORY_MAP[task.category];
  const categoryLabel = category?.label ?? task.category;
  const destination =
    DELIVERABLE_DESTINATIONS[task.category] ?? "Appropriate report section.";
  const agentConfig = AGENT_CONFIGS[task.agentType as AgentType];
  const checklist = agentConfig?.checklist ?? [];

  // Build conversation transcript
  const transcript = messages
    .filter((m) => m.role !== "system")
    .map((m) => {
      const role = m.role === "user" ? "Student" : "AI";
      return `${role}: ${m.content}`;
    })
    .join("\n\n");

  let checklistSection = "";
  if (checklist.length > 0) {
    checklistSection =
      "\n== RUBRIC CHECKLIST ==\n" +
      checklist
        .map((item) => `- ${item.description}`)
        .join("\n") +
      "\n";
  }

  return `You are a documentation indexer for a CHEN 4470 (Process Design Practice) project. Your job is to scan the conversation history for a task and extract ONLY the concrete findings, decisions, and values that the student needs to document in their report or presentation.

== TASK ==
"${task.title}" (${categoryLabel})
Objective: ${task.description}

== WHERE THIS WORK GOES ==
${destination}
${checklistSection}
== INSTRUCTIONS ==
1. Read through the entire conversation below.
2. Extract every concrete finding: parameter values chosen, design decisions made, calculation results, alternatives compared, safety concerns identified, etc.
3. For each finding, state:
   - What was established (the fact, value, or decision)
   - Where it goes in the report (specific section, table, or appendix)
   - Any formatting notes relevant to that item (e.g., "include in equipment specs table with min/max T and P")
4. If the conversation contains NO documentable findings yet (e.g., the student is still asking conceptual questions), say so clearly: "No documentable findings yet. Continue working on the task."
5. Do NOT invent findings — only extract what is actually present in the conversation.
6. Do NOT write the report text — just tell them what to document and where.

== CONVERSATION HISTORY ==
${transcript}

== YOUR RESPONSE ==
Provide a structured summary of documentable findings. Use this format:

**Findings for: "${task.title}"**

For each finding:
- **Finding**: [what was established]
- **Document in**: [specific report location]
- **Notes**: [any formatting or cross-reference notes]

If no findings, state that clearly.`;
}

/**
 * POST /api/chat/document
 * Scans chat history for a task and produces a documentation summary.
 */
export async function POST(req: Request) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { taskId } = await req.json();

    if (!taskId || typeof taskId !== "string") {
      return new Response("Task ID is required", { status: 400 });
    }

    const task = TASK_MAP[taskId];
    if (!task) {
      return new Response("Unknown task ID", { status: 404 });
    }

    const supabase = await createServiceClient();

    // Load ALL messages for this task (we want the full history for indexing)
    const { data: allMessages } = await supabase
      .from("task_messages")
      .select("*")
      .eq("task_id", taskId)
      .order("created_at", { ascending: true });

    const messages: Message[] = (allMessages || []).map((m) => ({
      id: m.id,
      user_id: m.user_id,
      role: m.role,
      content: m.content,
      agent_type: m.agent_type,
      agents_consulted: null,
      metadata: m.metadata || {},
      created_at: m.created_at,
    }));

    if (messages.length === 0) {
      return new Response(
        "No conversation history yet. Start working on the task first, then use Document Findings to see what needs to be recorded.",
        {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "X-Agent-Type": "writer",
            "X-Agent-Badge": encodeURIComponent("\uD83D\uDCCB Document Findings"),
          },
        }
      );
    }

    const systemPrompt =
      INTEGRITY_POLICY + buildDocumentFindingsPrompt(taskId, messages);

    const result = streamText({
      model,
      system: systemPrompt,
      prompt:
        "Scan the conversation history above and produce a documentation summary of all findings that need to be recorded in the report or presentation.",
      temperature: 1,
    });

    const streamResult = await result;
    const encodedStream = streamResult.textStream.pipeThrough(
      new TextEncoderStream()
    );

    after(async () => {
      try {
        const fullText = await streamResult.text;
        const payload = {
          task_id: taskId,
          role: "assistant" as const,
          content: fullText,
          agent_type: "writer",
          metadata: {
            badge: "\uD83D\uDCCB Document Findings",
            is_document_findings: true,
          },
        };
        const { error: insertError } = await supabase
          .from("task_messages")
          .insert(payload);
        if (insertError) {
          console.error(
            "Failed to save document-findings message:",
            insertError
          );
          await new Promise((r) => setTimeout(r, 1000));
          await supabase.from("task_messages").insert(payload);
        }
      } catch (err) {
        console.error("after() document-findings DB insert failed:", err);
      }
    });

    return new Response(encodedStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Agent-Type": "writer",
        "X-Agent-Badge": encodeURIComponent("\uD83D\uDCCB Document Findings"),
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Document-findings API error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to generate documentation summary",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
