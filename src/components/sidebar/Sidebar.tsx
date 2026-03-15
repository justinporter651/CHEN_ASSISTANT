"use client";

import { FlaskConical } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TaskList } from "./TaskList";
import { DeadlineWidget } from "./DeadlineWidget";

export function Sidebar() {
  return (
    <div className="w-80 border-r bg-white dark:bg-zinc-950 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center">
            <FlaskConical className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold">CHEN 4470</h1>
            <p className="text-[10px] text-muted-foreground">
              Methanol Plant Design
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-3">
          <DeadlineWidget />
          <Separator />
          <TaskList />
        </div>
      </ScrollArea>
    </div>
  );
}
