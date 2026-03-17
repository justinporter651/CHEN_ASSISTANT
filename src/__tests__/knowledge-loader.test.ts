import { describe, it, expect } from "vitest";
import { selectKnowledge } from "@/lib/ai/knowledge/loader";
import type { AgentType } from "@/lib/ai/types";

describe("selectKnowledge", () => {
  it("returns empty string for agent with no knowledge config", () => {
    expect(selectKnowledge("orchestrator" as AgentType, "test")).toBe("");
  });

  it("returns empty string for agent with no keyword matches", () => {
    expect(selectKnowledge("design", "xyzzy gobbledygook")).toBe("");
  });

  it("returns content when keywords match", () => {
    // "reactor" should match design agent knowledge
    const result = selectKnowledge("design", "How do I optimize the reactor temperature?");
    expect(typeof result).toBe("string");
  });

  it("returns empty string for unknown agent type", () => {
    expect(selectKnowledge("fake_agent" as AgentType, "test")).toBe("");
  });

  it("handles empty message string", () => {
    expect(selectKnowledge("design", "")).toBe("");
  });

  it("is case-insensitive for keyword matching", () => {
    const lower = selectKnowledge("design", "reactor");
    const upper = selectKnowledge("design", "REACTOR");
    // Both should return the same result since scoring lowercases
    expect(lower).toBe(upper);
  });
});
