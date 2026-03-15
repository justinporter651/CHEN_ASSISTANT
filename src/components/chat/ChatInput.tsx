"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { ArrowUp, Paperclip, X, FileText, Loader2 } from "lucide-react";

interface Attachment {
  file: File;
  name: string;
  extractedText?: string;
  extracting?: boolean;
  error?: string;
}

interface ChatInputProps {
  onSend: (message: string, attachment?: { filename: string; text: string }) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSend,
  disabled,
  placeholder = "Ask anything about your design project...",
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const [attachment, setAttachment] = useState<Attachment | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (disabled) return;
    if (!input.trim() && !attachment) return;

    // If there's an attachment that hasn't been extracted yet, extract first
    if (attachment && !attachment.extractedText && !attachment.error) {
      await extractPdf(attachment.file);
      return;
    }

    // If extraction failed, don't send
    if (attachment?.error) return;

    const attachmentData = attachment?.extractedText
      ? { filename: attachment.name, text: attachment.extractedText }
      : undefined;

    onSend(input.trim(), attachmentData);
    setInput("");
    setAttachment(null);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const extractPdf = async (file: File) => {
    setAttachment((prev) =>
      prev ? { ...prev, extracting: true, error: undefined } : null
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
        setAttachment((prev) =>
          prev
            ? { ...prev, extracting: false, error: result.error }
            : null
        );
        return;
      }

      setAttachment((prev) =>
        prev
          ? {
              ...prev,
              extracting: false,
              extractedText: result.text,
            }
          : null
      );
    } catch {
      setAttachment((prev) =>
        prev
          ? { ...prev, extracting: false, error: "Failed to process PDF" }
          : null
      );
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset file input so the same file can be re-selected
    e.target.value = "";

    if (file.type !== "application/pdf") {
      setAttachment({
        file,
        name: file.name,
        error: "Only PDF files are supported",
      });
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      setAttachment({
        file,
        name: file.name,
        error: "File too large (max 20MB)",
      });
      return;
    }

    setAttachment({ file, name: file.name });
    await extractPdf(file);
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

  const hasContent = input.trim().length > 0 || (attachment?.extractedText != null);

  return (
    <div className="border-t border-border/50 bg-background px-4 py-3">
      <div className="max-w-4xl mx-auto">
        {/* Attachment preview */}
        {attachment && (
          <div
            className={`flex items-center gap-2 mb-2 px-3 py-2 rounded-lg border text-xs ${
              attachment.error
                ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30"
                : attachment.extractedText
                  ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30"
                  : "border-border bg-muted/30"
            }`}
          >
            {attachment.extracting ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground shrink-0" />
            ) : (
              <FileText
                className={`h-3.5 w-3.5 shrink-0 ${
                  attachment.error
                    ? "text-red-500"
                    : attachment.extractedText
                      ? "text-green-500"
                      : "text-muted-foreground"
                }`}
              />
            )}
            <span className="truncate flex-1">
              {attachment.name}
              {attachment.extracting && (
                <span className="text-muted-foreground ml-1">
                  — Extracting text...
                </span>
              )}
              {attachment.extractedText && (
                <span className="text-green-600 dark:text-green-400 ml-1">
                  — Ready
                </span>
              )}
              {attachment.error && (
                <span className="text-red-500 ml-1">
                  — {attachment.error}
                </span>
              )}
            </span>
            <button
              onClick={() => setAttachment(null)}
              className="shrink-0 p-0.5 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Remove attachment"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}

        <div className="relative flex items-end rounded-xl border border-border bg-muted/30 focus-within:border-foreground/20 focus-within:bg-background transition-colors">
          {/* File upload button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={disabled || !!attachment?.extracting}
            className="shrink-0 m-2 mb-2.5 p-1 rounded-md text-muted-foreground/60 hover:text-foreground hover:bg-muted transition-colors disabled:opacity-30"
            aria-label="Attach PDF"
            title="Attach PDF"
          >
            <Paperclip className="h-4 w-4" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
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
            disabled={!hasContent || disabled || !!attachment?.extracting}
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
