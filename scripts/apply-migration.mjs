#!/usr/bin/env node
/**
 * Apply database migration 002_task_system.sql to Supabase.
 *
 * Usage:
 *   node scripts/apply-migration.mjs
 *
 * Requires: SUPABASE_DB_URL in .env.local (or pass as env var)
 * Format:   postgresql://postgres.[ref]:[password]@aws-0-us-east-1.pooler.supabase.com:5432/postgres
 *
 * If you don't have SUPABASE_DB_URL, you can paste the migration SQL
 * into the Supabase Dashboard SQL Editor instead:
 *   https://supabase.com/dashboard/project/pszcapplkupidergxxkf/sql/new
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local
const envPath = join(__dirname, "..", ".env.local");
try {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const match = line.match(/^([A-Z_]+)=(.+)$/);
    if (match) process.env[match[1]] = match[2];
  }
} catch {
  // .env.local not found, rely on environment
}

const dbUrl = process.env.SUPABASE_DB_URL;

if (!dbUrl) {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║  No SUPABASE_DB_URL found.                                     ║
║                                                                ║
║  To apply the migration automatically, add to .env.local:      ║
║  SUPABASE_DB_URL=postgresql://postgres.[ref]:[pw]@...          ║
║                                                                ║
║  OR paste the SQL below into the Supabase SQL Editor:          ║
║  https://supabase.com/dashboard/project/pszcapplkupidergxxkf/sql/new ║
╚══════════════════════════════════════════════════════════════════╝
`);

  const sqlPath = join(
    __dirname,
    "..",
    "supabase",
    "migrations",
    "002_task_system.sql"
  );
  const sql = readFileSync(sqlPath, "utf-8");
  console.log("── Migration SQL ──────────────────────────────────");
  console.log(sql);
  console.log("───────────────────────────────────────────────────");
  process.exit(1);
}

// If we have the DB URL, use pg to apply the migration
async function applyMigration() {
  try {
    const { default: pg } = await import("pg");
    const client = new pg.Client({ connectionString: dbUrl, ssl: { rejectUnauthorized: false } });
    await client.connect();

    const sqlPath = join(
      __dirname,
      "..",
      "supabase",
      "migrations",
      "002_task_system.sql"
    );
    const sql = readFileSync(sqlPath, "utf-8");

    console.log("Applying migration 002_task_system.sql...");
    await client.query(sql);
    console.log("✅ Migration applied successfully!");

    // Verify
    const { rows } = await client.query(
      "SELECT count(*) as count FROM tasks"
    );
    console.log(`   ${rows[0].count} tasks seeded.`);

    await client.end();
  } catch (err) {
    console.error("❌ Migration failed:", err.message);
    console.log(
      "\nTip: You can paste the SQL into the Supabase Dashboard SQL Editor instead."
    );
    process.exit(1);
  }
}

applyMigration();
