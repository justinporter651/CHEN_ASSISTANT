# Picture Upload Implementation Plan

## Overview

Add image upload support to the chen4470-assistant chatbot so students can share P&IDs, Aspen screenshots, equipment diagrams, and other visuals for AI analysis. The approach follows **Option A (AI SDK Native)** from the research document, sending images as multimodal content parts through the existing pipeline.

Kimi K2.5 already supports vision natively, and the Vercel AI SDK v6 (already installed) has built-in multimodal message support via `convertToModelMessages()`. The main work is converting the message pipeline from plain strings to structured parts arrays.

---

## Phase 1: Client-Side — Accept and Encode Images

### Step 1.1: Update `ChatInput.tsx` — Accept image files

**File:** `src/components/chat/ChatInput.tsx`

- Expand the file input `accept` attribute from PDF-only to include `image/png, image/jpeg, image/webp, image/gif` in addition to `.pdf`
- Add a branching handler in `handleFileChange()`:
  - **PDF files** → continue using the existing `/api/upload` server-side extraction flow
  - **Image files** → convert to base64 data URL client-side using `FileReader.readAsDataURL()`
- Store image attachment state as an object: `{ type: 'image', dataUrl: string, mediaType: string, filename: string }` alongside the existing PDF attachment state
- Add image preview thumbnail in the attachment bar (currently shows PDF icon/name)
- Add client-side validation:
  - Max file size: 10MB per image (to keep base64 payload reasonable)
  - Accepted MIME types: `image/png`, `image/jpeg`, `image/webp`, `image/gif`
- Optional: resize images client-side if either dimension exceeds 2048px (reduces token consumption)

### Step 1.2: Update `ChatInput.tsx` — Send structured message

- When images are attached, construct a parts array instead of a plain content string:
  ```
  parts: [
    { type: 'text', text: 'user message text' },
    { type: 'file', mediaType: 'image/png', url: 'data:image/png;base64,...' }
  ]
  ```
- When no images are attached, still send as a parts array with a single text part (unified format)
- The PDF flow remains as-is: extracted text is prepended to the text part content

---

## Phase 2: Hook & Store — Handle Multimodal Messages

### Step 2.1: Update `ChatMessage` type in `chat-store.ts`

**File:** `src/stores/chat-store.ts`

- Add an optional `attachments` field to the `ChatMessage` interface:
  ```
  attachments?: Array<{
    type: 'image';
    dataUrl: string;
    mediaType: string;
    filename: string;
  }>
  ```
- Keep `content` as a string for display text — attachments are separate

### Step 2.2: Update `useChat.ts` — Accept and send attachments

**File:** `src/hooks/useChat.ts`

- Modify `sendMessage()` signature to accept an optional attachments array alongside the content string
- When posting to `/api/chat`, include both `message` (text) and `attachments` (image data) in the request body
- Update the optimistic `userMessage` object creation to include attachments for immediate UI rendering

---

## Phase 3: Server-Side — Process Multimodal Messages

### Step 3.1: Update `/api/chat/route.ts` — Accept and forward images

**File:** `src/app/api/chat/route.ts`

- Parse `attachments` from the request body alongside `message` and `taskId`
- When calling `orchestrate()`, pass attachments as a new parameter
- When saving the user message to `task_messages`, store image metadata in the existing `metadata` JSONB column:
  ```
  metadata: { attachments: [{ mediaType, filename, hasImage: true }] }
  ```
- **Do NOT store base64 image data in the database** — images are ephemeral per-request context (see Phase 5 for persistence options)

### Step 3.2: Update `orchestrator.ts` — Pass images to specialists

**File:** `src/lib/ai/orchestrator.ts`

- Accept an `attachments` parameter in `orchestrate()`
- In `classifyMessage()`: pass a text-only version of the message for classification (the classifier doesn't need to see images)
- In `callSpecialist()`: construct the user message as a multimodal content array when images are present:
  ```
  content: [
    { type: 'text', text: userMessage },
    { type: 'image', image: base64Data, mimeType: 'image/png' }
  ]
  ```
- The Vercel AI SDK's `streamText()` and `generateText()` accept this format natively when using an OpenAI-compatible provider
- For multi-agent routes: include image parts only in the first specialist call (subsequent agents work from the first agent's text description)

### Step 3.3: Verify provider compatibility

**File:** `src/lib/ai/provider.ts`

- Confirm that the `@ai-sdk/openai` provider passes image content parts through to the Moonshot API correctly (it should, since Moonshot uses OpenAI-compatible format)
- Test with a simple image + text request to verify end-to-end

---

## Phase 4: Display — Render Images in Chat

### Step 4.1: Update `ChatWindow.tsx` — Render image attachments

**File:** `src/components/chat/ChatWindow.tsx`

- In the message rendering logic, check for `message.attachments`
- For user messages with images: render `<img>` tags above/below the text content
  - Use the base64 data URL as the `src`
  - Add `max-width`, `max-height` constraints for consistent layout
  - Add click-to-expand behavior (lightbox or modal)
- Style image attachments to look like inline previews within the chat bubble

### Step 4.2: Add image display component

**New file:** `src/components/chat/ImageAttachment.tsx`

- Reusable component for rendering an image attachment
- Props: `dataUrl`, `filename`, `mediaType`
- Shows thumbnail with filename label
- Click to view full-size in a modal/overlay
- Loading state while image renders

---

## Phase 5: Persistence — Store Images for Chat History

### Step 5.1: Add Supabase Storage bucket

**File:** New migration in `supabase/migrations/`

- Create a `chat-images` storage bucket in Supabase
- Set RLS policies: users can upload/read images for their own tasks
- Max file size: 10MB

### Step 5.2: Add image upload to storage flow

**File:** New or updated API route

- After receiving an image in `/api/chat`, upload it to Supabase Storage
- Store the public/signed URL in `task_messages.metadata.attachments[].storageUrl`
- When loading chat history, resolve storage URLs for image display

### Step 5.3: Update chat history loading

**File:** `src/app/api/chat/route.ts` and `src/hooks/useChat.ts`

- When loading messages from the database, check `metadata.attachments` for stored image references
- Reconstruct the `attachments` array on `ChatMessage` objects for rendering
- When replaying history to the AI model, re-include images from storage URLs as content parts (so the AI can reference them in follow-up questions)

---

## Phase 6: Token Management & Safety

### Step 6.1: Update token estimation

**File:** `src/lib/ai/token-utils.ts` (or wherever token counting lives)

- Add image token estimation: approximately 1000 tokens per image (conservative estimate)
- Account for image tokens when checking context compaction thresholds
- Consider limiting to ~5 images in active context to avoid exceeding the 262K window

### Step 6.2: Add image count/size limits

- Max images per message: 4
- Max total images in conversation context: 8 (older images drop off)
- Max individual image size: 10MB
- Max combined image payload per request: 20MB

---

## Implementation Order

| Order | Step | Description | Estimated Complexity |
|-------|------|-------------|---------------------|
| 1 | 3.3 | Verify provider passes images to Kimi correctly | Low — quick test |
| 2 | 2.1 | Update ChatMessage type with attachments field | Low |
| 3 | 1.1 | Accept image files in ChatInput | Medium |
| 4 | 1.2 | Send structured message with image parts | Medium |
| 5 | 2.2 | Update useChat hook to send attachments | Medium |
| 6 | 3.1 | Update chat API route to accept images | Medium |
| 7 | 3.2 | Update orchestrator to pass images to specialists | Medium-High |
| 8 | 4.1 | Render images in ChatWindow | Medium |
| 9 | 4.2 | Create ImageAttachment component | Low-Medium |
| 10 | 6.1-6.2 | Token estimation and limits | Low |
| 11 | 5.1-5.3 | Supabase Storage persistence | Medium-High |

**Minimum viable feature:** Steps 1–9 (images work in live chat but aren't persisted in history)
**Full feature:** Steps 1–11 (images persist and replay in chat history)

---

## Files Changed Summary

| File | Change Type | Description |
|------|-------------|-------------|
| `src/components/chat/ChatInput.tsx` | Modify | Accept images, encode base64, send parts |
| `src/stores/chat-store.ts` | Modify | Add attachments to ChatMessage type |
| `src/hooks/useChat.ts` | Modify | Accept/send attachments in sendMessage() |
| `src/app/api/chat/route.ts` | Modify | Parse attachments, forward to orchestrator |
| `src/lib/ai/orchestrator.ts` | Modify | Include images in specialist calls |
| `src/lib/ai/types.ts` | Modify | Add attachment types |
| `src/components/chat/ChatWindow.tsx` | Modify | Render image attachments |
| `src/components/chat/ImageAttachment.tsx` | **New** | Image display/preview component |
| `src/lib/ai/token-utils.ts` | Modify | Account for image tokens |
| `supabase/migrations/XXX_chat_images.sql` | **New** | Storage bucket + policies |

---

## Risks & Considerations

1. **Base64 payload size** — A 5MB image becomes ~6.7MB as base64. Multiple images in one request could hit Vercel serverless function body limits (default 4.5MB on Hobby plan). May need to use Supabase Storage upload first, then pass URLs.

2. **Moonshot API compatibility** — While documented as OpenAI-compatible, the exact multimodal format should be verified with a test request before building the full pipeline.

3. **Token consumption** — Images consume significant tokens. A single high-res image could use 1000+ tokens. Need to monitor usage and potentially warn users about token-heavy conversations.

4. **Context compaction** — The existing context compaction system (summarizes old messages when approaching token limit) will need to handle image messages. When compacting, image descriptions should be summarized but original images dropped.

5. **Vercel function size limits** — Serverless functions have request body limits. For the Hobby plan this is 4.5MB, Pro is 6MB. Images larger than this need the storage-first approach (Phase 5) even for live chat.

6. **PDF flow unchanged** — The existing PDF text extraction flow should remain as-is. Images and PDFs are handled via different paths that converge at the message-sending step.
