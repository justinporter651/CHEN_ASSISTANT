import { create } from "zustand";

export type LoadingStatus = "routing" | "connecting" | "streaming" | "reviewing";

export interface ChatImageAttachment {
  type: "image";
  dataUrl: string;
  mediaType: string;
  filename: string;
}

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
  attachments?: ChatImageAttachment[];
}

interface ChatState {
  activeTaskId: string | null;
  messages: ChatMessage[];
  isLoading: boolean;
  historyLoading: boolean;
  streamingContent: string;
  currentBadge: string;
  loadingStatus: LoadingStatus | null;

  setActiveTaskId: (taskId: string | null) => void;
  addMessage: (message: ChatMessage) => void;
  setMessages: (messages: ChatMessage[]) => void;
  setLoading: (loading: boolean) => void;
  setHistoryLoading: (loading: boolean) => void;
  setStreamingContent: (content: string) => void;
  appendStreamingContent: (chunk: string) => void;
  setCurrentBadge: (badge: string) => void;
  setLoadingStatus: (status: LoadingStatus | null) => void;
  clearStreaming: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  activeTaskId: null,
  messages: [],
  isLoading: false,
  historyLoading: false,
  streamingContent: "",
  currentBadge: "",
  loadingStatus: null,
  setActiveTaskId: (activeTaskId) => set({ activeTaskId, messages: [] }),

  setHistoryLoading: (historyLoading) => set({ historyLoading }),

  addMessage: (message) =>
    set((state) => {
      // Deduplicate by ID, or by role+content for the LAST message only
      // (catches optimistic local adds vs realtime DB inserts without
      // blocking legitimate repeated messages further back in history)
      if (state.messages.some((m) => m.id === message.id)) return state;
      const last = state.messages[state.messages.length - 1];
      if (
        last &&
        last.role === message.role &&
        last.content === message.content
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

  setLoadingStatus: (loadingStatus) => set({ loadingStatus }),

  clearStreaming: () => set({ streamingContent: "", currentBadge: "", loadingStatus: null }),
}));
