import { generateText, streamText } from "ai";
import { model } from "./provider";
import { ORCHESTRATOR_SYSTEM_PROMPT } from "./prompts/orchestrator";
import { INTEGRITY_POLICY } from "./prompts/integrity-policy";
import { AGENT_CONFIGS } from "./specialists";
import {
  buildSpecialistContext,
  buildChecklistPrompt,
} from "./context-builder";
import {
  AgentType,
  ClassificationResult,
  ImageAttachment,
  Message,
  ProjectStateEntry,
} from "./types";
import { TASK_MAP, type TaskDefinition } from "@/lib/tasks/task-graph";
import { CATEGORY_MAP } from "@/lib/tasks/categories";
import { selectKnowledge } from "./knowledge/loader";

/**
 * Map task categories to their report/deliverable destinations.
 * Used by the document-findings endpoint to tell students where work goes.
 * NOT injected into normal chat responses.
 */
export const DELIVERABLE_DESTINATIONS: Record<string, string> = {
  foundations:
    "Introduction, Appendix 2 (background), Appendix 7 (thermo), or Appendix 4 (safety).",
  reactor:
    "Results section (equipment specs table, process description), Discussion section (optimization justification with NPV comparisons).",
  separation:
    "Results section (equipment specs, process description), Discussion section (optimization justification).",
  "heat-exchange":
    "Results section (utility specifications table itemized by equipment, equipment specs table). Heat integration discussion in Discussion section.",
  equipment:
    "Results section (equipment specifications table with min/max design T and P, pipe class table).",
  verification:
    "Appendix 1 (Aspen report), stream tables, equipment specs.",
  economics:
    "Results section (NPV, Monte Carlo, break-even, cash flow table), Discussion section, Conclusions, Abstract (key NPV number).",
  safety:
    "Appendix 4 (SDS summaries, Process Safety Data Summary table, HAZOPs, inherently safer design review).",
  report:
    "Direct report content (Word document).",
  appendices:
    "Appendices in the Word document (order: 1-7+).",
  presentations:
    "PowerPoint slides, poster, or Q&A preparation notes.",
};

/**
 * Build the task context block that gets injected into the orchestrator and specialist prompts.
 * This tells the agent what deliverable the user is working on and where the output goes.
 */
function buildTaskContext(taskId: string): string {
  const task = TASK_MAP[taskId];
  if (!task) return "";

  const category = CATEGORY_MAP[task.category];
  const categoryLabel = category?.label ?? task.category;

  return `
== ACTIVE TASK ==
TASK: "${task.title}"
CATEGORY: ${categoryLabel}
PRIMARY AGENT: ${task.agentType}
OBJECTIVE: ${task.description}

== GUIDANCE ==
The user is currently working on this task. Focus on answering their question directly. When they seem unsure or send a vague message, check in on where they are and guide them to the next concrete action. Do NOT proactively tell them where this work goes in the report — they can use the "Document Findings" button for that. Route technical questions to the appropriate specialist, defaulting to the primary agent (${task.agentType}) when the question is ambiguous.
`;
}

/**
 * Classify a user message to determine which specialist agent(s) should handle it.
 * Now task-aware: the orchestrator knows what deliverable the user is working on.
 */
export async function classifyMessage(
  userMessage: string,
  recentMessages: Message[],
  taskId?: string
): Promise<ClassificationResult> {
  const contextSnippet = recentMessages
    .slice(-3)
    .map((m) => `${m.role}: ${m.content.slice(0, 100)}`)
    .join("\n");

  const taskContext = taskId ? buildTaskContext(taskId) : "";

  const { text } = await generateText({
    model,
    system: ORCHESTRATOR_SYSTEM_PROMPT + taskContext,
    prompt: `Recent context:\n${contextSnippet}\n\nNew message to classify:\n"${userMessage}"`,
    temperature: 1,
  });

  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON found in classification response");
    }
    const parsed = JSON.parse(jsonMatch[0]);

    const agents = Array.isArray(parsed.agents) ? parsed.agents : [];
    const validAgents = agents.filter(
      (a: string) => typeof a === "string" && a in AGENT_CONFIGS
    );

    // If no valid agents and we have a task, fall back to the task's primary agent
    const fallbackAgent = taskId
      ? TASK_MAP[taskId]?.agentType ?? "design"
      : "design";

    return {
      agents:
        validAgents.length > 0
          ? validAgents
          : [fallbackAgent as AgentType],
      reasoning: parsed.reasoning || "Routed to specialist",
      isChecklist: parsed.isChecklist || false,
    };
  } catch {
    const fallbackAgent = taskId
      ? TASK_MAP[taskId]?.agentType ?? "design"
      : "design";
    console.error("Classification failed, using fallback. Raw:", text);
    return {
      agents: [fallbackAgent as AgentType],
      reasoning: "Classification failed — defaulting to task's primary agent",
      isChecklist: false,
    };
  }
}

/**
 * Call a specialist agent with scoped context and stream the response.
 * Now includes task context so the specialist knows the deliverable.
 */
/**
 * Build multimodal message content array when images are present.
 * Returns a content array with text + image parts for the AI SDK.
 */
function buildMultimodalContent(
  userMessage: string,
  attachments?: ImageAttachment[]
): string | Array<{ type: "text"; text: string } | { type: "image"; image: string; mimeType: string }> {
  if (!attachments || attachments.length === 0) {
    return userMessage;
  }

  const parts: Array<{ type: "text"; text: string } | { type: "image"; image: string; mimeType: string }> = [];

  // Add text part first
  if (userMessage.trim()) {
    parts.push({ type: "text", text: userMessage });
  }

  // Add image parts — extract raw base64 from data URL
  for (const att of attachments) {
    const base64Match = att.dataUrl.match(/^data:[^;]+;base64,(.+)$/);
    if (base64Match) {
      parts.push({
        type: "image",
        image: base64Match[1],
        mimeType: att.mediaType,
      });
    }
  }

  return parts.length > 0 ? parts : userMessage;
}

export function callSpecialist(
  agentType: AgentType,
  userMessage: string,
  recentMessages: Message[],
  projectState: ProjectStateEntry[],
  isChecklist: boolean,
  taskId?: string,
  conversationSummary?: string,
  attachments?: ImageAttachment[]
) {
  const config = AGENT_CONFIGS[agentType];
  const context = buildSpecialistContext(
    agentType,
    recentMessages,
    projectState,
    conversationSummary
  );

  // Integrity policy is ALWAYS first — non-negotiable, cannot be overridden
  let systemPrompt = INTEGRITY_POLICY + config.systemPrompt;

  // Inject task context so the specialist knows what deliverable is active
  if (taskId) {
    systemPrompt += buildTaskContext(taskId);
  }

  if (isChecklist) {
    systemPrompt += buildChecklistPrompt(agentType, projectState);
  }

  // Inject relevant knowledge reference material (keyword-matched, no LLM call)
  const knowledge = selectKnowledge(agentType, userMessage);
  if (knowledge) {
    systemPrompt += knowledge;
  }

  systemPrompt += `\n\n${context}`;

  // When images are attached, use messages array with multimodal content;
  // otherwise use simple prompt string
  if (attachments && attachments.length > 0) {
    const content = buildMultimodalContent(userMessage, attachments);
    return streamText({
      model,
      system: systemPrompt,
      messages: [{ role: "user" as const, content: content as Array<{ type: "text"; text: string } | { type: "image"; image: string; mimeType: string }> }],
      temperature: 1,
    });
  }

  return streamText({
    model,
    system: systemPrompt,
    prompt: userMessage,
    temperature: 1,
  });
}

/**
 * Orchestrate a full request: classify → route → respond.
 * Task-aware: the orchestrator and specialists both know the active deliverable.
 */
export async function orchestrate(
  userMessage: string,
  recentMessages: Message[],
  projectState: ProjectStateEntry[],
  taskId?: string,
  conversationSummary?: string,
  primaryAgent?: AgentType,
  attachments?: ImageAttachment[]
) {
  // If a primary agent is specified, skip classification and route directly
  if (primaryAgent) {
    const config = AGENT_CONFIGS[primaryAgent];
    const result = callSpecialist(
      primaryAgent,
      userMessage,
      recentMessages,
      projectState,
      false,
      taskId,
      conversationSummary,
      attachments
    );
    return {
      stream: result,
      agentType: primaryAgent,
      agentsConsulted: [primaryAgent],
      badge: `${config.icon} ${config.name}`,
    };
  }

  // Step 1: Classify (with task context)
  const classification = await classifyMessage(
    userMessage,
    recentMessages,
    taskId
  );

  // Step 2: If single agent, stream directly
  if (classification.agents.length === 1) {
    const agentType = classification.agents[0];
    const config = AGENT_CONFIGS[agentType];

    const result = callSpecialist(
      agentType,
      userMessage,
      recentMessages,
      projectState,
      classification.isChecklist,
      taskId,
      conversationSummary,
      attachments
    );

    return {
      stream: result,
      agentType,
      agentsConsulted: classification.agents,
      badge: `${config.icon} ${config.name}`,
    };
  }

  // Step 3: Multi-agent — collect responses in parallel and combine
  const agentPromises = classification.agents.map((agentType, i) => {
    const config = AGENT_CONFIGS[agentType];
    // Only include images in the first specialist call
    const agentAttachments = i === 0 ? attachments : undefined;

    const knowledge = selectKnowledge(agentType, userMessage);

    // Build multimodal content for first agent if images are present
    const multimodalContent = agentAttachments && agentAttachments.length > 0
      ? buildMultimodalContent(userMessage, agentAttachments)
      : undefined;

    const systemPromptMulti =
      INTEGRITY_POLICY +
      config.systemPrompt +
      (taskId ? buildTaskContext(taskId) : "") +
      knowledge +
      buildSpecialistContext(agentType, recentMessages, projectState, conversationSummary) +
      (classification.isChecklist
        ? buildChecklistPrompt(agentType, projectState)
        : "");

    const textPromise = multimodalContent
      ? generateText({
          model,
          system: systemPromptMulti,
          messages: [{ role: "user" as const, content: multimodalContent as Array<{ type: "text"; text: string } | { type: "image"; image: string; mimeType: string }> }],
          temperature: 1,
        })
      : generateText({
          model,
          system: systemPromptMulti,
          prompt: userMessage,
          temperature: 1,
        });

    return textPromise;
  });

  const settledResults = await Promise.allSettled(agentPromises);

  const responses = settledResults.map((result, i) => {
    const agentType = classification.agents[i];
    const config = AGENT_CONFIGS[agentType];
    const badge = `${config.icon} ${config.name}`;

    if (result.status === "fulfilled") {
      return { agent: agentType, badge, text: result.value.text };
    } else {
      console.error(`Multi-agent: ${agentType} failed, skipping:`, result.reason);
      return { agent: agentType, badge, text: `*${config.name} was unable to respond at this time.*` };
    }
  });

  const combined = responses
    .map((r) => `**${r.badge}**\n\n${r.text}`)
    .join("\n\n---\n\n");

  const result = streamText({
    model,
    system:
      "You are formatting a combined response from multiple specialist agents. Output the following content exactly as provided, maintaining all formatting and badges.",
    prompt: `Output this combined specialist response:\n\n${combined}`,
    temperature: 1,
  });

  return {
    stream: result,
    agentType: classification.agents[0],
    agentsConsulted: classification.agents,
    badge: responses.map((r) => r.badge).join(" + "),
  };
}
