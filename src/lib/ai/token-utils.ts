import { Message } from "./types";

export const MAX_CONTEXT_TOKENS = 262_000;
export const COMPACTION_THRESHOLD = 0.4;
export const COMPACTION_TOKEN_LIMIT = Math.floor(MAX_CONTEXT_TOKENS * COMPACTION_THRESHOLD);

/** Rough token estimate: ~4 chars per token (accurate enough for kimi-k2.5) */
export function estimateTokens(text: string): number {
  if (!text) return 0;
  return Math.ceil(text.length / 4);
}

export function estimateMessagesTokens(messages: Message[]): number {
  return messages.reduce((sum, m) => sum + estimateTokens(m.content ?? "") + 4, 0); // +4 for role/separator tokens
}

/** Check if total estimated context tokens exceed 40% threshold */
export function shouldCompact(totalTokens: number): boolean {
  return totalTokens > COMPACTION_TOKEN_LIMIT;
}
