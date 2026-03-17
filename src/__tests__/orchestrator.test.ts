import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the AI SDK before importing orchestrator
vi.mock("ai", () => ({
  generateText: vi.fn(),
  streamText: vi.fn(),
}));

vi.mock("@/lib/ai/provider", () => ({
  model: "mock-model",
}));

import { generateText, streamText } from "ai";
import { classifyMessage, callSpecialist, orchestrate } from "@/lib/ai/orchestrator";
import type { Message, ProjectStateEntry } from "@/lib/ai/types";

const mockedGenerateText = vi.mocked(generateText);
const mockedStreamText = vi.mocked(streamText);

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

beforeEach(() => {
  vi.clearAllMocks();
});

describe("classifyMessage", () => {
  it("parses valid classification response", async () => {
    mockedGenerateText.mockResolvedValue({
      text: '{"agents": ["design"], "reasoning": "Design question", "isChecklist": false}',
    } as any);

    const result = await classifyMessage("How do I size a reactor?", []);
    expect(result.agents).toEqual(["design"]);
    expect(result.reasoning).toBe("Design question");
  });

  it("falls back when AI returns no JSON", async () => {
    mockedGenerateText.mockResolvedValue({
      text: "I think this is a design question but I forgot the JSON format",
    } as any);

    const result = await classifyMessage("test", []);
    // Should fall back to default agent
    expect(result.agents).toHaveLength(1);
    expect(result.reasoning).toContain("Classification failed");
  });

  it("falls back when AI returns malformed JSON", async () => {
    mockedGenerateText.mockResolvedValue({
      text: '{"agents": ["design", "reasoning": "broken json"}',
    } as any);

    const result = await classifyMessage("test", []);
    expect(result.agents).toHaveLength(1);
    expect(result.reasoning).toContain("Classification failed");
  });

  it("BUG: crashes when AI returns JSON without agents field", async () => {
    mockedGenerateText.mockResolvedValue({
      text: '{"reasoning": "some reasoning", "isChecklist": false}',
    } as any);

    // This should NOT throw but currently does:
    // parsed.agents is undefined, .filter() throws TypeError
    // The outer catch DOES handle it, but it's still a bug
    const result = await classifyMessage("test", []);
    expect(result.agents).toHaveLength(1); // falls back
  });

  it("BUG: crashes when agents field is a string instead of array", async () => {
    mockedGenerateText.mockResolvedValue({
      text: '{"agents": "design", "reasoning": "test", "isChecklist": false}',
    } as any);

    // "design".filter is not a function → TypeError
    const result = await classifyMessage("test", []);
    expect(result.agents).toHaveLength(1);
  });

  it("BUG: crashes when agents field is null", async () => {
    mockedGenerateText.mockResolvedValue({
      text: '{"agents": null, "reasoning": "test", "isChecklist": false}',
    } as any);

    const result = await classifyMessage("test", []);
    expect(result.agents).toHaveLength(1);
  });

  it("filters out invalid agent types", async () => {
    mockedGenerateText.mockResolvedValue({
      text: '{"agents": ["design", "nonexistent_agent"], "reasoning": "test"}',
    } as any);

    const result = await classifyMessage("test", []);
    expect(result.agents).toEqual(["design"]);
  });

  it("falls back to task primary agent when all agents invalid", async () => {
    mockedGenerateText.mockResolvedValue({
      text: '{"agents": ["fake1", "fake2"], "reasoning": "test"}',
    } as any);

    const result = await classifyMessage("test", [], "thermo-method");
    expect(result.agents).toEqual(["thermo"]);
  });

  it("falls back to 'design' when no taskId and all agents invalid", async () => {
    mockedGenerateText.mockResolvedValue({
      text: '{"agents": ["fake"], "reasoning": "test"}',
    } as any);

    const result = await classifyMessage("test", []);
    expect(result.agents).toEqual(["design"]);
  });

  it("uses task's primary agent as fallback for unknown taskId", async () => {
    mockedGenerateText.mockResolvedValue({
      text: "no json here",
    } as any);

    // Unknown taskId: TASK_MAP[taskId] is undefined, so ?.agentType is undefined, falls to "design"
    const result = await classifyMessage("test", [], "nonexistent-task");
    expect(result.agents).toEqual(["design"]);
  });

  it("handles AI API throwing an error", async () => {
    mockedGenerateText.mockRejectedValue(new Error("API rate limited"));

    // classifyMessage does NOT catch generateText errors — it propagates
    await expect(classifyMessage("test", [])).rejects.toThrow("API rate limited");
  });
});

describe("callSpecialist", () => {
  it("calls streamText with the correct agent config", () => {
    mockedStreamText.mockReturnValue({ textStream: "mock" } as any);

    callSpecialist("design", "How do I size this?", [], [], false);

    expect(mockedStreamText).toHaveBeenCalledOnce();
    const call = mockedStreamText.mock.calls[0][0];
    expect(call.system).toContain("Process Design"); // from DESIGN_SYSTEM_PROMPT or similar
  });

  it("includes checklist prompt when isChecklist is true", () => {
    mockedStreamText.mockReturnValue({ textStream: "mock" } as any);

    callSpecialist("design", "checklist", [], [], true);

    const call = mockedStreamText.mock.calls[0][0];
    expect(call.system).toContain("checklist");
  });

  it("includes task context when taskId provided", () => {
    mockedStreamText.mockReturnValue({ textStream: "mock" } as any);

    callSpecialist("design", "test", [], [], false, "thermo-method");

    const call = mockedStreamText.mock.calls[0][0];
    expect(call.system).toContain("ACTIVE DELIVERABLE");
  });
});

describe("orchestrate", () => {
  it("returns single-agent response for single classification", async () => {
    mockedGenerateText.mockResolvedValue({
      text: '{"agents": ["design"], "reasoning": "test"}',
    } as any);
    mockedStreamText.mockReturnValue({ textStream: "mock" } as any);

    const result = await orchestrate("test", [], []);
    expect(result.agentType).toBe("design");
    expect(result.agentsConsulted).toEqual(["design"]);
  });

  it("handles multi-agent classification", async () => {
    mockedGenerateText.mockResolvedValueOnce({
      text: '{"agents": ["design", "safety"], "reasoning": "test"}',
    } as any);

    // Multi-agent: first two calls for specialists, then combine
    mockedGenerateText
      .mockResolvedValueOnce({ text: "Design response" } as any)
      .mockResolvedValueOnce({ text: "Safety response" } as any);

    mockedStreamText.mockReturnValue({ textStream: "mock" } as any);

    const result = await orchestrate("test", [], []);
    expect(result.agentsConsulted).toEqual(["design", "safety"]);
  });

  it("gracefully handles individual agent failure in multi-agent path", async () => {
    mockedGenerateText.mockResolvedValueOnce({
      text: '{"agents": ["design", "safety"], "reasoning": "test"}',
    } as any);

    // First specialist succeeds, second fails
    mockedGenerateText
      .mockResolvedValueOnce({ text: "Design response" } as any)
      .mockRejectedValueOnce(new Error("Safety agent API error"));

    mockedStreamText.mockReturnValue({ textStream: "mock" } as any);

    // Should NOT throw — failed agent gets a fallback message
    const result = await orchestrate("test", [], []);
    expect(result.agentsConsulted).toEqual(["design", "safety"]);
  });
});
