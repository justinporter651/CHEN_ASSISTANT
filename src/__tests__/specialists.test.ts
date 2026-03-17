import { describe, it, expect } from "vitest";
import { AGENT_CONFIGS, getAgentConfig, getAgentBadge, AGENT_LIST } from "@/lib/ai/specialists";
import type { AgentType } from "@/lib/ai/types";

describe("AGENT_CONFIGS", () => {
  it("has configs for all declared agent types", () => {
    const expectedTypes: AgentType[] = [
      "orchestrator", "aspen", "design", "economics", "safety", "writer", "presentation", "thermo",
    ];
    for (const t of expectedTypes) {
      expect(AGENT_CONFIGS[t]).toBeDefined();
      expect(AGENT_CONFIGS[t].id).toBe(t);
      expect(AGENT_CONFIGS[t].systemPrompt).toBeTruthy();
    }
  });

  it("every agent has non-empty contextCategories", () => {
    for (const config of Object.values(AGENT_CONFIGS)) {
      expect(Array.isArray(config.contextCategories)).toBe(true);
      expect(config.contextCategories.length).toBeGreaterThan(0);
    }
  });
});

describe("getAgentBadge", () => {
  it("returns icon and name for valid agent", () => {
    const badge = getAgentBadge("design");
    expect(badge.icon).toBe("⚙️");
    expect(badge.name).toBe("Process Design");
  });

  it("falls back to design agent for invalid agent type", () => {
    const badge = getAgentBadge("fake" as AgentType);
    expect(badge.icon).toBe("⚙️");
    expect(badge.name).toBe("Process Design");
  });
});

describe("AGENT_LIST", () => {
  it("excludes orchestrator", () => {
    expect(AGENT_LIST.find((a) => a.id === "orchestrator")).toBeUndefined();
  });

  it("includes all non-orchestrator agents", () => {
    expect(AGENT_LIST.length).toBe(Object.keys(AGENT_CONFIGS).length - 1);
  });
});
