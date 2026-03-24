import { describe, it, expect } from "vitest";
import {
  resolveStatus,
  getBlockers,
  getOverallProgress,
  getAvailableTasks,
} from "@/lib/tasks/dependency-resolver";
import type { TaskDefinition } from "@/lib/tasks/task-graph";

function makeTask(overrides: Partial<TaskDefinition> = {}): TaskDefinition {
  return {
    id: "test-task",
    title: "Test Task",
    description: "A test task",
    category: "foundations",
    agentType: "design",
    dependencies: [],
    ...overrides,
  };
}

describe("resolveStatus", () => {
  it("returns 'completed' if task is in completed set", () => {
    const task = makeTask({ id: "t1" });
    expect(resolveStatus(task, new Set(["t1"]), new Set())).toBe("completed");
  });

  it("returns 'available' even if dependencies are not completed", () => {
    const task = makeTask({ id: "t2", dependencies: ["t1"] });
    expect(resolveStatus(task, new Set(), new Set())).toBe("available");
  });

  it("returns 'in_progress' if task has messages", () => {
    const task = makeTask({ id: "t2", dependencies: ["t1"] });
    expect(resolveStatus(task, new Set(["t1"]), new Set(["t2"]))).toBe("in_progress");
  });

  it("returns 'available' if all deps met but no messages", () => {
    const task = makeTask({ id: "t2", dependencies: ["t1"] });
    expect(resolveStatus(task, new Set(["t1"]), new Set())).toBe("available");
  });

  it("returns 'available' for task with no dependencies", () => {
    const task = makeTask({ id: "t1", dependencies: [] });
    expect(resolveStatus(task, new Set(), new Set())).toBe("available");
  });

  it("completed takes priority over in_progress", () => {
    const task = makeTask({ id: "t1" });
    // Task is both completed AND has messages — completed should win
    expect(resolveStatus(task, new Set(["t1"]), new Set(["t1"]))).toBe("completed");
  });

  it("handles undefined in completedIds set gracefully", () => {
    const task = makeTask({ id: "t1", dependencies: ["nonexistent"] });
    expect(resolveStatus(task, new Set(), new Set())).toBe("available");
  });
});

describe("getBlockers", () => {
  it("returns empty array if all dependencies met", () => {
    const task = makeTask({ dependencies: ["t1"] });
    expect(getBlockers(task, new Set(["t1"]))).toEqual([]);
  });

  it("returns titles of incomplete dependencies", () => {
    const task = makeTask({ dependencies: ["thermo-method"] });
    expect(getBlockers(task, new Set())).toEqual([
      "Select and justify thermodynamic method",
    ]);
  });

  it("returns raw ID if dependency not found in TASK_MAP", () => {
    const task = makeTask({ dependencies: ["nonexistent-task"] });
    const blockers = getBlockers(task, new Set());
    expect(blockers).toEqual(["nonexistent-task"]);
  });

  it("handles empty dependencies", () => {
    const task = makeTask({ dependencies: [] });
    expect(getBlockers(task, new Set())).toEqual([]);
  });
});

describe("getOverallProgress", () => {
  it("returns 0 percent with no completions", () => {
    const progress = getOverallProgress(new Set());
    expect(progress.completed).toBe(0);
    expect(progress.percent).toBe(0);
    expect(progress.total).toBeGreaterThan(0);
  });

  it("handles completing all tasks", async () => {
    const { TASK_GRAPH } = await import("@/lib/tasks/task-graph");
    const allIds = new Set(TASK_GRAPH.map((t: TaskDefinition) => t.id)) as Set<string>;
    const progress = getOverallProgress(allIds);
    expect(progress.percent).toBe(100);
  });

  it("handles IDs not in the graph (stale completion data)", () => {
    const progress = getOverallProgress(new Set(["fake-id-1", "fake-id-2"]));
    // fake IDs shouldn't count toward completion
    expect(progress.completed).toBe(0);
  });
});

describe("getAvailableTasks", () => {
  it("returns all tasks when nothing is completed", () => {
    const available = getAvailableTasks(new Set(), new Set());
    // All tasks should be available since there is no locking
    expect(available.length).toBeGreaterThan(0);
  });

  it("excludes tasks that already have messages (in_progress)", () => {
    const available = getAvailableTasks(new Set(), new Set(["thermo-method"]));
    expect(available.find((t) => t.id === "thermo-method")).toBeUndefined();
  });
});
