"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface ImageAttachmentDisplayProps {
  dataUrl: string;
  filename: string;
  mediaType: string;
}

export function ImageAttachmentDisplay({
  dataUrl,
  filename,
}: ImageAttachmentDisplayProps) {
  const [expanded, setExpanded] = useState(false);

  if (!dataUrl) return null;

  return (
    <>
      <button
        onClick={() => setExpanded(true)}
        className="group relative rounded-lg overflow-hidden border border-border/50 hover:border-foreground/20 transition-colors"
      >
        <img
          src={dataUrl}
          alt={filename}
          className="max-w-[200px] max-h-[150px] object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] px-1.5 py-0.5 truncate opacity-0 group-hover:opacity-100 transition-opacity">
          {filename}
        </span>
      </button>

      {/* Fullscreen overlay */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        >
          <button
            onClick={() => setExpanded(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={dataUrl}
            alt={filename}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 text-white/70 text-sm">{filename}</p>
        </div>
      )}
    </>
  );
}
