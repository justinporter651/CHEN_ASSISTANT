import { readFileSync } from "fs";
import { join } from "path";
import type { KnowledgeTopic } from "../aspen";

export const WRITING_TOPICS: KnowledgeTopic[] = [
  {
    id: "technical-writing",
    file: "technical-writing.md",
    keywords: [
      "writing", "report", "abstract", "introduction", "discussion",
      "conclusion", "passive voice", "present tense", "figure", "table",
      "caption", "equation", "formatting", "appendix", "reference",
      "citation", "rubric", "section", "cover memo", "recommendation",
      "first person", "callout", "word document",
    ],
    description: "Technical writing standards, report structure, formatting rules",
  },
];

const knowledgeDir = join(__dirname, ".");

export function loadWritingContent(topicId: string): string {
  const topic = WRITING_TOPICS.find((t) => t.id === topicId);
  if (!topic) return "";
  try {
    return readFileSync(join(knowledgeDir, topic.file), "utf-8");
  } catch {
    console.warn(`Knowledge file not found: ${topic.file}`);
    return "";
  }
}
