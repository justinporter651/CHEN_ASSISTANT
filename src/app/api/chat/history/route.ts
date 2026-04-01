import { createClient } from "@supabase/supabase-js";
import { createServiceClient, getAuthUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

/**
 * Verify the caller is authenticated using either:
 * 1. Bearer token in Authorization header (sent explicitly by client)
 * 2. Cookie-based session (set by middleware)
 */
async function verifyAuth(req: Request): Promise<boolean> {
  // Try header-based auth first (more reliable — avoids cookie-forwarding issues)
  const authHeader = req.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice(7);
    const anon = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data } = await anon.auth.getUser(token);
    if (data.user) return true;
  }

  // Fall back to cookie-based auth
  const user = await getAuthUser();
  return !!user;
}

/**
 * GET /api/chat/history?taskId=xxx&limit=50
 * Loads chat history for a task using the service role client (bypasses RLS).
 */
export async function GET(req: Request) {
  const authed = await verifyAuth(req);
  if (!authed) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const taskId = url.searchParams.get("taskId");
  const limit = Math.min(Number(url.searchParams.get("limit") || 50), 200);

  if (!taskId) {
    return Response.json({ error: "taskId is required" }, { status: 400 });
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
