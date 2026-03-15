import { createServiceClient } from "@/lib/supabase/server";

/** GET /api/microtasks?taskId=xxx — Load microtasks for a task */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const taskId = searchParams.get("taskId");

  if (!taskId) {
    return Response.json({ error: "taskId required" }, { status: 400 });
  }

  const supabase = await createServiceClient();
  const { data, error } = await supabase
    .from("microtasks")
    .select("*")
    .eq("task_id", taskId)
    .order("created_at", { ascending: true });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}

/** POST /api/microtasks — Create a microtask */
export async function POST(req: Request) {
  const { taskId, text, source } = await req.json();

  if (!taskId || !text) {
    return Response.json({ error: "taskId and text required" }, { status: 400 });
  }

  const supabase = await createServiceClient();

  // Deduplicate: skip if an identical text already exists for this task
  if (source === "ai") {
    const { data: existing } = await supabase
      .from("microtasks")
      .select("id")
      .eq("task_id", taskId)
      .ilike("text", text);

    if (existing && existing.length > 0) {
      return Response.json(existing[0]);
    }
  }

  const { data, error } = await supabase
    .from("microtasks")
    .insert({
      task_id: taskId,
      text,
      source: source || "user",
    })
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}

/** PATCH /api/microtasks — Toggle or update a microtask */
export async function PATCH(req: Request) {
  const { id, completed } = await req.json();

  if (!id || typeof completed !== "boolean") {
    return Response.json({ error: "id and completed required" }, { status: 400 });
  }

  const supabase = await createServiceClient();
  const { error } = await supabase
    .from("microtasks")
    .update({ completed })
    .eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ ok: true });
}

/** DELETE /api/microtasks?id=xxx — Remove a microtask */
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return Response.json({ error: "id required" }, { status: 400 });
  }

  const supabase = await createServiceClient();
  const { error } = await supabase
    .from("microtasks")
    .delete()
    .eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ ok: true });
}
