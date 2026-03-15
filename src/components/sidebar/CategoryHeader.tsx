"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import type { CategoryProgress } from "@/lib/tasks/dependency-resolver";

interface CategoryHeaderProps {
  category: CategoryProgress;
  isOpen: boolean;
  onToggle: () => void;
}

export function CategoryHeader({
  category,
  isOpen,
  onToggle,
}: CategoryHeaderProps) {
  const allDone = category.completed === category.total;
  const hasProgress = category.completed > 0;

  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-2 px-1 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
    >
      {isOpen ? (
        <ChevronDown className="h-3 w-3 shrink-0" />
      ) : (
        <ChevronRight className="h-3 w-3 shrink-0" />
      )}
      <span className="shrink-0">{category.icon}</span>
      <span className="truncate">{category.label}</span>
      <span className="ml-auto shrink-0 tabular-nums">
        <span className={allDone ? "text-emerald-600" : hasProgress ? "text-blue-600" : ""}>
          {category.completed}
        </span>
        <span className="text-muted-foreground/50">/{category.total}</span>
      </span>
    </button>
  );
}
