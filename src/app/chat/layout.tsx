"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [leftCollapsed, setLeftCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar collapsed={leftCollapsed} />
      <div className="relative flex-1 flex flex-col overflow-hidden">
        <button
          onClick={() => setLeftCollapsed(!leftCollapsed)}
          className="absolute top-3 left-3 z-10 p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          title={leftCollapsed ? "Show sidebar" : "Hide sidebar"}
        >
          {leftCollapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </button>
        <main className="flex-1 flex flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
