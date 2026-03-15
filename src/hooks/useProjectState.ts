"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { DbProjectState } from "@/lib/supabase/types";

export function useProjectState() {
  const [state, setState] = useState<DbProjectState[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  // Initial load
  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("project_state")
        .select("*")
        .order("category");
      setState(data || []);
      setLoading(false);
    }
    load();
  }, []);

  // Realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel("project-state-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "project_state",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setState((prev) => [...prev, payload.new as DbProjectState]);
          } else if (payload.eventType === "UPDATE") {
            setState((prev) =>
              prev.map((item) =>
                item.id === (payload.new as DbProjectState).id
                  ? (payload.new as DbProjectState)
                  : item
              )
            );
          } else if (payload.eventType === "DELETE") {
            setState((prev) =>
              prev.filter(
                (item) => item.id !== (payload.old as DbProjectState).id
              )
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getByCategory = useCallback(
    (category: string) => {
      return state.filter((s) => s.category === category);
    },
    [state]
  );

  const getGrouped = useCallback(() => {
    return state.reduce(
      (acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      },
      {} as Record<string, DbProjectState[]>
    );
  }, [state]);

  return { state, loading, getByCategory, getGrouped };
}
