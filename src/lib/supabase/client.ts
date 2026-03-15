import { createBrowserClient } from "@supabase/ssr";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

/** True when env vars aren't set and Supabase calls will silently fail */
export const isPlaceholder = SUPABASE_URL.includes("placeholder");

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
}

/** Singleton instance for hooks that need a stable reference */
export const supabase = createClient();
