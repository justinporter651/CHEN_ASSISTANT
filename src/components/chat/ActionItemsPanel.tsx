"use client";

import { useState } from "react";
import { useMicrotasks } from "@/hooks/useMicrotasks";
import { ListTodo, Sparkles, Plus, X, Loader2, CheckCircle2, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ActionItemsPanelProps {
  taskId: string;
}

export function ActionItemsPanel({ taskId }: ActionItemsPanelProps) {
  const [newItemText, setNewItemText] = useState("");
  const { items, loading, addItem, toggleItem, removeItem } =
    useMicrotasks(taskId);

  const uncompletedCount = items.filter((i) => !i.completed).length;
  const completedCount = items.filter((i) => i.completed).length;
  const sorted = [...items].sort(
    (a, b) => Number(a.completed) - Number(b.completed)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = newItemText.trim();
    if (!text) return;
    addItem(text, "user");
    setNewItemText("");
  };

  return (
    <div className="rounded-lg border border-border/60 bg-white dark:bg-zinc-900 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border-b border-border/40">
        <ListTodo className="h-4 w-4 text-blue-500" />
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
          Action Items
        </span>
        {items.length > 0 && (
          <Badge
            variant="outline"
            className={`text-[10px] px-1.5 py-0 ml-auto font-medium ${
              uncompletedCount === 0
                ? "border-green-300 text-green-600 dark:border-green-700 dark:text-green-400"
                : "border-blue-300 text-blue-600 dark:border-blue-700 dark:text-blue-400"
            }`}
          >
            {completedCount}/{items.length}
          </Badge>
        )}
      </div>

      <div className="p-2.5">
        {loading && (
          <div className="flex items-center gap-1.5 py-3 justify-center text-xs text-muted-foreground">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            <span>Loading...</span>
          </div>
        )}

        {!loading && sorted.length === 0 && (
          <p className="text-[11px] text-muted-foreground/60 text-center py-2">
            No action items yet. Chat with the AI or add your own below.
          </p>
        )}

        {sorted.length > 0 && (
          <ul className="space-y-0.5">
            {sorted.map((item) => (
              <li
                key={item.id}
                className={`flex items-start gap-2 text-xs group rounded-md px-2 py-1.5 transition-colors ${
                  item.completed
                    ? "bg-transparent"
                    : "bg-blue-50/50 dark:bg-blue-950/20"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id, !item.completed)}
                  className="shrink-0 mt-px"
                >
                  {item.completed ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <Circle className="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-600 hover:text-blue-400 transition-colors" />
                  )}
                </button>
                <span
                  className={`flex-1 leading-snug ${
                    item.completed
                      ? "line-through text-muted-foreground/50"
                      : "text-foreground"
                  }`}
                >
                  {item.text}
                </span>
                {item.source === "ai" && (
                  <Sparkles className="h-3 w-3 text-amber-400 shrink-0 mt-0.5" aria-label="Suggested by AI" />
                )}
                <button
                  onClick={() => removeItem(item.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                  aria-label="Remove item"
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-red-500 transition-colors" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Add item form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border/30">
          <input
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            placeholder="Add an action item..."
            className="flex-1 text-xs bg-transparent border border-zinc-200 dark:border-zinc-700 rounded-md px-2.5 py-1.5 outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 placeholder:text-muted-foreground/40"
          />
          <button
            type="submit"
            className="shrink-0 p-1 rounded-md text-muted-foreground hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
            aria-label="Add task"
          >
            <Plus className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
