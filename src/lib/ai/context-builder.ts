import { AgentType, Message, ProjectStateEntry } from "./types";
import { AGENT_CONFIGS } from "./specialists";

const MAX_CONTEXT_MESSAGES = 10;
const SUMMARY_THRESHOLD = 50;

/**
 * Build the scoped context for a specialist agent.
 * Only includes relevant project state and recent messages to minimize token usage.
 */
export function buildSpecialistContext(
  agentType: AgentType,
  recentMessages: Message[],
  projectState: ProjectStateEntry[],
  conversationSummary?: string
): string {
  const config = AGENT_CONFIGS[agentType];

  // Filter project state to only categories this agent cares about
  const relevantState = projectState.filter((entry) =>
    config.contextCategories.includes(entry.category)
  );

  // Take only the last N messages
  const contextMessages = recentMessages.slice(-MAX_CONTEXT_MESSAGES);

  let context = "";

  // Add project state if any exists
  if (relevantState.length > 0) {
    context += "\n== CURRENT PROJECT STATE ==\n";
    const byCategory = groupBy(relevantState, "category");
    for (const [category, entries] of Object.entries(byCategory)) {
      context += `\n[${category.toUpperCase()}]\n`;
      for (const entry of entries) {
        context += `- ${entry.key}: ${entry.value}${entry.unit ? ` ${entry.unit}` : ""}`;
        if (entry.source) context += ` (set by ${entry.source})`;
        context += "\n";
      }
    }
    context += "\n";
  }

  // Add conversation summary if older messages were compacted
  if (conversationSummary) {
    context += "== CONVERSATION SUMMARY (older messages) ==\n";
    context += conversationSummary + "\n\n";
  }

  // Add recent conversation context
  if (contextMessages.length > 0) {
    context += "== RECENT CONVERSATION ==\n";
    for (const msg of contextMessages) {
      const role = msg.role === "user" ? "Team Member" : `AI (${msg.agent_type || "system"})`;
      context += `${role}: ${msg.content}\n\n`;
    }
  }

  return context;
}

/**
 * Build a checklist prompt that the agent can use to verify project state.
 */
export function buildChecklistPrompt(
  agentType: AgentType,
  projectState: ProjectStateEntry[]
): string {
  const config = AGENT_CONFIGS[agentType];
  if (config.checklist.length === 0) return "";

  let prompt = `\nPlease run through your verification checklist for the current project state. For each item:\n`;
  prompt += `- If the project state shows it's been addressed, mark it ✅ with the current value.\n`;
  prompt += `- If it hasn't been addressed yet, mark it ⚠️ and ask the specific question.\n`;
  prompt += `- At the end, provide a 💡 Suggested next step.\n\n`;
  prompt += `Format your response as a clean checklist under the header "📋 ${config.name} Verification"\n\n`;
  prompt += `CHECKLIST ITEMS:\n`;

  for (const item of config.checklist) {
    prompt += `- ${item.description}`;
    if (item.stateKey) {
      const stateEntry = projectState.find(
        (s) => `${s.category}.${s.key}` === item.stateKey
      );
      if (stateEntry) {
        prompt += ` [CURRENT VALUE: ${stateEntry.value}${stateEntry.unit ? ` ${stateEntry.unit}` : ""}]`;
      } else {
        prompt += ` [NOT YET SET]`;
      }
    }
    prompt += `\n  If missing, ask: "${item.prompt}"\n`;
  }

  return prompt;
}

/**
 * Summarize older messages to compress context when conversation gets long.
 */
export function shouldSummarize(messageCount: number): boolean {
  return messageCount > SUMMARY_THRESHOLD;
}

export function buildSummaryPrompt(messages: Message[]): string {
  const oldMessages = messages.slice(0, -MAX_CONTEXT_MESSAGES);
  let prompt = "Summarize the following conversation history in 3-5 bullet points, focusing on:\n";
  prompt += "1. Key design decisions made\n";
  prompt += "2. Important parameters established\n";
  prompt += "3. Outstanding questions or issues\n\n";
  prompt += "CONVERSATION:\n";

  for (const msg of oldMessages) {
    const role = msg.role === "user" ? "User" : "AI";
    // Truncate long messages for the summary prompt
    const content =
      msg.content.length > 200
        ? msg.content.slice(0, 200) + "..."
        : msg.content;
    prompt += `${role}: ${content}\n`;
  }

  return prompt;
}

// Utility
function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce(
    (acc, item) => {
      const k = String(item[key]);
      if (!acc[k]) acc[k] = [];
      acc[k].push(item);
      return acc;
    },
    {} as Record<string, T[]>
  );
}
