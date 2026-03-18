"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { TaskKeyPoints } from "@/components/chat/TaskKeyPoints";
import { useRealtimeMessages } from "@/hooks/useRealtimeMessages";
import { useTasks } from "@/hooks/useTasks";
import { TASK_MAP } from "@/lib/tasks/task-graph";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

export default function TaskChatPage() {
  const params = useParams();
  const router = useRouter();
  const taskId = params.taskId as string;
  const { markComplete, markIncomplete, completedIds, categories } = useTasks();
  const [rightCollapsed, setRightCollapsed] = useState(false);

  // Build completedIds set for TaskKeyPoints from resolved categories
  const resolvedCompletedIds = new Set(
    categories
      .flatMap((c) => c.tasks)
      .filter((t) => t.status === "completed")
      .map((t) => t.id)
  );

  const isCompleted = completedIds.has(taskId);

  // Subscribe to realtime message updates for this task
  // TODO: Pass actual user ID from auth
  useRealtimeMessages(taskId);

  // Redirect if task doesn't exist
  useEffect(() => {
    if (taskId && !TASK_MAP[taskId]) {
      router.replace("/chat");
    }
  }, [taskId, router]);

  if (!taskId || !TASK_MAP[taskId]) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-full overflow-hidden">
      <div className="relative flex-1 flex flex-col min-w-0">
        <button
          onClick={() => setRightCollapsed(!rightCollapsed)}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          title={rightCollapsed ? "Show task overview" : "Hide task overview"}
        >
          {rightCollapsed ? (
            <PanelRightOpen className="h-4 w-4" />
          ) : (
            <PanelRightClose className="h-4 w-4" />
          )}
        </button>
        <ChatWindow
          taskId={taskId}
          isCompleted={isCompleted}
          onMarkComplete={() => markComplete(taskId)}
          onMarkIncomplete={() => markIncomplete(taskId)}
        />
      </div>
      <TaskKeyPoints
        taskId={taskId}
        completedIds={resolvedCompletedIds}
        collapsed={rightCollapsed}
      />
    </div>
  );
}
