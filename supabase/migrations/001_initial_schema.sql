-- ============================================
-- CHEN 4470 Team Assistant — Database Schema
-- ============================================

-- Team members (extends Supabase auth.users)
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text not null,
  avatar_url text,
  created_at timestamptz default now()
);

-- Chat messages (shared across team, single thread)
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  agent_type text,
  agents_consulted text[],
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

-- Shared project state (design parameters, decisions)
create table if not exists project_state (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  key text not null,
  value text not null,
  unit text,
  source text,
  updated_by uuid references profiles(id),
  updated_at timestamptz default now(),
  unique(category, key)
);

-- Assumptions log
create table if not exists assumptions (
  id uuid primary key default gen_random_uuid(),
  description text not null,
  justification text,
  category text,
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

-- Checklist results (from agent verification runs)
create table if not exists checklist_runs (
  id uuid primary key default gen_random_uuid(),
  agent_type text not null,
  category text not null,
  items jsonb not null,
  triggered_by uuid references profiles(id),
  created_at timestamptz default now()
);

-- Indexes
create index if not exists idx_messages_created_at on messages(created_at desc);
create index if not exists idx_project_state_category on project_state(category);
create index if not exists idx_assumptions_category on assumptions(category);
create index if not exists idx_checklist_runs_agent on checklist_runs(agent_type);

-- Enable realtime
alter publication supabase_realtime add table messages;
alter publication supabase_realtime add table project_state;

-- Row Level Security
alter table profiles enable row level security;
alter table messages enable row level security;
alter table project_state enable row level security;
alter table assumptions enable row level security;
alter table checklist_runs enable row level security;

-- Policies: all authenticated team members can read/write everything
create policy "Authenticated users full access" on profiles
  for all using (auth.uid() is not null);

create policy "Authenticated users full access" on messages
  for all using (auth.uid() is not null);

create policy "Authenticated users full access" on project_state
  for all using (auth.uid() is not null);

create policy "Authenticated users full access" on assumptions
  for all using (auth.uid() is not null);

create policy "Authenticated users full access" on checklist_runs
  for all using (auth.uid() is not null);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', new.email));
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
