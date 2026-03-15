export type AgentType =
  | "orchestrator"
  | "aspen"
  | "design"
  | "economics"
  | "safety"
  | "writer"
  | "presentation"
  | "thermo";

export interface AgentConfig {
  id: AgentType;
  name: string;
  icon: string;
  description: string;
  systemPrompt: string;
  checklist: ChecklistItem[];
  contextCategories: string[]; // which project_state categories to inject
}

export interface ChecklistItem {
  id: string;
  category: string;
  description: string;
  stateKey?: string; // project_state key to check for auto-verification
  prompt: string; // what to ask the user if missing
}

export interface ProjectStateEntry {
  category: string;
  key: string;
  value: string;
  unit?: string;
  source?: string;
}

export interface ClassificationResult {
  agents: AgentType[];
  reasoning: string;
  isChecklist: boolean;
}

export interface Message {
  id: string;
  user_id: string | null;
  role: "user" | "assistant" | "system";
  content: string;
  agent_type: string | null;
  agents_consulted: string[] | null;
  metadata: Record<string, unknown>;
  created_at: string;
}
