"use client";

import { useRouter, usePathname } from "next/navigation";
import type { ResolvedTask } from "@/lib/tasks/dependency-resolver";
import { Check, Circle, Loader2 } from "lucide-react";

interface TaskItemProps {
  task: ResolvedTask;
}

const STATUS_CONFIG = {
  completed: {
    icon: Check,
    className: "text-emerald-600",
    bgClassName: "bg-emerald-50 dark:bg-emerald-950/30",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
    clickable: true,
  },
  in_progress: {
    icon: Loader2,
    className: "text-blue-600",
    bgClassName: "bg-blue-50 dark:bg-blue-950/30",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    clickable: true,
  },
  available: {
    icon: Circle,
    className: "text-zinc-400",
    bgClassName: "hover:bg-zinc-50 dark:hover:bg-zinc-800/50",
    iconBg: "bg-zinc-100 dark:bg-zinc-800",
    clickable: true,
  },
};

export function TaskItem({ task }: TaskItemProps) {
  const router = useRouter();
  const pathname = usePathname();
  const config = STATUS_CONFIG[task.status];
  const Icon = config.icon;
  const isActive = pathname === `/chat/${task.id}`;

  const handleClick = () => {
    if (config.clickable) {
      router.push(`/chat/${task.id}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!config.clickable}
      title={task.title}
      className={`
        w-full flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors
        ${config.bgClassName}
        ${isActive ? "ring-1 ring-blue-400 bg-blue-50 dark:bg-blue-950/40" : ""}
        ${config.clickable ? "cursor-pointer" : "cursor-not-allowed"}
      `}
    >
      <div
        className={`shrink-0 h-4 w-4 rounded-full flex items-center justify-center ${config.iconBg}`}
      >
        <Icon
          className={`h-2.5 w-2.5 ${config.className} ${task.status === "in_progress" ? "animate-spin" : ""}`}
        />
      </div>
      <span
        className={`truncate ${
          task.status === "completed"
            ? "line-through text-muted-foreground"
            : "text-foreground"
        }`}
      >
        {task.title}
      </span>
    </button>
  );
}
