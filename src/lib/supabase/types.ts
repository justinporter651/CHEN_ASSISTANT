export interface Profile {
  id: string;
  display_name: string;
  avatar_url: string | null;
  created_at: string;
}

export interface DbMessage {
  id: string;
  user_id: string | null;
  role: "user" | "assistant" | "system";
  content: string;
  agent_type: string | null;
  agents_consulted: string[] | null;
  metadata: Record<string, unknown>;
  created_at: string;
  // Joined fields
  profiles?: Profile;
}

export interface DbProjectState {
  id: string;
  category: string;
  key: string;
  value: string;
  unit: string | null;
  source: string | null;
  updated_by: string | null;
  updated_at: string;
}

export interface DbAssumption {
  id: string;
  description: string;
  justification: string | null;
  category: string | null;
  created_by: string | null;
  created_at: string;
}

export interface DbChecklistRun {
  id: string;
  agent_type: string;
  category: string;
  items: ChecklistRunItem[];
  triggered_by: string | null;
  created_at: string;
}

export interface ChecklistRunItem {
  item: string;
  status: "pass" | "fail" | "needs_review";
  note: string;
}
