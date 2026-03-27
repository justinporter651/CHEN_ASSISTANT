# Picture Processing Research for chen4470-assistant Chatbot

## Current State

The chatbot currently supports **PDF file uploads only**. The flow is:
1. User selects a PDF in `ChatInput.tsx`
2. Client sends the file to `POST /api/upload` which uses `pdf-parse` to extract text
3. Extracted text is prepended to the user's message as a string
4. The AI receives the text content (no visual/image data)

**Key files involved:**
- `src/components/chat/ChatInput.tsx` — File attachment UI (PDF only)
- `src/app/api/upload/route.ts` — PDF text extraction endpoint
- `src/hooks/useChat.ts` — Message sending hook (sends plain string `content`)
- `src/app/api/chat/route.ts` — Chat API route (receives `message` as a string)
- `src/lib/ai/provider.ts` — Moonshot/Kimi provider config using `@ai-sdk/openai`

---

## Kimi K2.5 Vision Capabilities

**Good news: The model already supports vision.** Kimi K2.5 is a native multimodal model with built-in image and video understanding via its MoonViT vision encoder.

### Supported Formats
- **Images:** PNG, JPEG, WebP, GIF
- **Videos:** MP4, MPEG, MOV, AVI, X-FLV, MPG, WebM, WMV, 3GPP

### Limits
- Image resolution: must not exceed 4K (4096x2160)
- Video resolution: must not exceed 2K (2048x1080)
- Request body size: must not exceed 100MB
- No limit on number of images per request (within body size constraint)

### How the API Accepts Images

The Moonshot API follows the **OpenAI-compatible** vision format. Instead of `message.content` being a plain string, it becomes an **array of content parts**:

```python
# Python example (same structure applies in JS)
{
    "role": "user",
    "content": [
        {
            "type": "image_url",
            "image_url": {
                "url": "data:image/png;base64,{base64_encoded_data}"
            }
        },
        {
            "type": "text",
            "text": "What does this process flow diagram show?"
        }
    ]
}
```

### Two Ways to Send Images

1. **Base64 inline** — Encode the image as a base64 data URL and embed it directly in the message content array. Best for images under ~10MB.

2. **File ID reference** — Upload the file first via the Moonshot Files API (`POST /v1/files` with `purpose="image"`), then reference it with `ms://{file_id}`. Better for large files or when reusing the same image across multiple messages.

### Critical Detail
> **Do NOT serialize the content array as a JSON string.** The content field must be an actual array/list, not a stringified JSON string. Moonshot will fail to identify the image if you do this.

### Documentation
- Vision guide: https://platform.moonshot.ai/docs/guide/use-kimi-vision-model
- K2.5 quickstart: https://platform.moonshot.ai/docs/guide/kimi-k2-5-quickstart
- Files API: https://platform.moonshot.ai/docs/api/files

---

## Vercel AI SDK Support for Multimodal Messages

The Vercel AI SDK (v6+, which this project uses) has built-in support for multimodal messages via the **`parts` array** structure.

### Message Format (AI SDK v6)

Messages use a `parts` array instead of a plain `content` string:

```typescript
// User message with image
{
  role: 'user',
  parts: [
    { type: 'text', text: 'What is in this P&ID?' },
    { type: 'file', mediaType: 'image/png', url: 'data:image/png;base64,...' }
  ]
}
```

### Server-Side (API Route)

The AI SDK provides `convertToModelMessages()` to automatically transform the UI message format (with `parts`) into the model-specific format (OpenAI-compatible content arrays):

```typescript
import { streamText, convertToModelMessages, type UIMessage } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'), // or any vision-capable model
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

### Client-Side (File Upload)

Convert files to base64 data URLs before sending:

```typescript
async function convertFilesToDataURLs(files: FileList) {
  return Promise.all(
    Array.from(files).map(
      file =>
        new Promise<{ type: 'file'; mediaType: string; url: string }>(
          (resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve({
                type: 'file',
                mediaType: file.type,
                url: reader.result as string,
              });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          }
        )
    )
  );
}
```

### Key Functions
- `useChat()` with `sendMessage()` — sends messages with parts array
- `convertToModelMessages()` — transforms UI messages to model format
- `toUIMessageStreamResponse()` — streams response back to client

### Documentation
- Multi-modal chatbot guide: https://ai-sdk.dev/cookbook/guides/multi-modal-chatbot
- Stream text with image: https://ai-sdk.dev/cookbook/next/stream-text-with-image-prompt
- useChat reference: https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chat

---

## Implementation Strategy

### What Needs to Change

The current architecture sends messages as **plain strings**. To support images, the message format needs to change to support **multimodal content parts** throughout the pipeline.

### Option A: AI SDK Native Approach (Recommended)

Adopt the AI SDK v6 `parts`-based message format end-to-end. This is the cleanest approach and aligns with the SDK's built-in multimodal support.

#### Changes Required:

**1. `ChatInput.tsx` — Accept image files**
- Expand the file input `accept` attribute to include `image/*` in addition to PDFs
- For images: convert to base64 data URL client-side (no server upload needed)
- For PDFs: keep existing server-side text extraction flow
- Send structured parts (text + file parts) instead of a single string

**2. `useChat.ts` hook — Send structured messages**
- Change `sendMessage` to accept a parts array (or separate image attachments) instead of just a `content` string
- POST to the API with the multimodal message structure

**3. `POST /api/chat/route.ts` — Accept multimodal messages**
- Parse incoming messages with the `parts` format
- Use `convertToModelMessages()` from the AI SDK to transform into model-compatible format
- Pass the converted messages to `streamText()` / orchestrator

**4. Orchestrator (`orchestrator.ts`) — Pass images through**
- The orchestrator currently works with plain string messages
- Needs to forward image content parts to the specialist agents
- The message classification step may need to handle or ignore image parts

**5. `ChatWindow.tsx` — Render images in chat**
- Display image attachments inline in user messages
- Render `<img>` tags for image parts

**6. Database (`task_messages` table) — Store image references**
- Option 1: Store base64 in a new `attachments` JSONB column (simple but large)
- Option 2: Upload images to Supabase Storage, store URLs (better for performance)
- Option 3: Don't persist images, only persist extracted descriptions (simplest)

### Option B: Simpler "Extract and Describe" Approach

Similar to the current PDF flow — upload the image, have the AI describe it server-side, then inject the description as text into the conversation. This avoids changing the message format but loses the ability to reference the image later in conversation.

#### Flow:
1. User uploads image
2. Client sends image to a new `/api/upload-image` endpoint
3. Server sends image to Kimi K2.5 with prompt: "Describe this image in detail"
4. Returns description text to client
5. Client prepends description to user message (same as current PDF flow)

**Pros:** Minimal changes to existing architecture
**Cons:** AI can't "look at" the image again if asked follow-up questions; loses visual context

---

## Recommended Approach

**Option A (AI SDK Native)** is recommended because:

1. **Kimi K2.5 already supports vision** — no extra model or API needed
2. **Vercel AI SDK v6 has built-in multimodal support** — `convertToModelMessages()` handles the format conversion automatically
3. **Better UX** — Users can ask follow-up questions about the same image; the AI retains visual context
4. **Future-proof** — Aligns with the SDK's direction; video support can be added later
5. **Relevant to course work** — Students can upload P&IDs, PFDs, equipment diagrams, simulation screenshots, and Aspen results for AI analysis

### Use Cases for CHE 4470 Students
- Upload **P&IDs and PFDs** for the AI to review and provide feedback
- Share **Aspen Plus screenshots** showing simulation results, convergence issues, or error messages
- Upload **equipment spec sheets** or vendor datasheets for design verification
- Share **hand-drawn sketches** of process concepts for discussion
- Upload **graphs/plots** (e.g., sensitivity analyses, optimization results) for interpretation
- Share **HAZOP worksheets** or safety diagrams for review

---

## Token / Cost Considerations

- Images consume tokens based on resolution. High-res images can use 1000+ tokens each.
- With a 262K context window, there is room for several images per conversation, but token usage should be monitored.
- Consider resizing large images client-side before sending (e.g., max 1024px on longest side) to reduce token consumption.
- The existing token estimation system (`token-utils.ts`) will need to account for image tokens.

---

## Sources
- [Kimi Vision Model Documentation](https://platform.moonshot.ai/docs/guide/use-kimi-vision-model)
- [Kimi K2.5 Quickstart](https://platform.moonshot.ai/docs/guide/kimi-k2-5-quickstart)
- [Kimi K2.5 on Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.5)
- [Vercel AI SDK Multi-Modal Chatbot Guide](https://ai-sdk.dev/cookbook/guides/multi-modal-chatbot)
- [AI SDK: Stream Text with Image Prompt](https://ai-sdk.dev/cookbook/next/stream-text-with-image-prompt)
- [AI SDK useChat Reference](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chat)
- [Moonshot AI Releases Kimi K2.5 — InfoQ](https://www.infoq.com/news/2026/02/kimi-k25-swarm/)
- [Kimi K2.5 on OpenRouter](https://openrouter.ai/moonshotai/kimi-k2.5)
