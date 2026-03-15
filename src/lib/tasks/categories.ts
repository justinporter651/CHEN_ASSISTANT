export interface TaskCategory {
  id: string;
  label: string;
  icon: string;
  order: number;
}

export const CATEGORIES: TaskCategory[] = [
  { id: "foundations", label: "Foundations", icon: "🧱", order: 0 },
  { id: "reactor", label: "Reactor Design", icon: "⚗️", order: 1 },
  { id: "separation", label: "Separation System", icon: "🔬", order: 2 },
  { id: "heat-exchange", label: "Heat Exchange & Utilities", icon: "🔥", order: 3 },
  { id: "equipment", label: "Equipment & Piping", icon: "🔩", order: 4 },
  { id: "verification", label: "Simulation Verification", icon: "✔️", order: 5 },
  { id: "economics", label: "Economics", icon: "📊", order: 6 },
  { id: "safety", label: "Safety", icon: "🛡️", order: 7 },
  { id: "report", label: "Report Sections", icon: "📄", order: 8 },
  { id: "appendices", label: "Appendices", icon: "📎", order: 9 },
  { id: "presentations", label: "Presentations", icon: "🎤", order: 10 },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
);
