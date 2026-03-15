import { create } from "zustand";

interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  agentType?: string;
  agentsConsulted?: string[];
  badge?: string;
  userId?: string;
  userName?: string;
  createdAt: string;
  isStreaming?: boolean;
}

export interface ActionItem {
  id: string;
  text: string;
  completed: boolean;
  source: "ai" | "user";
}

interface ChatState {
  activeTaskId: string | null;
  messages: ChatMessage[];
  isLoading: boolean;
  historyLoading: boolean;
  streamingContent: string;
  currentBadge: string;
  actionItems: Record<string, ActionItem[]>;

  setActiveTaskId: (taskId: string | null) => void;
  addMessage: (message: ChatMessage) => void;
  setMessages: (messages: ChatMessage[]) => void;
  setLoading: (loading: boolean) => void;
  setHistoryLoading: (loading: boolean) => void;
  setStreamingContent: (content: string) => void;
  appendStreamingContent: (chunk: string) => void;
  setCurrentBadge: (badge: string) => void;
  clearStreaming: () => void;
  addActionItems: (taskId: string, items: ActionItem[]) => void;
  toggleActionItem: (taskId: string, itemId: string) => void;
  removeActionItem: (taskId: string, itemId: string) => void;
  addManualItem: (taskId: string, text: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  activeTaskId: null,
  messages: [],
  isLoading: false,
  historyLoading: false,
  streamingContent: "",
  currentBadge: "",
  actionItems: {},

  setActiveTaskId: (activeTaskId) => set({ activeTaskId, messages: [] }),

  setHistoryLoading: (historyLoading) => set({ historyLoading }),

  addMessage: (message) =>
    set((state) => {
      // Deduplicate: skip if same id OR same role+content already exists
      // (the latter catches optimistic local adds vs realtime DB inserts)
      if (
        state.messages.some(
          (m) =>
            m.id === message.id ||
            (m.role === message.role && m.content === message.content)
        )
      )
        return state;
      return { messages: [...state.messages, message] };
    }),

  setMessages: (messages) => set({ messages }),

  setLoading: (isLoading) => set({ isLoading }),

  setStreamingContent: (streamingContent) => set({ streamingContent }),

  appendStreamingContent: (chunk) =>
    set((state) => ({
      streamingContent: state.streamingContent + chunk,
    })),

  setCurrentBadge: (currentBadge) => set({ currentBadge }),

  clearStreaming: () => set({ streamingContent: "", currentBadge: "" }),

  addActionItems: (taskId, items) =>
    set((state) => {
      const existing = state.actionItems[taskId] ?? [];
      const existingTexts = new Set(
        existing.map((i) => i.text.toLowerCase())
      );
      const newItems = items.filter(
        (i) => !existingTexts.has(i.text.toLowerCase())
      );
      return {
        actionItems: {
          ...state.actionItems,
          [taskId]: [...existing, ...newItems],
        },
      };
    }),

  toggleActionItem: (taskId, itemId) =>
    set((state) => {
      const items = state.actionItems[taskId];
      if (!items) return state;
      return {
        actionItems: {
          ...state.actionItems,
          [taskId]: items.map((i) =>
            i.id === itemId ? { ...i, completed: !i.completed } : i
          ),
        },
      };
    }),

  removeActionItem: (taskId, itemId) =>
    set((state) => {
      const items = state.actionItems[taskId];
      if (!items) return state;
      return {
        actionItems: {
          ...state.actionItems,
          [taskId]: items.filter((i) => i.id !== itemId),
        },
      };
    }),

  addManualItem: (taskId, text) =>
    set((state) => {
      const existing = state.actionItems[taskId] ?? [];
      const newItem: ActionItem = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        source: "user",
      };
      return {
        actionItems: {
          ...state.actionItems,
          [taskId]: [...existing, newItem],
        },
      };
    }),
}));
