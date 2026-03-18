"use client";

import { useCallback } from "react";
import { useChatStore } from "@/stores/chat-store";

/** Read a streaming response body, piping chunks to appendStreamingContent. */
async function readStream(
  response: Response,
  appendStreamingContent: (chunk: string) => void
): Promise<string> {
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
  return fullContent;
}

export function useChat(taskId: string) {
  const {
    messages,
    isLoading,
    loadingStatus,
    streamingContent,
    currentBadge,
    addMessage,
    setLoading,
    setLoadingStatus,
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
      setLoadingStatus("routing");

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: content, userId, taskId }),
        });

        if (!response.ok) {
          throw new Error(`Chat API error: ${response.status}`);
        }

        setLoadingStatus("connecting");

        const rawBadge = response.headers.get("X-Agent-Badge") || "";
        const badge = decodeURIComponent(rawBadge);
        const agentType = response.headers.get("X-Agent-Type") || "";
        const agentsConsulted =
          response.headers.get("X-Agents-Consulted")?.split(",") || [];

        setCurrentBadge(badge);

        setLoadingStatus("streaming");
        const fullContent = await readStream(response, appendStreamingContent);

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
      } catch (error) {
        console.error("Failed to send message:", error);
        // If we have partial streamed content, preserve it instead of showing a generic error
        const partialContent = useChatStore.getState().streamingContent;
        if (partialContent) {
          addMessage({
            id: crypto.randomUUID(),
            role: "assistant",
            content: partialContent + "\n\n_(Response was interrupted. Please try again.)_",
            createdAt: new Date().toISOString(),
          });
        } else {
          addMessage({
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "Sorry, something went wrong. Please try again. " +
              (error instanceof Error ? error.message : ""),
            createdAt: new Date().toISOString(),
          });
        }
        clearStreaming();
      } finally {
        setLoadingStatus(null);
        setLoading(false);
      }
    },
    [
      taskId,
      isLoading,
      addMessage,
      setLoading,
      setLoadingStatus,
      appendStreamingContent,
      setCurrentBadge,
      clearStreaming,
    ]
  );

  /**
   * Request an AI checklist review for a task before marking it complete.
   * Streams the review into the chat and returns whether the review passed.
   */
  const requestReview = useCallback(
    async (reviewTaskId: string): Promise<boolean> => {
      if (isLoading) return false;

      setLoading(true);
      clearStreaming();
      setLoadingStatus("reviewing");
      setCurrentBadge("Completion Review");

      try {
        const response = await fetch("/api/chat/review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ taskId: reviewTaskId }),
        });

        if (!response.ok) {
          throw new Error(`Review API error: ${response.status}`);
        }

        const fullContent = await readStream(response, appendStreamingContent);

        addMessage({
          id: crypto.randomUUID(),
          role: "assistant",
          content: fullContent,
          agentType: response.headers.get("X-Agent-Type") || "",
          badge: "Completion Review",
          createdAt: new Date().toISOString(),
        });

        clearStreaming();

        // Determine pass/fail from the VERDICT line in the response
        const passed = fullContent.includes("VERDICT: ALL_PASSED");
        return passed;
      } catch (error) {
        console.error("Failed to run review:", error);
        const partialContent = useChatStore.getState().streamingContent;
        if (partialContent) {
          addMessage({
            id: crypto.randomUUID(),
            role: "assistant",
            content: partialContent + "\n\n_(Review was interrupted. Please try again.)_",
            badge: "Completion Review",
            createdAt: new Date().toISOString(),
          });
        } else {
          addMessage({
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "Sorry, the completion review failed. Please try again. " +
              (error instanceof Error ? error.message : ""),
            createdAt: new Date().toISOString(),
          });
        }
        clearStreaming();
        return false;
      } finally {
        setLoadingStatus(null);
        setLoading(false);
      }
    },
    [
      isLoading,
      addMessage,
      setLoading,
      setLoadingStatus,
      appendStreamingContent,
      setCurrentBadge,
      clearStreaming,
    ]
  );

  return {
    messages,
    isLoading,
    loadingStatus,
    streamingContent,
    currentBadge,
    sendMessage,
    requestReview,
  };
}
