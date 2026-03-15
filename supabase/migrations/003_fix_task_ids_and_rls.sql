-- ============================================
-- Fix task IDs to match task-graph.ts and allow
-- unauthenticated access (no auth in this app)
-- ============================================

-- 1. Insert all task IDs used by task-graph.ts
--    (ON CONFLICT DO NOTHING so existing matching rows are preserved)
insert into tasks (id) values
  ('thermo-method'),
  ('thermo-validate'),
  ('background-research'),
  ('sds-summaries'),
  ('reactor-design'),
  ('reactor-optimization'),
  ('feed-compression'),
  ('flash-separation'),
  ('separation-comparison'),
  ('column-design'),
  ('hx-sizing-utilities'),
  ('heat-integration'),
  ('pipe-class-materials'),
  ('simulation-verification'),
  ('equipment-utility-costing'),
  ('npv-cash-flow'),
  ('sensitivity-breakeven'),
  ('process-safety-table'),
  ('hazop-reactor'),
  ('hazop-column'),
  ('safety-review'),
  ('report-intro'),
  ('pfd-stream-tables'),
  ('report-specs-tables'),
  ('report-economics'),
  ('report-discussion-conclusions'),
  ('report-abstract'),
  ('appendix-aspen'),
  ('appendix-background-assumptions'),
  ('appendix-safety'),
  ('appendix-waste-societal'),
  ('appendix-thermo'),
  ('oral-slides'),
  ('poster-design'),
  ('qa-preparation')
on conflict (id) do nothing;

-- 2. Replace RLS policies to allow unauthenticated access
--    (this app has no auth — all users are anonymous)

-- tasks table
drop policy if exists "Authenticated users full access" on tasks;
drop policy if exists "Anon full access" on tasks;
create policy "Anon full access" on tasks
  for all using (true) with check (true);

-- task_messages table
drop policy if exists "Authenticated users full access" on task_messages;
drop policy if exists "Anon full access" on task_messages;
create policy "Anon full access" on task_messages
  for all using (true) with check (true);

-- profiles table (from migration 001)
drop policy if exists "Authenticated users full access" on profiles;
drop policy if exists "Anon full access" on profiles;
create policy "Anon full access" on profiles
  for all using (true) with check (true);

-- project_state table
drop policy if exists "Authenticated users full access" on project_state;
drop policy if exists "Anon full access" on project_state;
create policy "Anon full access" on project_state
  for all using (true) with check (true);

-- assumptions table
drop policy if exists "Authenticated users full access" on assumptions;
drop policy if exists "Anon full access" on assumptions;
create policy "Anon full access" on assumptions
  for all using (true) with check (true);

-- checklist_runs table
drop policy if exists "Authenticated users full access" on checklist_runs;
drop policy if exists "Anon full access" on checklist_runs;
create policy "Anon full access" on checklist_runs
  for all using (true) with check (true);

-- 3. Microtasks table (persistent action items per task)
create table if not exists microtasks (
  id uuid primary key default gen_random_uuid(),
  task_id text not null references tasks(id) on delete cascade,
  text text not null,
  completed boolean default false,
  source text not null default 'user' check (source in ('ai', 'user')),
  created_at timestamptz default now()
);

create index if not exists idx_microtasks_task_id on microtasks(task_id);

alter table microtasks enable row level security;
create policy "Anon full access" on microtasks
  for all using (true) with check (true);

alter publication supabase_realtime add table microtasks;
