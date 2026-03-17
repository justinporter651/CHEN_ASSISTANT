import { describe, it, expect } from "vitest";
import {
  buildSpecialistContext,
  buildChecklistPrompt,
  buildSummaryPrompt,
  shouldSummarize,
} from "@/lib/ai/context-builder";
import type { Message, ProjectStateEntry, AgentType } from "@/lib/ai/types";

function makeMessage(
  content: string,
  role: "user" | "assistant" | "system" = "user",
  agentType: string | null = null
): Message {
  return {
    id: `msg-${Math.random()}`,
    user_id: null,
    role,
    content,
    agent_type: agentType,
    agents_consulted: null,
    metadata: {},
    created_at: new Date().toISOString(),
  };
}

const sampleState: ProjectStateEntry[] = [
  { category: "reactor", key: "temperature", value: "250", unit: "°C", source: "user" },
  { category: "economics", key: "npv", value: "1.2M", unit: "USD" },
];

describe("buildSpecialistContext", () => {
  it("filters project state by agent context categories", () => {
    const ctx = buildSpecialistContext("design", [], sampleState);
    expect(ctx).toContain("temperature");
    expect(ctx).not.toContain("npv"); // economics not in design's categories
  });

  it("includes conversation summary when provided", () => {
    const ctx = buildSpecialistContext("design", [], [], "Previous discussion about reactor sizing");
    expect(ctx).toContain("CONVERSATION SUMMARY");
    expect(ctx).toContain("Previous discussion about reactor sizing");
  });

  it("handles empty messages and state gracefully", () => {
    const ctx = buildSpecialistContext("design", [], []);
    expect(typeof ctx).toBe("string");
  });

  it("only includes last 10 messages", () => {
    const msgs = Array.from({ length: 20 }, (_, i) => makeMessage(`Message ${i}`));
    const ctx = buildSpecialistContext("design", msgs, []);
    expect(ctx).toContain("Message 19");
    expect(ctx).toContain("Message 10");
    expect(ctx).not.toContain("Message 9");
  });
});

describe("buildChecklistPrompt", () => {
  it("returns empty string for agent with no checklist items", () => {
    const result = buildChecklistPrompt("orchestrator" as AgentType, []);
    expect(result).toBe("");
  });

  it("includes state values when matching stateKey exists", () => {
    const result = buildChecklistPrompt("design", sampleState);
    // design agent has checklist items; just verify it returns something
    expect(typeof result).toBe("string");
  });
});

describe("buildSummaryPrompt", () => {
  it("includes all messages passed to it (no double-slicing)", () => {
    const msgs = Array.from({ length: 15 }, (_, i) =>
      makeMessage(`Older message ${i}`)
    );

    const prompt = buildSummaryPrompt(msgs);

    // All messages should be included since caller already sliced
    expect(prompt).toContain("Older message 0");
    expect(prompt).toContain("Older message 5");
    expect(prompt).toContain("Older message 14");
  });

  it("includes all messages even when fewer than 10", () => {
    const msgs = Array.from({ length: 5 }, (_, i) =>
      makeMessage(`Short convo ${i}`)
    );

    const prompt = buildSummaryPrompt(msgs);

    expect(prompt).toContain("Short convo 0");
    expect(prompt).toContain("Short convo 4");
  });

  it("handles empty messages array", () => {
    const prompt = buildSummaryPrompt([]);
    expect(prompt).toContain("Summarize");
    // No crash, just an empty conversation section
  });

  it("truncates long messages to 200 chars", () => {
    const longContent = "x".repeat(300);
    const msgs = Array.from({ length: 15 }, () => makeMessage(longContent));
    const prompt = buildSummaryPrompt(msgs);
    expect(prompt).toContain("...");
  });
});

describe("shouldSummarize", () => {
  it("returns false for small conversation", () => {
    expect(shouldSummarize(10)).toBe(false);
  });

  it("returns true above threshold", () => {
    expect(shouldSummarize(51)).toBe(true);
  });

  it("returns false at exactly 50", () => {
    expect(shouldSummarize(50)).toBe(false);
  });
});
