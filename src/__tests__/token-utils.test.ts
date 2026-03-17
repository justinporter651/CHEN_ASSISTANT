import { describe, it, expect } from "vitest";
import {
  estimateTokens,
  estimateMessagesTokens,
  shouldCompact,
  COMPACTION_TOKEN_LIMIT,
} from "@/lib/ai/token-utils";
import type { Message } from "@/lib/ai/types";

function makeMessage(content: string, role: "user" | "assistant" = "user"): Message {
  return {
    id: "test-id",
    user_id: null,
    role,
    content,
    agent_type: null,
    agents_consulted: null,
    metadata: {},
    created_at: new Date().toISOString(),
  };
}

describe("estimateTokens", () => {
  it("estimates tokens for a normal string", () => {
    expect(estimateTokens("hello world")).toBe(Math.ceil(11 / 4));
  });

  it("returns 0 for an empty string", () => {
    expect(estimateTokens("")).toBe(0);
  });

  it("handles a very long string without crashing", () => {
    const longStr = "x".repeat(1_000_000);
    expect(estimateTokens(longStr)).toBe(250_000);
  });

  it("handles null input gracefully", () => {
    expect(estimateTokens(null as unknown as string)).toBe(0);
  });

  it("handles undefined input gracefully", () => {
    expect(estimateTokens(undefined as unknown as string)).toBe(0);
  });
});

describe("estimateMessagesTokens", () => {
  it("returns 0 for empty messages array", () => {
    expect(estimateMessagesTokens([])).toBe(0);
  });

  it("sums tokens across multiple messages", () => {
    const msgs = [makeMessage("hello"), makeMessage("world")];
    const expected =
      Math.ceil(5 / 4) + 4 + Math.ceil(5 / 4) + 4; // content tokens + 4 per message
    expect(estimateMessagesTokens(msgs)).toBe(expected);
  });

  it("handles message with empty content", () => {
    const msgs = [makeMessage("")];
    expect(estimateMessagesTokens(msgs)).toBe(4); // 0 content + 4 separator
  });

  it("handles message with null content", () => {
    const msgs = [makeMessage(null as unknown as string)];
    expect(estimateMessagesTokens(msgs)).toBe(4); // 0 content + 4 separator
  });
});

describe("shouldCompact", () => {
  it("returns false below threshold", () => {
    expect(shouldCompact(0)).toBe(false);
    expect(shouldCompact(COMPACTION_TOKEN_LIMIT - 1)).toBe(false);
  });

  it("returns true above threshold", () => {
    expect(shouldCompact(COMPACTION_TOKEN_LIMIT + 1)).toBe(true);
  });

  it("returns false at exactly the threshold", () => {
    // Boundary: at exactly the limit, should NOT compact (> not >=)
    expect(shouldCompact(COMPACTION_TOKEN_LIMIT)).toBe(false);
  });

  it("handles NaN input", () => {
    // NaN > number is always false
    expect(shouldCompact(NaN)).toBe(false);
  });
});
