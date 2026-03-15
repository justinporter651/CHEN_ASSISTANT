import { createOpenAI } from "@ai-sdk/openai";

// Moonshot/Kimi — OpenAI-compatible API
export const moonshot = createOpenAI({
  apiKey: process.env.MOONSHOT_API_KEY,
  baseURL: "https://api.moonshot.ai/v1",
});

// Use .chat() to target /chat/completions (not /responses which Moonshot doesn't support)
// kimi-k2.5: 262K context, reasoning model (requires temperature=1)
export const model = moonshot.chat("kimi-k2.5");
