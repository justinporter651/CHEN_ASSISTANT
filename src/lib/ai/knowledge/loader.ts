import { ASPEN_TOPICS, loadTopicContent } from "./aspen";
import { WRITING_TOPICS, loadWritingContent } from "./writing";
import { ECONOMICS_TOPICS, loadEconomicsContent } from "./economics";
import { DESIGN_TOPICS, loadDesignContent } from "./design";
import type { AgentType } from "../types";
import type { KnowledgeTopic } from "./aspen";

/**
 * Map agent types to their knowledge topic registries and loaders.
 */
const AGENT_KNOWLEDGE: Record<
  string,
  { topics: KnowledgeTopic[]; loader: (id: string) => string; label: string }
> = {
  aspen: { topics: ASPEN_TOPICS, loader: loadTopicContent, label: "ASPEN PLUS REFERENCE MATERIAL" },
  writer: { topics: WRITING_TOPICS, loader: loadWritingContent, label: "TECHNICAL WRITING REFERENCE" },
  economics: { topics: ECONOMICS_TOPICS, loader: loadEconomicsContent, label: "ECONOMICS REFERENCE MATERIAL" },
  design: { topics: DESIGN_TOPICS, loader: loadDesignContent, label: "DESIGN REFERENCE MATERIAL" },
};

/**
 * Score a topic against a user message based on keyword matches.
 */
function scoreTopic(
  topicKeywords: string[],
  messageLower: string
): number {
  let score = 0;
  for (const keyword of topicKeywords) {
    if (messageLower.includes(keyword.toLowerCase())) {
      score += keyword.length > 5 ? 2 : 1;
    }
  }
  return score;
}

/**
 * Select relevant knowledge content for the given agent and user message.
 * Returns the content of the top 1-2 matching knowledge files, or empty string.
 */
export function selectKnowledge(
  agentType: AgentType,
  userMessage: string
): string {
  const config = AGENT_KNOWLEDGE[agentType];
  if (!config) return "";

  const messageLower = userMessage.toLowerCase();

  const scored = config.topics
    .map((topic) => ({
      topic,
      score: scoreTopic(topic.keywords, messageLower),
    }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  const topTopics = scored.slice(0, 2);
  if (topTopics.length === 0) return "";

  const sections = topTopics
    .map((s) => {
      const content = config.loader(s.topic.id);
      if (!content) return "";
      return `\n== REFERENCE: ${s.topic.description.toUpperCase()} ==\n${content}`;
    })
    .filter(Boolean);

  if (sections.length === 0) return "";

  return `\n\n== ${config.label} ==` + sections.join("\n");
}
