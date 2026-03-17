import { AgentConfig, AgentType } from "./types";
import { ASPEN_SYSTEM_PROMPT, ASPEN_CHECKLIST } from "./prompts/aspen";
import { DESIGN_SYSTEM_PROMPT, DESIGN_CHECKLIST } from "./prompts/design";
import {
  ECONOMICS_SYSTEM_PROMPT,
  ECONOMICS_CHECKLIST,
} from "./prompts/economics";
import { SAFETY_SYSTEM_PROMPT, SAFETY_CHECKLIST } from "./prompts/safety";
import { WRITER_SYSTEM_PROMPT, WRITER_CHECKLIST } from "./prompts/writer";
import {
  PRESENTATION_SYSTEM_PROMPT,
  PRESENTATION_CHECKLIST,
} from "./prompts/presentation";
import { THERMO_SYSTEM_PROMPT, THERMO_CHECKLIST } from "./prompts/thermo";
import { ORCHESTRATOR_GUIDE_PROMPT } from "./prompts/orchestrator";

export const AGENT_CONFIGS: Record<AgentType, AgentConfig> = {
  orchestrator: {
    id: "orchestrator",
    name: "Guide",
    icon: "🧭",
    description: "Walks you through the task and connects work to deliverables",
    systemPrompt: ORCHESTRATOR_GUIDE_PROMPT,
    checklist: [],
    contextCategories: [
      "simulation",
      "reactor",
      "columns",
      "equipment",
      "piping",
      "heat_integration",
      "optimization",
      "economics",
      "costs",
      "safety",
      "materials",
      "thermo",
      "report",
      "deliverables",
      "presentation",
      "poster",
    ],
  },
  aspen: {
    id: "aspen",
    name: "Aspen Troubleshooter",
    icon: "🔧",
    description: "Aspen Plus simulation help",
    systemPrompt: ASPEN_SYSTEM_PROMPT,
    checklist: ASPEN_CHECKLIST,
    contextCategories: [
      "simulation",
      "reactor",
      "columns",
      "equipment",
      "thermo",
    ],
  },
  design: {
    id: "design",
    name: "Process Design",
    icon: "⚙️",
    description: "Equipment sizing, optimization, heat integration",
    systemPrompt: DESIGN_SYSTEM_PROMPT,
    checklist: DESIGN_CHECKLIST,
    contextCategories: [
      "reactor",
      "columns",
      "equipment",
      "piping",
      "heat_integration",
      "optimization",
    ],
  },
  economics: {
    id: "economics",
    name: "Economics",
    icon: "📊",
    description: "NPV, Monte Carlo, cash flow analysis",
    systemPrompt: ECONOMICS_SYSTEM_PROMPT,
    checklist: ECONOMICS_CHECKLIST,
    contextCategories: ["economics", "equipment", "costs"],
  },
  safety: {
    id: "safety",
    name: "Safety & HAZOP",
    icon: "🛡️",
    description: "HAZOP, SDS, pipe class, safety analysis",
    systemPrompt: SAFETY_SYSTEM_PROMPT,
    checklist: SAFETY_CHECKLIST,
    contextCategories: [
      "safety",
      "piping",
      "materials",
      "reactor",
      "columns",
    ],
  },
  writer: {
    id: "writer",
    name: "Technical Writer",
    icon: "✍️",
    description: "Report structure, formatting, rubric compliance",
    systemPrompt: WRITER_SYSTEM_PROMPT,
    checklist: WRITER_CHECKLIST,
    contextCategories: ["report", "deliverables"],
  },
  presentation: {
    id: "presentation",
    name: "Presentation Coach",
    icon: "🎤",
    description: "Slides, poster, oral delivery, Q&A prep",
    systemPrompt: PRESENTATION_SYSTEM_PROMPT,
    checklist: PRESENTATION_CHECKLIST,
    contextCategories: ["presentation", "poster", "deliverables"],
  },
  thermo: {
    id: "thermo",
    name: "Thermo Advisor",
    icon: "🌡️",
    description: "Method selection, VLE validation",
    systemPrompt: THERMO_SYSTEM_PROMPT,
    checklist: THERMO_CHECKLIST,
    contextCategories: ["thermo", "simulation"],
  },
};

const FALLBACK_CONFIG = AGENT_CONFIGS["design"];

export function getAgentConfig(agentType: AgentType): AgentConfig {
  return AGENT_CONFIGS[agentType] ?? FALLBACK_CONFIG;
}

export function getAgentBadge(agentType: AgentType): {
  icon: string;
  name: string;
} {
  const config = AGENT_CONFIGS[agentType] ?? FALLBACK_CONFIG;
  return { icon: config.icon, name: config.name };
}

export const AGENT_LIST = Object.values(AGENT_CONFIGS).filter(
  (a) => a.id !== "orchestrator"
);
