-- ============================================
-- CHEN 4470 Team Assistant — Task System
-- Replaces global chat with per-task threads
-- ============================================

-- Track task completion (status is COMPUTED, not stored)
create table if not exists tasks (
  id text primary key,
  completed_at timestamptz,
  completed_by uuid references profiles(id),
  notes text
);

-- Per-task chat messages
create table if not exists task_messages (
  id uuid primary key default gen_random_uuid(),
  task_id text not null references tasks(id),
  user_id uuid references profiles(id),
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  agent_type text,
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

-- Drop old global messages table
drop table if exists messages;

-- Indexes
create index if not exists idx_task_messages_task_id on task_messages(task_id, created_at desc);
create index if not exists idx_tasks_completed on tasks(completed_at) where completed_at is not null;

-- Realtime
alter publication supabase_realtime add table tasks;
alter publication supabase_realtime add table task_messages;

-- RLS
alter table tasks enable row level security;
alter table task_messages enable row level security;

create policy "Authenticated users full access" on tasks
  for all using (auth.uid() is not null);

create policy "Authenticated users full access" on task_messages
  for all using (auth.uid() is not null);

-- Seed all 55 tasks
insert into tasks (id) values
  ('thermo-method'), ('thermo-validate'), ('background-research'), ('sds-summaries'),
  ('reactor-alternatives'), ('reactor-optimization'), ('reactor-pressure-drop'), ('reactor-max-conditions'), ('reactor-quench'),
  ('separation-scheme'), ('product-column-design'), ('product-column-optimization'), ('product-column-sizing'), ('product-column-pressure-drop'), ('recycle-design'),
  ('hx-sizing'), ('heat-integration'), ('utility-specification'),
  ('pump-compressor-sizing'), ('vessel-sizing'), ('pipe-class'), ('materials-of-construction'), ('min-max-design-conditions'),
  ('simulation-convergence'), ('mass-balance-check'), ('energy-balance-check'),
  ('equipment-costing'), ('utility-costing'), ('cash-flow-table'), ('npv-calculation'), ('monte-carlo'), ('breakeven-co2'), ('supplementary-measures'), ('cash-flow-diagrams'),
  ('process-safety-table'), ('hazop-reactor'), ('hazop-product-column'), ('safety-review'),
  ('introduction'), ('pfd'), ('process-description'), ('stream-tables'), ('equipment-spec-table'), ('utility-spec-table'), ('pipe-class-table'), ('npv-results-section'), ('discussion'), ('conclusions'), ('abstract'),
  ('appendix-1-aspen'), ('appendix-2-background'), ('appendix-3-assumptions'), ('appendix-4-safety'), ('appendix-5-waste'), ('appendix-6-societal'), ('appendix-7-thermo'),
  ('oral-slides'), ('poster-design'), ('qa-preparation')
on conflict (id) do nothing;
