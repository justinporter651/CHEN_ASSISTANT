"use client";

import { useEffect, useMemo, useCallback } from "react";
import { useTaskStore } from "@/stores/task-store";
import { supabase, isPlaceholder } from "@/lib/supabase/client";
import {
  resolveAllTasks,
  getOverallProgress,
  type CategoryProgress,
} from "@/lib/tasks/dependency-resolver";

export function useTasks() {
  const completedIds = useTaskStore((s) => s.completedIds);
  const tasksWithMessages = useTaskStore((s) => s.tasksWithMessages);
  const loading = useTaskStore((s) => s.loading);

  // ---- Initial load from Supabase ----
  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (isPlaceholder) {
        useTaskStore.getState().setLoading(false);
        return;
      }
      try {
        // Load completed tasks
        const { data: completedTasks } = await supabase
          .from("tasks")
          .select("id")
          .not("completed_at", "is", null);

        if (!cancelled && completedTasks) {
          useTaskStore.getState().setCompletedIds(
            new Set(completedTasks.map((t: { id: string }) => t.id))
          );
        }

        // Load tasks that have messages
        const { data: messaged } = await supabase
          .from("task_messages")
          .select("task_id")
          .limit(1000);

        if (!cancelled && messaged) {
          useTaskStore.getState().setTasksWithMessages(
            new Set(messaged.map((m: { task_id: string }) => m.task_id))
          );
        }
      } catch {
        // Supabase may be using placeholder URL — silently ignore
      } finally {
        if (!cancelled) useTaskStore.getState().setLoading(false);
      }
    }

    load();

    if (isPlaceholder) return;

    // ---- Realtime subscription ----
    const channel = supabase
      .channel("tasks-realtime")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "tasks" },
        (payload) => {
          const task = payload.new as { id: string; completed_at: string | null };
          if (task.completed_at) {
            useTaskStore.getState().addCompleted(task.id);
          } else {
            useTaskStore.getState().removeCompleted(task.id);
          }
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "task_messages" },
        (payload) => {
          const msg = payload.new as { task_id: string };
          useTaskStore.getState().addTaskWithMessages(msg.task_id);
        }
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  // ---- Mark complete / incomplete ----
  const markComplete = useCallback(async (taskId: string) => {
    useTaskStore.getState().addCompleted(taskId);
    try {
      const { error } = await supabase
        .from("tasks")
        .update({ completed_at: new Date().toISOString() })
        .eq("id", taskId);
      if (error) {
        useTaskStore.getState().removeCompleted(taskId);
      }
    } catch {
      useTaskStore.getState().removeCompleted(taskId);
    }
  }, []);

  const markIncomplete = useCallback(async (taskId: string) => {
    useTaskStore.getState().removeCompleted(taskId);
    try {
      const { error } = await supabase
        .from("tasks")
        .update({ completed_at: null })
        .eq("id", taskId);
      if (error) {
        useTaskStore.getState().addCompleted(taskId);
      }
    } catch {
      useTaskStore.getState().addCompleted(taskId);
    }
  }, []);

  // ---- Derived: categories with resolved statuses (reuse existing resolver) ----
  const categories = useMemo<CategoryProgress[]>(
    () => resolveAllTasks(completedIds, tasksWithMessages),
    [completedIds, tasksWithMessages]
  );

  const overallProgress = useMemo(
    () => getOverallProgress(completedIds),
    [completedIds]
  );

  return {
    completedIds,
    tasksWithMessages,
    loading,
    categories,
    overallProgress,
    markComplete,
    markIncomplete,
  };
}
