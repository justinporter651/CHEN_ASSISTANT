"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { TaskKeyPoints } from "@/components/chat/TaskKeyPoints";
import { useRealtimeMessages } from "@/hooks/useRealtimeMessages";
import { useTasks } from "@/hooks/useTasks";
import { TASK_MAP } from "@/lib/tasks/task-graph";

export default function TaskChatPage() {
  const params = useParams();
  const router = useRouter();
  const taskId = params.taskId as string;
  const { markComplete, markIncomplete, completedIds, categories } = useTasks();

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
      <div className="flex-1 flex flex-col min-w-0">
        <ChatWindow
          taskId={taskId}
          isCompleted={isCompleted}
          onMarkComplete={() => markComplete(taskId)}
          onMarkIncomplete={() => markIncomplete(taskId)}
        />
      </div>
      <TaskKeyPoints taskId={taskId} completedIds={resolvedCompletedIds} />
    </div>
  );
}
