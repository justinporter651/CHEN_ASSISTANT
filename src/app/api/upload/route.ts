import { getAuthUser } from "@/lib/supabase/server";

// Import the inner module directly to avoid pdf-parse's index.js "debug mode"
// bug where it tries to read a test file when module.parent is falsy (common
// in Next.js bundled environments).
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pdf = require("pdf-parse/lib/pdf-parse");

export const maxDuration = 30;

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

/**
 * POST /api/upload
 * Accepts a PDF file upload and returns the extracted text content.
 */
export async function POST(req: Request) {
  try {
    // Verify authentication
    const user = await getAuthUser();
    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.type !== "application/pdf") {
      return Response.json(
        { error: "Only PDF files are supported" },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return Response.json(
        { error: "File too large (max 20MB)" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const parsed = await pdf(buffer);

    if (!parsed.text.trim()) {
      return Response.json(
        { error: "Could not extract text from PDF. It may be image-based." },
        { status: 422 }
      );
    }

    return Response.json({
      text: parsed.text,
      pages: parsed.numpages,
      filename: file.name,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return Response.json(
      {
        error: "Failed to process PDF",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
