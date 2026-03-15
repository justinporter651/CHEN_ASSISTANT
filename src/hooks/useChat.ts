"use client";

import { useCallback } from "react";
import { useChatStore } from "@/stores/chat-store";
import { extractActionItems } from "@/lib/ai/action-item-parser";
import type { ActionItem } from "@/stores/chat-store";

export function useChat(taskId: string) {
  const {
    messages,
    isLoading,
    streamingContent,
    currentBadge,
    addMessage,
    setLoading,
    appendStreamingContent,
    setCurrentBadge,
    clearStreaming,
  } = useChatStore();

  const sendMessage = useCallback(
    async (content: string, userId?: string, userName?: string) => {
      if (!content.trim() || isLoading) return;

      // Add user message to UI immediately
      const userMessage = {
        id: crypto.randomUUID(),
        role: "user" as const,
        content,
        userId,
        userName,
        createdAt: new Date().toISOString(),
      };
      addMessage(userMessage);
      setLoading(true);
      clearStreaming();

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: content, userId, taskId }),
        });

        if (!response.ok) {
          throw new Error(`Chat API error: ${response.status}`);
        }

        const rawBadge = response.headers.get("X-Agent-Badge") || "";
        const badge = decodeURIComponent(rawBadge);
        const agentType = response.headers.get("X-Agent-Type") || "";
        const agentsConsulted =
          response.headers.get("X-Agents-Consulted")?.split(",") || [];

        setCurrentBadge(badge);

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) throw new Error("No response body");

        let fullContent = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          fullContent += chunk;
          appendStreamingContent(chunk);
        }

        addMessage({
          id: crypto.randomUUID(),
          role: "assistant",
          content: fullContent,
          agentType,
          agentsConsulted,
          badge,
          createdAt: new Date().toISOString(),
        });

        clearStreaming();

        // Extract action items from the completed response
        const extracted = extractActionItems(fullContent);
        if (extracted.length > 0) {
          const actionItems: ActionItem[] = extracted.map((text) => ({
            id: crypto.randomUUID(),
            text,
            completed: false,
            source: "ai" as const,
          }));
          useChatStore.getState().addActionItems(taskId, actionItems);
        }
      } catch (error) {
        console.error("Failed to send message:", error);
        addMessage({
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again. " +
            (error instanceof Error ? error.message : ""),
          createdAt: new Date().toISOString(),
        });
        clearStreaming();
      } finally {
        setLoading(false);
      }
    },
    [
      taskId,
      isLoading,
      addMessage,
      setLoading,
      appendStreamingContent,
      setCurrentBadge,
      clearStreaming,
    ]
  );

  return {
    messages,
    isLoading,
    streamingContent,
    currentBadge,
    sendMessage,
  };
}
