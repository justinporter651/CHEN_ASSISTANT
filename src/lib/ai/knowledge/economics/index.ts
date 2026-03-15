import { readFileSync } from "fs";
import { join } from "path";
import type { KnowledgeTopic } from "../aspen";

export const ECONOMICS_TOPICS: KnowledgeTopic[] = [
  {
    id: "economic-analysis",
    file: "economic-analysis.md",
    keywords: [
      "npv", "net present value", "cash flow", "discount", "irr",
      "dcfror", "payback", "profitability", "break-even", "breakeven",
      "monte carlo", "sensitivity", "time value", "depreciation", "macrs",
      "tax", "revenue", "working capital", "salvage",
    ],
    description: "NPV, cash flow, profitability measures, sensitivity analysis",
  },
  {
    id: "manufacturing-cost",
    file: "manufacturing-cost.md",
    keywords: [
      "manufacturing cost", "com", "operating cost", "raw material",
      "utility cost", "labor", "maintenance", "direct cost", "fixed cost",
      "general expense", "operating labor", "steam cost", "cooling water cost",
      "electricity cost", "annual cost",
    ],
    description: "Cost of manufacturing, operating costs, utility pricing",
  },
  {
    id: "capital-cost",
    file: "capital-cost.md",
    keywords: [
      "capital cost", "tci", "fci", "equipment cost", "bare module",
      "capcost", "cepci", "lang factor", "module factor", "pressure factor",
      "material factor", "grassroots", "purchase cost", "installed cost",
      "total capital", "investment",
    ],
    description: "Capital cost estimation, bare module method, CEPCI indexing",
  },
];

const knowledgeDir = join(__dirname, ".");

export function loadEconomicsContent(topicId: string): string {
  const topic = ECONOMICS_TOPICS.find((t) => t.id === topicId);
  if (!topic) return "";
  try {
    return readFileSync(join(knowledgeDir, topic.file), "utf-8");
  } catch {
    console.warn(`Knowledge file not found: ${topic.file}`);
    return "";
  }
}
