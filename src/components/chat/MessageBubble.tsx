"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AgentBadge } from "./AgentBadge";

interface MessageBubbleProps {
  role: "user" | "assistant" | "system";
  content: string;
  userName?: string;
  agentType?: string;
  badge?: string;
  createdAt?: string;
  isStreaming?: boolean;
}

export function MessageBubble({
  role,
  content,
  userName,
  agentType,
  badge,
  createdAt,
  isStreaming,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className="group relative py-1">
      {/* Sender line */}
      <div className="flex items-center gap-2 mb-0.5">
        {isUser ? (
          <span className="text-xs font-medium text-foreground/70">
            {userName || "You"}
          </span>
        ) : (
          <AgentBadge agentType={agentType} badge={badge} />
        )}
        {createdAt && (
          <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            {new Date(createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        )}
      </div>

      {/* Content */}
      {isUser ? (
        <div className="text-sm leading-relaxed text-foreground whitespace-pre-wrap break-words">
          {content}
        </div>
      ) : (
        <div className="text-sm prose-chat break-words">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
          {isStreaming && (
            <span className="inline-block w-1.5 h-4 bg-foreground/30 animate-pulse ml-0.5 rounded-sm" />
          )}
        </div>
      )}
    </div>
  );
}
