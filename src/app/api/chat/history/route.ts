import { createServiceClient, getAuthUser } from "@/lib/supabase/server";

export const maxDuration = 30;

/**
 * GET /api/chat/history?taskId=xxx&limit=50
 * Loads chat history for a task using the service role client (bypasses RLS).
 */
export async function GET(req: Request) {
  const user = await getAuthUser();
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const url = new URL(req.url);
  const taskId = url.searchParams.get("taskId");
  const limit = Math.min(Number(url.searchParams.get("limit") || 50), 200);

  if (!taskId) {
    return new Response("taskId is required", { status: 400 });
  }

  const supabase = await createServiceClient();

  const { data, error } = await supabase
    .from("task_messages")
    .select("*")
    .eq("task_id", taskId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Failed to load chat history:", error);
    return Response.json({ error: "Failed to load history" }, { status: 500 });
  }

  return Response.json({ messages: data ?? [] });
}
