export const DEADLINES = [
  {
    id: "capstone-poster",
    title: "Capstone Poster Session",
    date: new Date("2026-04-02T10:00:00"),
    icon: "🎪",
    type: "presentation" as const,
  },
  {
    id: "report",
    title: "Written Report Due",
    date: new Date("2026-04-09T09:00:00"),
    icon: "📄",
    type: "report" as const,
  },
  {
    id: "aspen-bkp",
    title: "Aspen .bkp File Due",
    date: new Date("2026-04-09T09:00:00"),
    icon: "💾",
    type: "report" as const,
  },
  {
    id: "slides-poster",
    title: "Slides & Poster Upload",
    date: new Date("2026-04-20T12:00:00"),
    icon: "📊",
    type: "presentation" as const,
  },
  {
    id: "oral-presentations",
    title: "Oral Presentations",
    date: new Date("2026-04-21T08:00:00"),
    icon: "🎤",
    type: "presentation" as const,
  },
];

export function getDaysUntil(date: Date): number {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function getDeadlineStatus(
  date: Date
): "overdue" | "urgent" | "upcoming" | "future" {
  const days = getDaysUntil(date);
  if (days < 0) return "overdue";
  if (days <= 3) return "urgent";
  if (days <= 14) return "upcoming";
  return "future";
}

export function formatDeadlineDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
