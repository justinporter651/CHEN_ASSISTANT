"use client";

import { DEADLINES, getDaysUntil, getDeadlineStatus, formatDeadlineDate } from "@/lib/utils/deadlines";

export function DeadlineWidget() {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider px-1">
        Deadlines
      </h3>
      <div className="space-y-1.5">
        {DEADLINES.map((deadline) => {
          const days = getDaysUntil(deadline.date);
          const status = getDeadlineStatus(deadline.date);

          const statusColors = {
            overdue: "text-red-600 bg-red-50 dark:bg-red-950",
            urgent: "text-orange-600 bg-orange-50 dark:bg-orange-950",
            upcoming: "text-blue-600 bg-blue-50 dark:bg-blue-950",
            future: "text-zinc-500 bg-zinc-50 dark:bg-zinc-800",
          };

          return (
            <div
              key={deadline.id}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs ${statusColors[status]}`}
            >
              <span>{deadline.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{deadline.title}</div>
                <div className="text-[10px] opacity-70">
                  {formatDeadlineDate(deadline.date)}
                </div>
              </div>
              <span className="font-bold tabular-nums shrink-0">
                {days < 0
                  ? `${Math.abs(days)}d ago`
                  : days === 0
                    ? "Today"
                    : `${days}d`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
