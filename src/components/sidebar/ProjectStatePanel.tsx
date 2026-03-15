"use client";

import { useProjectState } from "@/hooks/useProjectState";
import { Loader2 } from "lucide-react";

export function ProjectStatePanel() {
  const { loading, getGrouped } = useProjectState();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-4">
        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const grouped = getGrouped();
  const categories = Object.keys(grouped);

  if (categories.length === 0) {
    return (
      <div className="space-y-2">
        <h3 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider px-1">
          Project State
        </h3>
        <p className="text-xs text-muted-foreground px-2.5 py-2">
          No design parameters recorded yet. As you discuss your design with the
          AI agents, key decisions will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider px-1">
        Project State
      </h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category}>
            <div className="text-[10px] font-semibold uppercase text-muted-foreground px-2.5 mb-1">
              {category}
            </div>
            <div className="space-y-0.5">
              {grouped[category].map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-baseline justify-between gap-2 px-2.5 py-1 text-xs"
                >
                  <span className="text-muted-foreground truncate">
                    {entry.key}
                  </span>
                  <span className="font-mono font-medium shrink-0">
                    {entry.value}
                    {entry.unit && (
                      <span className="text-muted-foreground ml-0.5">
                        {entry.unit}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
