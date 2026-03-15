import { readFileSync } from "fs";
import { join } from "path";
import type { KnowledgeTopic } from "../aspen";

export const DESIGN_TOPICS: KnowledgeTopic[] = [
  {
    id: "heuristics",
    file: "heuristics.md",
    keywords: [
      "heuristic", "rule of thumb", "sizing", "vessel", "drum",
      "holdup", "flooding", "h/d ratio", "d/h ratio", "efficiency",
      "material of construction", "carbon steel", "stainless",
      "pressure rating", "pipe class", "velocity", "residence time",
    ],
    description: "Equipment sizing heuristics and design rules of thumb",
  },
];

const knowledgeDir = join(__dirname, ".");

export function loadDesignContent(topicId: string): string {
  const topic = DESIGN_TOPICS.find((t) => t.id === topicId);
  if (!topic) return "";
  try {
    return readFileSync(join(knowledgeDir, topic.file), "utf-8");
  } catch {
    console.warn(`Knowledge file not found: ${topic.file}`);
    return "";
  }
}
