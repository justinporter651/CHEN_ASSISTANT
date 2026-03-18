import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * Insert a row into a Supabase table with a single retry on failure.
 * Returns { error: null } on success, or { error } after both attempts fail.
 */
export async function insertWithRetry(
  supabase: SupabaseClient,
  table: string,
  data: Record<string, unknown>,
  context?: string // for logging, e.g. "assistant message for task thermo-method"
): Promise<{ error: Error | null }> {
  // First attempt
  const { error } = await supabase.from(table).insert(data);
  if (!error) return { error: null };

  console.error(`[DB INSERT FAILED] ${context ?? table}:`, error.message);

  // Retry once after 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { error: retryError } = await supabase.from(table).insert(data);
  if (retryError) {
    console.error(
      `[DB INSERT RETRY FAILED] ${context ?? table}:`,
      retryError.message
    );
  }
  return { error: retryError };
}
