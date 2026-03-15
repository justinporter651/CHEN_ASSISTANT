"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTasks } from "@/hooks/useTasks";
import { CategoryHeader } from "./CategoryHeader";
import { TaskItem } from "./TaskItem";
import { Loader2 } from "lucide-react";
import { TASK_MAP } from "@/lib/tasks/task-graph";

export function TaskList() {
  const { categories, overallProgress, loading } = useTasks();
  const pathname = usePathname();

  // Extract current taskId from the URL
  const activeTaskId = pathname?.startsWith("/chat/")
    ? pathname.split("/")[2]
    : null;

  // Track which categories are expanded — starts empty, auto-expands active task's category
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set<string>()
  );

  // When the active task changes, ensure its category is expanded
  useEffect(() => {
    if (!activeTaskId) return;
    const task = TASK_MAP[activeTaskId];
    if (!task) return;
    setOpenCategories((prev) => {
      if (prev.has(task.category)) return prev;
      const next = new Set(prev);
      next.add(task.category);
      return next;
    });
  }, [activeTaskId]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {/* Category list */}
      {categories.map((category) => (
        <div key={category.categoryId}>
          <CategoryHeader
            category={category}
            isOpen={openCategories.has(category.categoryId)}
            onToggle={() => toggleCategory(category.categoryId)}
          />

          {/* Task items (when expanded) */}
          {openCategories.has(category.categoryId) && (
            <div className="ml-3 space-y-0.5 pb-2">
              {category.tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Overall progress bar */}
      <div className="pt-3 px-1">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
          <span>Overall Progress</span>
          <span className="tabular-nums font-medium">
            {overallProgress.completed}/{overallProgress.total} tasks ·{" "}
            {overallProgress.percent}%
          </span>
        </div>
        <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${overallProgress.percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
