/**
 * Extracts action items from AI assistant responses.
 *
 * Recognises numbered lists after action-oriented headers, markdown task
 * syntax, "RECORD:" directives, "Next step:" patterns, and bullet points
 * under action headers.
 */

const ACTION_HEADERS =
  /^#+\s*.*(action items|next steps|to do|steps|you should|tasks)/i;

const NEXT_STEP_PATTERN =
  /(?:your next step is to|next step:\s*|NEXT STEP:\s*)(.+)/i;

const RECORD_PATTERN = /(?:RECORD:|What to RECORD:)\s*(.+)/i;

const MARKDOWN_TASK = /^-\s*\[\s*\]\s*(.+)/;
const NUMBERED_ITEM = /^\d+[.)]\s+(.+)/;
const BULLET_ITEM = /^[-*]\s+(.+)/;

function clean(raw: string): string {
  return raw
    .replace(/^\d+[.)]\s*/, "")
    .replace(/^[-*]\s*/, "")
    .replace(/^\[\s*\]\s*/, "")
    .replace(/\*\*/g, "")
    .trim();
}

export function extractActionItems(text: string): string[] {
  const items: string[] = [];
  const seen = new Set<string>();

  const add = (raw: string) => {
    const item = clean(raw);
    if (item.length < 10 || item.length > 200) return;
    const key = item.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    items.push(item);
  };

  const lines = text.split("\n");
  let insideActionSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Detect action-oriented headers
    if (ACTION_HEADERS.test(line)) {
      insideActionSection = true;
      continue;
    }

    // A new header that is NOT an action header ends the section
    if (/^#+\s+/.test(line) && !ACTION_HEADERS.test(line)) {
      insideActionSection = false;
    }

    // "Next step" inline pattern
    const nextMatch = line.match(NEXT_STEP_PATTERN);
    if (nextMatch) {
      add(nextMatch[1]);
      continue;
    }

    // "RECORD:" pattern
    const recordMatch = line.match(RECORD_PATTERN);
    if (recordMatch) {
      add(recordMatch[1]);
      continue;
    }

    // Markdown task syntax anywhere
    const taskMatch = line.match(MARKDOWN_TASK);
    if (taskMatch) {
      add(taskMatch[1]);
      continue;
    }

    // Inside an action section: capture numbered and bullet items
    if (insideActionSection) {
      const numMatch = line.match(NUMBERED_ITEM);
      if (numMatch) {
        add(numMatch[1]);
        continue;
      }
      const bulletMatch = line.match(BULLET_ITEM);
      if (bulletMatch) {
        add(bulletMatch[1]);
        continue;
      }
      // Blank line ends the section (unless next line is still a list item)
      if (line === "") {
        const nextLine = lines[i + 1]?.trim() ?? "";
        if (
          !NUMBERED_ITEM.test(nextLine) &&
          !BULLET_ITEM.test(nextLine)
        ) {
          insideActionSection = false;
        }
      }
    }

    if (items.length >= 8) break;
  }

  return items.slice(0, 8);
}
