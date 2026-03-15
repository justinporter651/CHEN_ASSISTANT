"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { supabase, isPlaceholder } from "@/lib/supabase/client";

export interface Microtask {
  id: string;
  task_id: string;
  text: string;
  completed: boolean;
  source: "ai" | "user";
  created_at: string;
}

export function useMicrotasks(taskId: string) {
  const [items, setItems] = useState<Microtask[]>([]);
  const [loading, setLoading] = useState(true);
  const currentTaskIdRef = useRef(taskId);
  currentTaskIdRef.current = taskId;

  // Load microtasks from DB
  useEffect(() => {
    if (!taskId) {
      setItems([]);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/api/microtasks?taskId=${taskId}`);
        if (!res.ok) throw new Error("Failed to load microtasks");
        const data: Microtask[] = await res.json();
        if (!cancelled && currentTaskIdRef.current === taskId) {
          setItems(data);
        }
      } catch (err) {
        console.error("Failed to load microtasks:", err);
      } finally {
        if (!cancelled && currentTaskIdRef.current === taskId) {
          setLoading(false);
        }
      }
    }

    load();

    // Subscribe to realtime changes
    if (isPlaceholder) return;

    const channel = supabase
      .channel(`microtasks:task_id=eq.${taskId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "microtasks",
          filter: `task_id=eq.${taskId}`,
        },
        (payload) => {
          if (currentTaskIdRef.current !== taskId) return;
          const row = payload.new as Microtask;
          setItems((prev) => {
            if (prev.some((i) => i.id === row.id)) return prev;
            return [...prev, row];
          });
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "microtasks",
          filter: `task_id=eq.${taskId}`,
        },
        (payload) => {
          if (currentTaskIdRef.current !== taskId) return;
          const row = payload.new as Microtask;
          setItems((prev) =>
            prev.map((i) => (i.id === row.id ? row : i))
          );
        }
      )
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: "microtasks",
          filter: `task_id=eq.${taskId}`,
        },
        (payload) => {
          if (currentTaskIdRef.current !== taskId) return;
          const row = payload.old as { id: string };
          setItems((prev) => prev.filter((i) => i.id !== row.id));
        }
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, [taskId]);

  const addItem = useCallback(
    async (text: string, source: "ai" | "user" = "user") => {
      try {
        const res = await fetch("/api/microtasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ taskId, text, source }),
        });
        if (!res.ok) throw new Error("Failed to add microtask");
        const item: Microtask = await res.json();
        // Optimistic update (realtime will also fire, dedup handles it)
        setItems((prev) => {
          if (prev.some((i) => i.id === item.id)) return prev;
          return [...prev, item];
        });
      } catch (err) {
        console.error("Failed to add microtask:", err);
      }
    },
    [taskId]
  );

  const toggleItem = useCallback(async (id: string, completed: boolean) => {
    // Optimistic update
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, completed } : i))
    );
    try {
      const res = await fetch("/api/microtasks", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, completed }),
      });
      if (!res.ok) throw new Error("Failed to toggle microtask");
    } catch (err) {
      console.error("Failed to toggle microtask:", err);
      // Revert
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, completed: !completed } : i))
      );
    }
  }, []);

  const removeItem = useCallback(async (id: string) => {
    // Optimistic update
    setItems((prev) => prev.filter((i) => i.id !== id));
    try {
      const res = await fetch(`/api/microtasks?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to remove microtask");
    } catch (err) {
      console.error("Failed to remove microtask:", err);
    }
  }, []);

  return { items, loading, addItem, toggleItem, removeItem };
}
