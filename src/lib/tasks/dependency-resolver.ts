import { TASK_GRAPH, TASK_MAP, type TaskDefinition } from "./task-graph";
import { CATEGORIES } from "./categories";

export type TaskStatus = "available" | "in_progress" | "completed";

export interface ResolvedTask extends TaskDefinition {
  status: TaskStatus;
  blockers: string[]; // titles of incomplete dependencies
}

export interface CategoryProgress {
  categoryId: string;
  label: string;
  icon: string;
  completed: number;
  total: number;
  tasks: ResolvedTask[];
}

/**
 * Resolve the status of a single task.
 * Status is COMPUTED, never stored — this is a pure function.
 *
 *   completed   → task is in the completed set
 *   in_progress → task has chat messages
 *   available   → no messages yet
 */
export function resolveStatus(
  task: TaskDefinition,
  completedIds: Set<string>,
  tasksWithMessages: Set<string>
): TaskStatus {
  if (completedIds.has(task.id)) return "completed";

  if (tasksWithMessages.has(task.id)) return "in_progress";

  return "available";
}

/**
 * Get the titles of incomplete dependencies (blockers) for a task.
 */
export function getBlockers(
  task: TaskDefinition,
  completedIds: Set<string>
): string[] {
  return task.dependencies
    .filter((depId) => !completedIds.has(depId))
    .map((depId) => TASK_MAP[depId]?.title ?? depId);
}

/**
 * Resolve all tasks into their computed statuses.
 * Returns tasks grouped by category with progress counts.
 */
export function resolveAllTasks(
  completedIds: Set<string>,
  tasksWithMessages: Set<string>
): CategoryProgress[] {
  return CATEGORIES.map((category) => {
    const categoryTasks = TASK_GRAPH.filter(
      (t) => t.category === category.id
    );

    const resolvedTasks: ResolvedTask[] = categoryTasks.map((task) => ({
      ...task,
      status: resolveStatus(task, completedIds, tasksWithMessages),
      blockers: getBlockers(task, completedIds),
    }));

    const completed = resolvedTasks.filter(
      (t) => t.status === "completed"
    ).length;

    return {
      categoryId: category.id,
      label: category.label,
      icon: category.icon,
      completed,
      total: resolvedTasks.length,
      tasks: resolvedTasks,
    };
  });
}

/**
 * Get all tasks that are currently available to work on.
 */
export function getAvailableTasks(
  completedIds: Set<string>,
  tasksWithMessages: Set<string>
): ResolvedTask[] {
  return TASK_GRAPH.filter(
    (task) =>
      resolveStatus(task, completedIds, tasksWithMessages) === "available"
  ).map((task) => ({
    ...task,
    status: "available" as TaskStatus,
    blockers: [],
  }));
}

/**
 * Get overall project progress.
 */
export function getOverallProgress(completedIds: Set<string>): {
  completed: number;
  total: number;
  percent: number;
} {
  const total = TASK_GRAPH.length;
  const completed = TASK_GRAPH.filter((t) => completedIds.has(t.id)).length;
  return {
    completed,
    total,
    percent: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
}
