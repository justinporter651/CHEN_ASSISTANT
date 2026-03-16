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

interface ChatState {
  activeTaskId: string | null;
  messages: ChatMessage[];
  isLoading: boolean;
  historyLoading: boolean;
  streamingContent: string;
  currentBadge: string;

  setActiveTaskId: (taskId: string | null) => void;
  addMessage: (message: ChatMessage) => void;
  setMessages: (messages: ChatMessage[]) => void;
  setLoading: (loading: boolean) => void;
  setHistoryLoading: (loading: boolean) => void;
  setStreamingContent: (content: string) => void;
  appendStreamingContent: (chunk: string) => void;
  setCurrentBadge: (badge: string) => void;
  clearStreaming: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  activeTaskId: null,
  messages: [],
  isLoading: false,
  historyLoading: false,
  streamingContent: "",
  currentBadge: "",
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
}));
