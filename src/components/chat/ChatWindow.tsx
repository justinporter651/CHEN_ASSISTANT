"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { MessageBubble } from "./MessageBubble";
import { AgentBadge } from "./AgentBadge";
import { ChatInput } from "./ChatInput";
import { useChat } from "@/hooks/useChat";
import { useChatStore } from "@/stores/chat-store";
import { TASK_MAP } from "@/lib/tasks/task-graph";
import { CATEGORY_MAP } from "@/lib/tasks/categories";
import { AGENT_CONFIGS } from "@/lib/ai/specialists";
import type { AgentType } from "@/lib/ai/types";
import { Loader2, CheckCircle2 } from "lucide-react";
import { ThinkingIndicator } from "./ThinkingIndicator";

interface ChatWindowProps {
  taskId: string;
  isCompleted?: boolean;
  onMarkComplete?: () => void;
  onMarkIncomplete?: () => void;
}

export function ChatWindow({ taskId, isCompleted, onMarkComplete, onMarkIncomplete }: ChatWindowProps) {
  const { messages, isLoading, streamingContent, currentBadge, sendMessage, requestReview } =
    useChat(taskId);
  const historyLoading = useChatStore((s) => s.historyLoading);
  const loadingStatus = useChatStore((s) => s.loadingStatus);
  const scrollRef = useRef<HTMLDivElement>(null);

  const task = TASK_MAP[taskId];
  const category = task ? CATEGORY_MAP[task.category] : null;
  const agentConfig = task
    ? AGENT_CONFIGS[task.agentType as AgentType]
    : null;

  // Auto-scroll to bottom on new messages.
  useEffect(() => {
    if (scrollRef.current) {
      const viewport = scrollRef.current.querySelector(
        "[data-slot='scroll-area-viewport']"
      );
      const target = viewport ?? scrollRef.current;
      target.scrollTop = target.scrollHeight;
    }
  }, [messages, streamingContent]);

  const handleSend = (content: string, attachment?: { filename: string; text: string }) => {
    // If a PDF is attached, prepend its content to the message
    let fullMessage = content;
    if (attachment) {
      fullMessage = `[Attached PDF: ${attachment.filename}]\n\n--- PDF Content ---\n${attachment.text}\n--- End PDF ---\n\n${content}`;
    }
    sendMessage(fullMessage, undefined, "Team Member");
  };

  if (!task) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Task not found: {taskId}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Task header -- compact, Notion-style */}
      <div className="border-b border-border/50 px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 min-w-0">
            {category && (
              <span className="text-xs text-muted-foreground shrink-0">
                {category.icon}
              </span>
            )}
            <h2 className="text-sm font-medium truncate">
              {task.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <AgentBadge agentType={task.agentType} size="sm" />
            {(onMarkComplete || onMarkIncomplete) && (
              <CompletionButton
                taskId={taskId}
                isCompleted={!!isCompleted}
                isLoading={isLoading}
                onMarkComplete={onMarkComplete}
                onMarkIncomplete={onMarkIncomplete}
                requestReview={requestReview}
              />
            )}
          </div>
        </div>
      </div>

      {/* Messages area */}
      <ScrollArea className="flex-1 min-h-0 overflow-hidden" ref={scrollRef}>
        <div className="max-w-4xl mx-auto px-6 py-6 space-y-5">
          {/* Loading history indicator */}
          {historyLoading && (
            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Loading messages...</span>
              </div>
            </div>
          )}

          {/* Welcome -- clean, left-aligned (only when not loading history) */}
          {!historyLoading && messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-start py-8">
              <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-6">
                {task.description}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Specialist: {agentConfig?.icon} {agentConfig?.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {getTaskSuggestions(taskId).map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSend(suggestion)}
                    className="text-xs px-3 py-1.5 rounded-md border border-border hover:bg-muted transition-colors text-left text-muted-foreground hover:text-foreground"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message list */}
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              role={msg.role}
              content={msg.content}
              userName={msg.userName}
              agentType={msg.agentType}
              badge={msg.badge}
              createdAt={msg.createdAt}
            />
          ))}

          {/* Streaming response */}
          {streamingContent && (
            <MessageBubble
              role="assistant"
              content={streamingContent}
              badge={currentBadge}
              isStreaming={true}
            />
          )}

          {/* Loading status indicator */}
          {isLoading && !streamingContent && (
            <ThinkingIndicator status={loadingStatus} taskId={taskId} />
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="shrink-0">
        <ChatInput
          onSend={handleSend}
          disabled={isLoading}
          placeholder={`Ask about ${task.title.toLowerCase()}...`}
        />
      </div>
    </div>
  );
}

type ReviewState = "idle" | "reviewing" | "passed" | "failed";

function CompletionButton({
  taskId,
  isCompleted,
  isLoading,
  onMarkComplete,
  onMarkIncomplete,
  requestReview,
}: {
  taskId: string;
  isCompleted: boolean;
  isLoading: boolean;
  onMarkComplete?: () => void;
  onMarkIncomplete?: () => void;
  requestReview: (taskId: string) => Promise<boolean>;
}) {
  const [reviewState, setReviewState] = useState<ReviewState>("idle");
  const [isMarking, setIsMarking] = useState(false);

  // Allow skipping the review via ?skipReview=1 query param (for testing)
  const skipReview =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("skipReview");

  const handleMarkComplete = async () => {
    if (skipReview) {
      // Bypass review — mark complete immediately
      setIsMarking(true);
      try {
        await onMarkComplete?.();
      } finally {
        setIsMarking(false);
      }
      return;
    }

    if (reviewState === "idle" || reviewState === "failed") {
      // Step 1: Run the review
      setReviewState("reviewing");
      const passed = await requestReview(taskId);
      setReviewState(passed ? "passed" : "failed");
    } else if (reviewState === "passed") {
      // Step 2: Confirm completion after review passed
      setIsMarking(true);
      try {
        await onMarkComplete?.();
      } finally {
        setIsMarking(false);
        setReviewState("idle");
      }
    }
  };

  const handleMarkIncomplete = async () => {
    setIsMarking(true);
    try {
      await onMarkIncomplete?.();
    } finally {
      setIsMarking(false);
      setReviewState("idle");
    }
  };

  if (isCompleted) {
    return (
      <Button
        onClick={handleMarkIncomplete}
        variant="outline"
        size="sm"
        disabled={isMarking}
        className="shrink-0 gap-1.5 text-xs text-green-600 border-green-200 hover:text-red-600 hover:border-red-200 dark:border-green-800 dark:hover:border-red-800"
      >
        {isMarking ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <CheckCircle2 className="h-3.5 w-3.5" />
        )}
        {isMarking ? "Updating..." : "Completed"}
      </Button>
    );
  }

  // Two-step completion flow
  const buttonLabel = {
    idle: "Mark Complete",
    reviewing: "Reviewing...",
    passed: "Confirm Complete",
    failed: "Retry Review",
  }[reviewState];

  const buttonClass = {
    idle: "",
    reviewing: "",
    passed: "text-green-600 border-green-200 dark:border-green-800",
    failed: "text-amber-600 border-amber-200 dark:border-amber-800",
  }[reviewState];

  return (
    <Button
      onClick={handleMarkComplete}
      variant="outline"
      size="sm"
      disabled={isMarking || isLoading || reviewState === "reviewing"}
      className={`shrink-0 gap-1.5 text-xs ${buttonClass}`}
    >
      {reviewState === "reviewing" || isMarking ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <CheckCircle2 className="h-3.5 w-3.5" />
      )}
      {buttonLabel}
    </Button>
  );
}

/**
 * Get contextual starter suggestions based on the task type.
 */
function getTaskSuggestions(taskId: string): string[] {
  const task = TASK_MAP[taskId];
  if (!task) return [];

  // Generic suggestions based on agent type
  const agentSuggestions: Record<string, string[]> = {
    thermo: [
      "What thermodynamic methods work for CO2/H2/methanol/water?",
      "How do I compare VLE predictions to experimental data?",
      "What are the key binary pairs I need to validate?",
    ],
    aspen: [
      "Help me set up this block in Aspen",
      "My simulation won't converge -- here's what I see",
      "How do I run a sensitivity analysis for optimization?",
    ],
    design: [
      "What are my options for this design decision?",
      "Walk me through the sizing calculations",
      "How should I compare alternatives using NPV?",
    ],
    economics: [
      "Walk me through setting up the cash flow table",
      "How do I set up the Monte Carlo analysis?",
      "What parameters have the biggest impact on NPV?",
    ],
    safety: [
      "Help me set up the HAZOP table for this system",
      "What are the key hazards for these conditions?",
      "How do I determine the right pipe class?",
    ],
    writer: [
      "What should this section include per the rubric?",
      "Review this draft for formatting and style",
      "How should I structure the content here?",
    ],
    presentation: [
      "Help me outline the slide structure",
      "What should the poster layout look like?",
      "What Q&A questions should we prepare for?",
    ],
  };

  return agentSuggestions[task.agentType] || [
    "Where should I start with this task?",
    "What does this deliverable require?",
  ];
}
