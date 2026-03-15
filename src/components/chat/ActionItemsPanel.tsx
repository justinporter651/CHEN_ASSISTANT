"use client";

import { useState } from "react";
import { useChatStore } from "@/stores/chat-store";
import { ListTodo, Sparkles, Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ActionItemsPanelProps {
  taskId: string;
}

export function ActionItemsPanel({ taskId }: ActionItemsPanelProps) {
  const [newItemText, setNewItemText] = useState("");

  const items = useChatStore((s) => s.actionItems[taskId] ?? []);
  const toggleActionItem = useChatStore((s) => s.toggleActionItem);
  const removeActionItem = useChatStore((s) => s.removeActionItem);
  const addManualItem = useChatStore((s) => s.addManualItem);

  const uncompletedCount = items.filter((i) => !i.completed).length;
  const sorted = items.toSorted((a, b) => Number(a.completed) - Number(b.completed));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = newItemText.trim();
    if (!text) return;
    addManualItem(taskId, text);
    setNewItemText("");
  };

  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <ListTodo className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Action Items
        </span>
        {uncompletedCount > 0 && (
          <Badge variant="outline" className="text-[10px] px-1.5 py-0 ml-auto">
            {uncompletedCount}
          </Badge>
        )}
      </div>

      {sorted.length > 0 && (
        <ul className="space-y-1">
          {sorted.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-1.5 text-xs group"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleActionItem(taskId, item.id)}
                className="mt-0.5 shrink-0"
              />
              <span
                className={
                  item.completed
                    ? "line-through text-muted-foreground flex-1"
                    : "flex-1"
                }
              >
                {item.text}
              </span>
              {item.source === "ai" && (
                <Sparkles className="h-3 w-3 text-muted-foreground shrink-0 mt-0.5" />
              )}
              <button
                onClick={() => removeActionItem(taskId, item.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                aria-label="Remove item"
              >
                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-1 mt-2">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 text-xs bg-transparent border border-zinc-200 dark:border-zinc-700 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-zinc-400"
        />
        <button
          type="submit"
          className="shrink-0 text-muted-foreground hover:text-foreground"
          aria-label="Add task"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}
