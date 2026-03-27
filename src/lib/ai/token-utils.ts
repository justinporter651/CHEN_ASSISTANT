import { Message } from "./types";

export const MAX_CONTEXT_TOKENS = 262_000;
export const COMPACTION_THRESHOLD = 0.4;
export const COMPACTION_TOKEN_LIMIT = Math.floor(MAX_CONTEXT_TOKENS * COMPACTION_THRESHOLD);

/** Rough token estimate: ~4 chars per token (accurate enough for kimi-k2.5) */
export function estimateTokens(text: string): number {
  if (!text) return 0;
  return Math.ceil(text.length / 4);
}

/** Conservative token estimate per image (~1000 tokens each) */
export const TOKENS_PER_IMAGE = 1000;
/** Max images to keep in active conversation context */
export const MAX_CONTEXT_IMAGES = 8;

export function estimateMessagesTokens(messages: Message[]): number {
  return messages.reduce((sum, m) => {
    let tokens = estimateTokens(m.content ?? "") + 4; // +4 for role/separator tokens
    // Add image token estimates from metadata
    const meta = m.metadata as Record<string, unknown>;
    if (Array.isArray(meta?.attachments)) {
      tokens += meta.attachments.length * TOKENS_PER_IMAGE;
    }
    return sum + tokens;
  }, 0);
}

/** Check if total estimated context tokens exceed 40% threshold */
export function shouldCompact(totalTokens: number): boolean {
  return totalTokens > COMPACTION_TOKEN_LIMIT;
}
