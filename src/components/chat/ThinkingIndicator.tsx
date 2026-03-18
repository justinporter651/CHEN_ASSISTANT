"use client";

import { TASK_MAP } from "@/lib/tasks/task-graph";
import { AGENT_CONFIGS } from "@/lib/ai/specialists";
import type { AgentType } from "@/lib/ai/types";
import { Loader2 } from "lucide-react";

interface ThinkingIndicatorProps {
  status: string | null;
  taskId: string;
}

export function ThinkingIndicator({ status, taskId }: ThinkingIndicatorProps) {
  if (!status) return null;

  const task = TASK_MAP[taskId];
  const agentConfig = task ? AGENT_CONFIGS[task.agentType as AgentType] : null;

  const statusConfig: Record<string, { icon?: string; text: string }> = {
    routing: {
      text: "Routing your question",
    },
    connecting: {
      icon: agentConfig?.icon,
      text: `Consulting ${agentConfig?.name ?? "specialist"}`,
    },
    streaming: {
      icon: agentConfig?.icon,
      text: `${agentConfig?.name ?? "Specialist"} is responding`,
    },
    reviewing: {
      text: "Running completion review",
    },
  };

  const config = statusConfig[status] ?? { text: "Processing" };

  return (
    <div className="flex items-center gap-2.5 py-2 text-sm text-muted-foreground animate-in fade-in duration-300">
      <span className="flex items-center gap-2">
        {config.icon && <span className="text-base">{config.icon}</span>}
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      </span>
      <span>
        {config.text}
        <span className="inline-flex w-6">
          <AnimatedDots />
        </span>
      </span>
    </div>
  );
}

function AnimatedDots() {
  return (
    <span className="inline-flex">
      <span className="animate-pulse" style={{ animationDelay: "0ms" }}>.</span>
      <span className="animate-pulse" style={{ animationDelay: "200ms" }}>.</span>
      <span className="animate-pulse" style={{ animationDelay: "400ms" }}>.</span>
    </span>
  );
}
