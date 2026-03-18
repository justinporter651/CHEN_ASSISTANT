import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock @supabase/supabase-js so createClient returns a fresh object each time
vi.mock("@supabase/supabase-js", () => ({
  createClient: vi.fn(() => ({ id: Math.random(), from: vi.fn() })),
}));

import { createClient } from "@supabase/supabase-js";
import { selectKnowledge } from "@/lib/ai/knowledge/loader";
import { buildSpecialistContext } from "@/lib/ai/context-builder";
import type { Message, ProjectStateEntry } from "@/lib/ai/types";

const mockedCreateClient = vi.mocked(createClient);

beforeEach(() => {
  vi.clearAllMocks();
});

function makeMessage(
  content: string,
  role: "user" | "assistant" = "user"
): Message {
  return {
    id: `msg-${Math.random()}`,
    user_id: null,
    role,
    content,
    agent_type: null,
    agents_consulted: null,
    metadata: {},
    created_at: new Date().toISOString(),
  };
}

describe("createServiceClient isolation", () => {
  it("creates a new client instance per call (not a singleton)", async () => {
    // createServiceClient uses a dynamic import, so we need to import it
    // after the mock is in place
    const { createServiceClient } = await import("@/lib/supabase/server");

    const client1 = await createServiceClient();
    const client2 = await createServiceClient();

    // Each call should invoke createClient once
    expect(mockedCreateClient).toHaveBeenCalledTimes(2);
    // The returned objects should be distinct references
    expect(client1).not.toBe(client2);
  });

  it("passes the correct URL and service key to createClient", async () => {
    const { createServiceClient } = await import("@/lib/supabase/server");

    await createServiceClient();

    expect(mockedCreateClient).toHaveBeenCalledWith(
      expect.any(String), // URL
      expect.any(String) // service role key
    );
  });
});

describe("selectKnowledge purity", () => {
  it("returns correct results for concurrent calls with different agents", () => {
    const designResult = selectKnowledge("design", "reactor temperature");
    const aspenResult = selectKnowledge("aspen", "simulation convergence");

    // Design result should mention design-related content, not aspen
    // Aspen result should mention aspen-related content, not design
    // Both should be strings (possibly empty if keywords don't match)
    expect(typeof designResult).toBe("string");
    expect(typeof aspenResult).toBe("string");

    // Calling again with the same args should produce the same output
    const designResult2 = selectKnowledge("design", "reactor temperature");
    expect(designResult2).toBe(designResult);
  });

  it("does not mutate shared state between calls", () => {
    // Call many times in sequence with different args
    const results = [
      selectKnowledge("design", "reactor"),
      selectKnowledge("aspen", "simulation"),
      selectKnowledge("economics", "cost"),
      selectKnowledge("writer", "report"),
      selectKnowledge("design", "reactor"), // repeat
    ];

    // First and last should be identical (same args, pure function)
    expect(results[0]).toBe(results[4]);
  });
});

describe("buildSpecialistContext purity", () => {
  const stateA: ProjectStateEntry[] = [
    {
      category: "reactor",
      key: "temperature",
      value: "250",
      unit: "°C",
      source: "user",
    },
  ];
  const stateB: ProjectStateEntry[] = [
    {
      category: "economics",
      key: "npv",
      value: "1.2M",
      unit: "USD",
    },
  ];

  it("returns correct results for concurrent calls with different args", () => {
    const msgsA = [makeMessage("What about reactor sizing?")];
    const msgsB = [makeMessage("How much does it cost?")];

    const ctxDesign = buildSpecialistContext("design", msgsA, stateA);
    const ctxEcon = buildSpecialistContext("economics", msgsB, stateB);

    expect(ctxDesign).toContain("temperature");
    expect(ctxDesign).not.toContain("npv");

    expect(ctxEcon).toContain("npv");
    expect(ctxEcon).not.toContain("temperature");
  });

  it("produces identical output for identical inputs (deterministic)", () => {
    const msgs = [makeMessage("test message")];
    const result1 = buildSpecialistContext("design", msgs, stateA);
    const result2 = buildSpecialistContext("design", msgs, stateA);

    expect(result1).toBe(result2);
  });

  it("does not mutate the input arrays", () => {
    const msgs = [makeMessage("test")];
    const state = [...stateA];
    const msgsBefore = [...msgs];
    const stateBefore = [...state];

    buildSpecialistContext("design", msgs, state);

    expect(msgs).toEqual(msgsBefore);
    expect(state).toEqual(stateBefore);
  });
});
