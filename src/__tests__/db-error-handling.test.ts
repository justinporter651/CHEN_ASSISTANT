import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { insertWithRetry } from "@/lib/supabase/insert-with-retry";

/**
 * Create a mock SupabaseClient whose .from(table).insert(data) behavior
 * is controlled by the returned `mockInsert` vi.fn().
 */
function createMockSupabase() {
  const mockInsert = vi.fn();
  const supabase = {
    from: vi.fn(() => ({
      insert: mockInsert,
    })),
  };
  return { supabase: supabase as any, mockInsert };
}

beforeEach(() => {
  vi.clearAllMocks();
  // Use fake timers so we don't actually wait 1 second for the retry delay
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("insertWithRetry", () => {
  it("returns no error when insert succeeds on first try", async () => {
    const { supabase, mockInsert } = createMockSupabase();
    mockInsert.mockResolvedValue({ error: null });

    const result = await insertWithRetry(supabase, "task_messages", {
      content: "hello",
    });

    expect(result.error).toBeNull();
    expect(mockInsert).toHaveBeenCalledTimes(1);
  });

  it("retries once and returns no error when retry succeeds", async () => {
    const { supabase, mockInsert } = createMockSupabase();
    const dbError = { message: "connection reset" };
    mockInsert
      .mockResolvedValueOnce({ error: dbError })
      .mockResolvedValueOnce({ error: null });

    const promise = insertWithRetry(
      supabase,
      "task_messages",
      { content: "hello" },
      "assistant message for task thermo-method"
    );

    // Advance past the 1-second retry delay
    await vi.advanceTimersByTimeAsync(1000);

    const result = await promise;
    expect(result.error).toBeNull();
    expect(mockInsert).toHaveBeenCalledTimes(2);
  });

  it("returns error when both attempts fail", async () => {
    const { supabase, mockInsert } = createMockSupabase();
    const firstError = { message: "connection reset" };
    const secondError = { message: "still down" };
    mockInsert
      .mockResolvedValueOnce({ error: firstError })
      .mockResolvedValueOnce({ error: secondError });

    const promise = insertWithRetry(supabase, "task_messages", {
      content: "hello",
    });

    await vi.advanceTimersByTimeAsync(1000);

    const result = await promise;
    expect(result.error).toEqual(secondError);
    expect(mockInsert).toHaveBeenCalledTimes(2);
  });

  it("attempts insert even with null content", async () => {
    const { supabase, mockInsert } = createMockSupabase();
    mockInsert.mockResolvedValue({ error: null });

    const result = await insertWithRetry(supabase, "task_messages", {
      content: null,
    });

    expect(result.error).toBeNull();
    expect(mockInsert).toHaveBeenCalledTimes(1);
    expect(mockInsert).toHaveBeenCalledWith({ content: null });
  });

  it("attempts insert with empty string content", async () => {
    const { supabase, mockInsert } = createMockSupabase();
    mockInsert.mockResolvedValue({ error: null });

    const result = await insertWithRetry(supabase, "task_messages", {
      content: "",
    });

    expect(result.error).toBeNull();
    expect(mockInsert).toHaveBeenCalledWith({ content: "" });
  });

  it("logs errors to console.error", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { supabase, mockInsert } = createMockSupabase();
    mockInsert
      .mockResolvedValueOnce({ error: { message: "first fail" } })
      .mockResolvedValueOnce({ error: { message: "second fail" } });

    const promise = insertWithRetry(
      supabase,
      "task_messages",
      { content: "test" },
      "assistant msg"
    );

    await vi.advanceTimersByTimeAsync(1000);
    await promise;

    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith(
      "[DB INSERT FAILED] assistant msg:",
      "first fail"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "[DB INSERT RETRY FAILED] assistant msg:",
      "second fail"
    );

    consoleSpy.mockRestore();
  });

  it("uses table name as log context when context is not provided", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { supabase, mockInsert } = createMockSupabase();
    mockInsert
      .mockResolvedValueOnce({ error: { message: "fail" } })
      .mockResolvedValueOnce({ error: null });

    const promise = insertWithRetry(supabase, "task_messages", {
      content: "test",
    });

    await vi.advanceTimersByTimeAsync(1000);
    await promise;

    expect(consoleSpy).toHaveBeenCalledWith(
      "[DB INSERT FAILED] task_messages:",
      "fail"
    );

    consoleSpy.mockRestore();
  });
});
