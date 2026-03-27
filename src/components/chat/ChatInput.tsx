"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { ArrowUp, Paperclip, X, FileText, Loader2, ImageIcon } from "lucide-react";

const IMAGE_MIME_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_IMAGES_PER_MESSAGE = 4;

interface PdfAttachment {
  kind: "pdf";
  file: File;
  name: string;
  extractedText?: string;
  extracting?: boolean;
  error?: string;
}

interface ImageAttachmentLocal {
  kind: "image";
  file: File;
  name: string;
  dataUrl: string;
  mediaType: string;
  error?: string;
}

type Attachment = PdfAttachment | ImageAttachmentLocal;

export interface ImagePayload {
  type: "image";
  dataUrl: string;
  mediaType: string;
  filename: string;
}

interface ChatInputProps {
  onSend: (
    message: string,
    pdfAttachment?: { filename: string; text: string },
    imageAttachments?: ImagePayload[]
  ) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSend,
  disabled,
  placeholder = "Ask anything about your design project...",
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const pdfAttachment = attachments.find((a): a is PdfAttachment => a.kind === "pdf");
  const imageAttachments = attachments.filter((a): a is ImageAttachmentLocal => a.kind === "image");

  const isExtracting = pdfAttachment?.extracting;

  const handleSend = async () => {
    if (disabled) return;
    if (!input.trim() && attachments.length === 0) return;

    // If there's a PDF that hasn't been extracted yet, extract first
    if (pdfAttachment && !pdfAttachment.extractedText && !pdfAttachment.error) {
      await extractPdf(pdfAttachment.file);
      return;
    }

    // If PDF extraction failed, don't send
    if (pdfAttachment?.error) return;

    // Check for image errors
    if (imageAttachments.some((a) => a.error)) return;

    const pdfData = pdfAttachment?.extractedText
      ? { filename: pdfAttachment.name, text: pdfAttachment.extractedText }
      : undefined;

    const imageData: ImagePayload[] = imageAttachments.map((a) => ({
      type: "image",
      dataUrl: a.dataUrl,
      mediaType: a.mediaType,
      filename: a.name,
    }));

    onSend(input.trim(), pdfData, imageData.length > 0 ? imageData : undefined);
    setInput("");
    setAttachments([]);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const extractPdf = async (file: File) => {
    setAttachments((prev) =>
      prev.map((a) =>
        a.kind === "pdf" ? { ...a, extracting: true, error: undefined } : a
      )
    );

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setAttachments((prev) =>
          prev.map((a) =>
            a.kind === "pdf" ? { ...a, extracting: false, error: result.error } : a
          )
        );
        return;
      }

      setAttachments((prev) =>
        prev.map((a) =>
          a.kind === "pdf"
            ? { ...a, extracting: false, extractedText: result.text }
            : a
        )
      );
    } catch {
      setAttachments((prev) =>
        prev.map((a) =>
          a.kind === "pdf"
            ? { ...a, extracting: false, error: "Failed to process PDF" }
            : a
        )
      );
    }
  };

  const readImageAsDataUrl = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read image"));
      reader.readAsDataURL(file);
    });

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset file input so the same file can be re-selected
    e.target.value = "";

    // PDF handling
    if (file.type === "application/pdf") {
      if (file.size > 20 * 1024 * 1024) {
        setAttachments((prev) => [
          ...prev.filter((a) => a.kind !== "pdf"),
          { kind: "pdf", file, name: file.name, error: "File too large (max 20MB)" },
        ]);
        return;
      }
      // Remove any existing PDF, add new one
      setAttachments((prev) => [
        ...prev.filter((a) => a.kind !== "pdf"),
        { kind: "pdf", file, name: file.name },
      ]);
      await extractPdf(file);
      return;
    }

    // Image handling
    if (IMAGE_MIME_TYPES.includes(file.type)) {
      if (imageAttachments.length >= MAX_IMAGES_PER_MESSAGE) {
        return; // silently ignore if at limit
      }
      if (file.size > MAX_IMAGE_SIZE) {
        setAttachments((prev) => [
          ...prev,
          { kind: "image", file, name: file.name, dataUrl: "", mediaType: file.type, error: "Image too large (max 10MB)" },
        ]);
        return;
      }

      try {
        const dataUrl = await readImageAsDataUrl(file);
        setAttachments((prev) => [
          ...prev,
          { kind: "image", file, name: file.name, dataUrl, mediaType: file.type },
        ]);
      } catch {
        setAttachments((prev) => [
          ...prev,
          { kind: "image", file, name: file.name, dataUrl: "", mediaType: file.type, error: "Failed to read image" },
        ]);
      }
      return;
    }

    // Unsupported file type
    setAttachments((prev) => [
      ...prev,
      { kind: "pdf", file, name: file.name, error: "Only PDF and image files are supported" } as PdfAttachment,
    ]);
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  };

  const hasContent =
    input.trim().length > 0 ||
    pdfAttachment?.extractedText != null ||
    imageAttachments.some((a) => !a.error);

  return (
    <div className="border-t border-border/50 bg-background px-4 py-3">
      <div className="max-w-4xl mx-auto">
        {/* Attachment previews */}
        {attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {attachments.map((att, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs ${
                  att.error
                    ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30"
                    : att.kind === "pdf" && att.extractedText
                      ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30"
                      : att.kind === "image" && att.dataUrl
                        ? "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30"
                        : "border-border bg-muted/30"
                }`}
              >
                {att.kind === "pdf" && att.extracting ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground shrink-0" />
                ) : att.kind === "image" ? (
                  att.dataUrl && !att.error ? (
                    <img
                      src={att.dataUrl}
                      alt={att.name}
                      className="h-8 w-8 rounded object-cover shrink-0"
                    />
                  ) : (
                    <ImageIcon
                      className={`h-3.5 w-3.5 shrink-0 ${att.error ? "text-red-500" : "text-muted-foreground"}`}
                    />
                  )
                ) : (
                  <FileText
                    className={`h-3.5 w-3.5 shrink-0 ${
                      att.error
                        ? "text-red-500"
                        : att.kind === "pdf" && att.extractedText
                          ? "text-green-500"
                          : "text-muted-foreground"
                    }`}
                  />
                )}
                <span className="truncate max-w-[150px]">
                  {att.name}
                  {att.kind === "pdf" && att.extracting && (
                    <span className="text-muted-foreground ml-1">— Extracting...</span>
                  )}
                  {att.kind === "pdf" && att.extractedText && (
                    <span className="text-green-600 dark:text-green-400 ml-1">— Ready</span>
                  )}
                  {att.kind === "image" && !att.error && att.dataUrl && (
                    <span className="text-blue-600 dark:text-blue-400 ml-1">— Ready</span>
                  )}
                  {att.error && (
                    <span className="text-red-500 ml-1">— {att.error}</span>
                  )}
                </span>
                <button
                  onClick={() => removeAttachment(i)}
                  className="shrink-0 p-0.5 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                  aria-label="Remove attachment"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="relative flex items-end rounded-xl border border-border bg-muted/30 focus-within:border-foreground/20 focus-within:bg-background transition-colors">
          {/* File upload button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={disabled || !!isExtracting}
            className="shrink-0 m-2 mb-2.5 p-1 rounded-md text-muted-foreground/60 hover:text-foreground hover:bg-muted transition-colors disabled:opacity-30"
            aria-label="Attach file"
            title="Attach PDF or image"
          >
            <Paperclip className="h-4 w-4" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf,image/png,image/jpeg,image/webp,image/gif"
            onChange={handleFileSelect}
            className="hidden"
          />

          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              handleInput();
            }}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className="flex-1 resize-none bg-transparent px-2 py-3 text-sm leading-relaxed focus:outline-none disabled:opacity-50 placeholder:text-muted-foreground/50"
          />
          <button
            onClick={handleSend}
            disabled={!hasContent || disabled || !!isExtracting}
            className="shrink-0 m-2 h-7 w-7 rounded-lg bg-foreground text-background flex items-center justify-center disabled:opacity-20 hover:opacity-80 transition-opacity"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
        <p className="text-[10px] text-center text-muted-foreground/50 mt-1.5">
          AI responses are guided — always verify critical design decisions.
        </p>
      </div>
    </div>
  );
}
