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
  Message,
  ProjectStateEntry,
} from "./types";
import { TASK_MAP, type TaskDefinition } from "@/lib/tasks/task-graph";
import { CATEGORY_MAP } from "@/lib/tasks/categories";
import { selectKnowledge } from "./knowledge/loader";

/**
 * Map task categories to their report/deliverable destinations.
 */
const DELIVERABLE_DESTINATIONS: Record<string, string> = {
  foundations:
    "This foundational work feeds into: Introduction, Appendix 2 (background), Appendix 7 (thermo), or Appendix 4 (safety). It must be completed before downstream design tasks can proceed.",
  reactor:
    "Reactor results go into: Results section (equipment specs table, process description), Discussion section (optimization justification with NPV comparisons). Key reactor parameters belong on a PowerPoint slide and are common Q&A topics.",
  separation:
    "Separation results go into: Results section (equipment specs, process description), Discussion section (optimization justification). Column performance data belongs in the equipment specs table.",
  "heat-exchange":
    "Heat exchange results go into: Results section (utility specifications table itemized by equipment, equipment specs table). Heat integration discussion goes in the Discussion section.",
  equipment:
    "Equipment specifications go into: Results section (equipment specifications table with min/max design T and P, pipe class table). Materials of construction are noted in equipment specs.",
  verification:
    "Verification results confirm simulation validity. They feed into: Appendix 1 (Aspen report), and give confidence to all Results section data (stream tables, equipment specs).",
  economics:
    "Economic results go into: Results section (NPV, Monte Carlo, break-even, cash flow table and diagrams, supplementary measures), Discussion section (economic justification), Conclusions (viability recommendation), and Abstract (key NPV number). NPV and Monte Carlo plots are high-impact PowerPoint slides.",
  safety:
    "Safety analysis goes into: Appendix 4 (SDS summaries, Process Safety Data Summary table, both HAZOPs, inherently safer design review). Safety concerns also inform equipment specs (materials) and pipe class table. Safety is a common Q&A topic — prepare backup slides.",
  report:
    "This is direct report content for the Word document. Follow all formatting standards: passive voice, present tense, no first person, figures called out before they appear, recommendation framing.",
  appendices:
    "This appendix content goes directly into the Word document in the correct appendix order (1-7+). Ensure formatting matches the main report style.",
  presentations:
    "This content goes directly into PowerPoint slides, the poster, or speaker/Q&A preparation notes. Remember: slides should be brief, the speaker amplifies verbally. Poster must pass the 5-foot rule.",
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
  const deliverableDest =
    DELIVERABLE_DESTINATIONS[task.category] ??
    "Connect this work to the appropriate report section or presentation material.";

  // Find dependent tasks (what comes after this one)
  const dependentTasks = Object.values(TASK_MAP).filter((t) =>
    t.dependencies.includes(taskId)
  );
  const nextSteps =
    dependentTasks.length > 0
      ? dependentTasks.map((t) => `"${t.title}"`).join(", ")
      : "No downstream tasks — this may be a final deliverable.";

  return `
== ACTIVE DELIVERABLE ==
TASK: "${task.title}"
CATEGORY: ${categoryLabel}
PRIMARY AGENT: ${task.agentType}
OBJECTIVE: ${task.description}

== WHERE THIS WORK GOES ==
${deliverableDest}

== WHAT COMES NEXT ==
After this task is complete, it unlocks: ${nextSteps}

== GUIDANCE ==
The user is currently working on this deliverable. Walk them through it step by step. When they seem unsure or send a vague message, check in on where they are and guide them to the next concrete action. Always connect their work back to the final deliverables (report, PowerPoint, poster). Route technical questions to the appropriate specialist, defaulting to the primary agent (${task.agentType}) when the question is ambiguous.
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

    const validAgents = parsed.agents.filter(
      (a: string) => a in AGENT_CONFIGS
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
export function callSpecialist(
  agentType: AgentType,
  userMessage: string,
  recentMessages: Message[],
  projectState: ProjectStateEntry[],
  isChecklist: boolean,
  taskId?: string,
  conversationSummary?: string
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
  conversationSummary?: string
) {
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
      conversationSummary
    );

    return {
      stream: result,
      agentType,
      agentsConsulted: classification.agents,
      badge: `${config.icon} ${config.name}`,
    };
  }

  // Step 3: Multi-agent — collect responses and combine
  const responses: { agent: AgentType; badge: string; text: string }[] = [];

  for (const agentType of classification.agents) {
    const config = AGENT_CONFIGS[agentType];

    const knowledge = selectKnowledge(agentType, userMessage);
    const { text } = await generateText({
      model,
      system:
        INTEGRITY_POLICY +
        config.systemPrompt +
        (taskId ? buildTaskContext(taskId) : "") +
        knowledge +
        buildSpecialistContext(agentType, recentMessages, projectState, conversationSummary) +
        (classification.isChecklist
          ? buildChecklistPrompt(agentType, projectState)
          : ""),
      prompt: userMessage,
      temperature: 1,
    });

    responses.push({
      agent: agentType,
      badge: `${config.icon} ${config.name}`,
      text,
    });
  }

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
