-- ============================================
-- Revert RLS to require authentication
-- Replaces "Anon full access" policies with
-- "Authenticated users full access" policies
-- ============================================

-- tasks table
drop policy if exists "Anon full access" on tasks;
create policy "Authenticated users full access" on tasks
  for all using (auth.uid() is not null);

-- task_messages table
drop policy if exists "Anon full access" on task_messages;
create policy "Authenticated users full access" on task_messages
  for all using (auth.uid() is not null);

-- profiles table
drop policy if exists "Anon full access" on profiles;
create policy "Authenticated users full access" on profiles
  for all using (auth.uid() is not null);

-- project_state table
drop policy if exists "Anon full access" on project_state;
create policy "Authenticated users full access" on project_state
  for all using (auth.uid() is not null);

-- assumptions table
drop policy if exists "Anon full access" on assumptions;
create policy "Authenticated users full access" on assumptions
  for all using (auth.uid() is not null);

-- checklist_runs table
drop policy if exists "Anon full access" on checklist_runs;
create policy "Authenticated users full access" on checklist_runs
  for all using (auth.uid() is not null);

-- microtasks table
drop policy if exists "Anon full access" on microtasks;
create policy "Authenticated users full access" on microtasks
  for all using (auth.uid() is not null);
