"use client";

import { Badge } from "@/components/ui/badge";
import { AGENT_CONFIGS } from "@/lib/ai/specialists";
import type { AgentType } from "@/lib/ai/types";

const AGENT_COLORS: Record<AgentType, string> = {
  orchestrator: "bg-gray-500",
  aspen: "bg-blue-600",
  design: "bg-amber-600",
  economics: "bg-emerald-600",
  safety: "bg-red-600",
  writer: "bg-purple-600",
  presentation: "bg-pink-600",
  thermo: "bg-cyan-600",
};

interface AgentBadgeProps {
  agentType?: string;
  badge?: string;
  size?: "sm" | "md";
}

export function AgentBadge({
  agentType,
  badge,
  size = "sm",
}: AgentBadgeProps) {
  if (badge) {
    // Use the pre-formatted badge string (e.g., "🔧 Aspen Troubleshooter + 📊 Economics")
    return (
      <Badge
        variant="secondary"
        className={`${size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-3 py-1"} font-medium`}
      >
        {badge}
      </Badge>
    );
  }

  if (!agentType || !(agentType in AGENT_CONFIGS)) return null;

  const config = AGENT_CONFIGS[agentType as AgentType];
  const color = AGENT_COLORS[agentType as AgentType];

  return (
    <Badge
      className={`${color} text-white ${size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-3 py-1"} font-medium`}
    >
      {config.icon} {config.name}
    </Badge>
  );
}
