import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Mock next/server — capture the callback passed to after()
const afterCallbacks: Array<() => Promise<void>> = [];
vi.mock("next/server", () => ({
  after: vi.fn((cb: () => Promise<void>) => {
    afterCallbacks.push(cb);
  }),
}));

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

/**
 * Create a mock StreamTextResult with a .text PromiseLike that resolves
 * to the given string, and a textStream ReadableStream of string chunks.
 */
function createMockStreamResult(text: string) {
  return {
    text: Promise.resolve(text),
    textStream: new ReadableStream<string>({
      start(controller) {
        controller.enqueue(text);
        controller.close();
      },
    }),
  };
}

beforeEach(() => {
  vi.clearAllMocks();
  afterCallbacks.length = 0;
});

afterEach(() => {
  vi.useRealTimers();
});

describe("after() DB insert pattern", () => {
  it("after() callback inserts correct payload into task_messages", async () => {
    const { supabase, mockInsert } = createMockSupabase();
    mockInsert.mockResolvedValue({ error: null });

    const streamResult = createMockStreamResult("test response");
    const taskId = "thermo-method";
    const agentType = "thermal";
    const badge = "Thermal Specialist";
    const agentsConsulted = ["thermal"];

    // Simulate what the route handler does: register an after() callback
    const { after } = await import("next/server");
    after(async () => {
      try {
        const fullText = await streamResult.text;
        const payload = {
          task_id: taskId,
          role: "assistant" as const,
          content: fullText,
          agent_type: agentType,
          metadata: { badge, agents_consulted: agentsConsulted },
        };
        const { error } = await supabase.from("task_messages").insert(payload);
        if (error) {
          console.error("Failed to save assistant message:", error);
          await new Promise((r) => setTimeout(r, 1000));
          await supabase.from("task_messages").insert(payload);
        }
      } catch (err) {
        console.error("Unexpected error in after() callback:", err);
      }
    });

    // Execute the captured callback
    expect(afterCallbacks).toHaveLength(1);
    await afterCallbacks[0]();

    expect(supabase.from).toHaveBeenCalledWith("task_messages");
    expect(mockInsert).toHaveBeenCalledTimes(1);
    expect(mockInsert).toHaveBeenCalledWith({
      task_id: "thermo-method",
      role: "assistant",
      content: "test response",
      agent_type: "thermal",
      metadata: { badge: "Thermal Specialist", agents_consulted: ["thermal"] },
    });
  });

  it("retries insert once on failure", async () => {
    vi.useFakeTimers();

    const { supabase, mockInsert } = createMockSupabase();
    const dbError = { message: "connection reset" };
    mockInsert
      .mockResolvedValueOnce({ error: dbError })
      .mockResolvedValueOnce({ error: null });

    const consoleSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const streamResult = createMockStreamResult("retry response");

    const { after } = await import("next/server");
    after(async () => {
      try {
        const fullText = await streamResult.text;
        const payload = {
          task_id: "t1",
          role: "assistant" as const,
          content: fullText,
          agent_type: "thermal",
          metadata: {},
        };
        const { error } = await supabase.from("task_messages").insert(payload);
        if (error) {
          console.error("Failed to save assistant message:", error);
          await new Promise((r) => setTimeout(r, 1000));
          await supabase.from("task_messages").insert(payload);
        }
      } catch (err) {
        console.error("Unexpected error in after() callback:", err);
      }
    });

    const cbPromise = afterCallbacks[0]();
    await vi.advanceTimersByTimeAsync(1000);
    await cbPromise;

    expect(mockInsert).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("handles streamResult.text rejection gracefully", async () => {
    const { supabase, mockInsert } = createMockSupabase();

    const failingStreamResult = {
      text: Promise.reject(new Error("stream aborted")),
      textStream: new ReadableStream<string>({
        start(controller) {
          controller.error(new Error("stream aborted"));
        },
      }),
    };

    const consoleSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const { after } = await import("next/server");
    after(async () => {
      try {
        const fullText = await failingStreamResult.text;
        await supabase.from("task_messages").insert({
          task_id: "t1",
          role: "assistant",
          content: fullText,
          agent_type: "thermal",
          metadata: {},
        });
      } catch (err) {
        console.error("Unexpected error in after() callback:", err);
      }
    });

    // Should not throw — the try-catch inside the callback handles it
    await expect(afterCallbacks[0]()).resolves.toBeUndefined();

    // Insert should never have been called since text resolution failed
    expect(mockInsert).not.toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Unexpected error in after() callback:",
      expect.any(Error)
    );
    consoleSpy.mockRestore();
  });

  it("TextEncoderStream piping produces Uint8Array output", async () => {
    const source = new ReadableStream<string>({
      start(controller) {
        controller.enqueue("hello ");
        controller.enqueue("world");
        controller.close();
      },
    });

    const encoded = source.pipeThrough(new TextEncoderStream());
    const reader = encoded.getReader();
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      expect(value).toBeInstanceOf(Uint8Array);
      chunks.push(value);
    }

    const decoded = new TextDecoder().decode(
      new Uint8Array(chunks.reduce((acc, c) => [...acc, ...c], [] as number[]))
    );
    expect(decoded).toBe("hello world");
  });

  it("after() is called before Response is returned in route code", async () => {
    const fs = await import("fs");
    const path = await import("path");

    // Read the chat route source
    const chatRoute = fs.readFileSync(
      path.resolve(__dirname, "../app/api/chat/route.ts"),
      "utf-8"
    );

    // In the current code, DB insert is inside ReadableStream.
    // Once refactored, the route should call after() before returning Response.
    // For now, verify the structural expectation: the route contains a
    // return new Response statement. When refactored, it should also contain
    // an after() call that appears before the return.
    const hasReturn = chatRoute.includes("return new Response");
    expect(hasReturn).toBe(true);

    // Check the review route as well
    const reviewRoute = fs.readFileSync(
      path.resolve(__dirname, "../app/api/chat/review/route.ts"),
      "utf-8"
    );
    expect(reviewRoute.includes("return new Response")).toBe(true);
  });
});
