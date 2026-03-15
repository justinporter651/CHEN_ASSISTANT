"use client";

import { useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { TASK_MAP, TASK_GRAPH } from "@/lib/tasks/task-graph";
import { CATEGORY_MAP } from "@/lib/tasks/categories";
import { AGENT_CONFIGS } from "@/lib/ai/specialists";
import type { AgentType } from "@/lib/ai/types";
import {
  CheckCircle2,
  Circle,
  Lock,
  ArrowRight,
  FileText,
  Target,
  ListChecks,
} from "lucide-react";
import { ActionItemsPanel } from "./ActionItemsPanel";

interface TaskKeyPointsProps {
  taskId: string;
  completedIds: Set<string>;
}

/** Where this task's output goes in the final report */
const REPORT_DESTINATIONS: Record<string, string[]> = {
  foundations: ["Introduction", "Appendix 2", "Appendix 4", "Appendix 7"],
  reactor: ["Results — Equipment Specs", "Discussion — Optimization"],
  separation: ["Results — Equipment Specs", "Discussion — Optimization"],
  "heat-exchange": ["Results — Utility Specs Table", "Discussion — Heat Integration"],
  equipment: ["Results — Equipment Specs", "Results — Pipe Class Table"],
  verification: ["Appendix 1 — Aspen Report", "Stream Tables"],
  economics: ["Results — NPV Section", "Discussion", "Conclusions", "Abstract"],
  safety: ["Appendix 4 — Safety Analysis"],
  report: ["Report — Direct Content"],
  appendices: ["Appendices — Direct Content"],
  presentations: ["PowerPoint / Poster"],
};

export function TaskKeyPoints({ taskId, completedIds }: TaskKeyPointsProps) {
  const task = TASK_MAP[taskId];

  const { prerequisites, dependents, reportSections } = useMemo(() => {
    if (!task) return { prerequisites: [], dependents: [], reportSections: [] };

    // Prerequisites: tasks this one depends on
    const prerequisites = task.dependencies.map((depId) => ({
      id: depId,
      title: TASK_MAP[depId]?.title ?? depId,
      completed: completedIds.has(depId),
    }));

    // Dependents: tasks that depend on this one
    const dependents = TASK_GRAPH.filter((t) =>
      t.dependencies.includes(taskId)
    ).map((t) => ({
      id: t.id,
      title: t.title,
    }));

    const reportSections = REPORT_DESTINATIONS[task.category] ?? [];

    return { prerequisites, dependents, reportSections };
  }, [task, taskId, completedIds]);

  if (!task) return null;

  const category = CATEGORY_MAP[task.category];
  const agentConfig = AGENT_CONFIGS[task.agentType as AgentType];

  return (
    <aside className="w-72 border-l bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col h-full">
      <div className="px-4 py-3 border-b">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Task Overview
        </h3>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-5">
          {/* Task identity */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              {category && (
                <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                  {category.icon} {category.label}
                </Badge>
              )}
            </div>
            <p className="text-sm font-medium leading-snug">{task.title}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Specialist: {agentConfig?.icon} {agentConfig?.name}
            </p>
          </div>

          {/* Objective */}
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <Target className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Objective
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {task.description}
            </p>
          </div>

          {/* Prerequisites */}
          {prerequisites.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <ListChecks className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Prerequisites
                </span>
              </div>
              <ul className="space-y-1">
                {prerequisites.map((dep) => (
                  <li
                    key={dep.id}
                    className="flex items-start gap-1.5 text-xs"
                  >
                    {dep.completed ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <Circle className="h-3.5 w-3.5 text-zinc-400 mt-0.5 shrink-0" />
                    )}
                    <span
                      className={
                        dep.completed ? "text-muted-foreground line-through" : ""
                      }
                    >
                      {dep.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Report destinations */}
          {reportSections.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Goes Into
                </span>
              </div>
              <ul className="space-y-0.5">
                {reportSections.map((section) => (
                  <li
                    key={section}
                    className="text-xs text-muted-foreground flex items-center gap-1"
                  >
                    <span className="text-zinc-400">&rarr;</span> {section}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action items */}
          <ActionItemsPanel taskId={taskId} />

          {/* Unlocks next */}
          {dependents.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Unlocks
                </span>
              </div>
              <ul className="space-y-1">
                {dependents.map((dep) => (
                  <li
                    key={dep.id}
                    className="flex items-start gap-1.5 text-xs text-muted-foreground"
                  >
                    <Lock className="h-3 w-3 mt-0.5 shrink-0" />
                    <span>{dep.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </ScrollArea>
    </aside>
  );
}
