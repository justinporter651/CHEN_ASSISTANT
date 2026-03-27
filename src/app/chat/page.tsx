"use client";

import { useRouter } from "next/navigation";
import { useTasks } from "@/hooks/useTasks";
import { FlaskConical, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function ChatOverviewPage() {
  const router = useRouter();
  const { categories, overallProgress, loading } = useTasks();

  // Find the first available (unlocked, not completed) task to suggest
  const firstAvailable = categories
    .flatMap((c) => c.tasks)
    .find((t) => t.status === "available");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-xl text-center space-y-6">
        {/* Hero icon */}
        <div className="mx-auto h-20 w-20 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <FlaskConical className="h-10 w-10 text-blue-600" />
        </div>

        {/* Title & subtitle */}
        <div>
          <h1 className="text-2xl font-bold mb-2">
            CHEN 4470 — Methanol Plant Design
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Your AI-powered assistant for the CO₂-to-methanol capstone project.
            Select a task from the sidebar to get started — each task opens a
            dedicated chat with the right specialist agent.
          </p>
        </div>

        {/* Progress summary */}
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Project Progress</span>
            <span className="font-semibold tabular-nums">
              {overallProgress.completed}/{overallProgress.total} tasks ·{" "}
              {overallProgress.percent}%
            </span>
          </div>
          <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress.percent}%` }}
            />
          </div>

          {/* Category mini-grid */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {categories.slice(0, 6).map((cat) => {
              const done = cat.tasks.filter(
                (t) => t.status === "completed"
              ).length;
              return (
                <div
                  key={cat.categoryId}
                  className="text-[10px] text-muted-foreground bg-white dark:bg-zinc-950 rounded-md px-2 py-1.5 border"
                >
                  <span className="font-medium text-foreground block truncate">
                    {cat.label}
                  </span>
                  <span className="tabular-nums">
                    {done}/{cat.tasks.length}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA: Jump to next available task */}
        {firstAvailable && (
          <Button
            onClick={() => router.push(`/chat/${firstAvailable.id}`)}
            className="gap-2"
          >
            Start: {firstAvailable.title}
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}

        {/* Quick guide */}
        <div className="text-xs text-muted-foreground space-y-1 pt-2">
          <p>
            <span className="font-medium text-foreground">○ Available</span> —
            ready to work on (click to open)
          </p>
          <p>
            <span className="font-medium text-foreground">🔒 Locked</span> —
            waiting on prerequisite tasks
          </p>
          <p>
            <span className="font-medium text-foreground">✓ Complete</span> —
            finished, unlocks downstream tasks
          </p>
        </div>
      </div>
    </div>
  );
}
