import { create } from "zustand";

interface TaskState {
  /** IDs of tasks the user has marked complete */
  completedIds: Set<string>;
  /** IDs of tasks that have at least one chat message */
  tasksWithMessages: Set<string>;
  /** Whether the initial load from the DB is in progress */
  loading: boolean;

  setCompletedIds: (ids: Set<string>) => void;
  addCompleted: (id: string) => void;
  removeCompleted: (id: string) => void;

  setTasksWithMessages: (ids: Set<string>) => void;
  addTaskWithMessages: (id: string) => void;

  setLoading: (loading: boolean) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  completedIds: new Set<string>(),
  tasksWithMessages: new Set<string>(),
  loading: true,

  setCompletedIds: (completedIds) => set({ completedIds }),

  addCompleted: (id) =>
    set((state) => {
      if (state.completedIds.has(id)) return state;
      const next = new Set(state.completedIds);
      next.add(id);
      return { completedIds: next };
    }),

  removeCompleted: (id) =>
    set((state) => {
      if (!state.completedIds.has(id)) return state;
      const next = new Set(state.completedIds);
      next.delete(id);
      return { completedIds: next };
    }),

  setTasksWithMessages: (tasksWithMessages) => set({ tasksWithMessages }),

  addTaskWithMessages: (id) =>
    set((state) => {
      if (state.tasksWithMessages.has(id)) return state;
      const next = new Set(state.tasksWithMessages);
      next.add(id);
      return { tasksWithMessages: next };
    }),

  setLoading: (loading) => set({ loading }),
}));
