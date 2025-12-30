-- =========================================================
-- Supabase schema for TIKOONZ auditions + admin mapping
-- Run this in Supabase SQL editor.
-- =========================================================

create table if not exists public.auditions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  field text not null check (field in ('DJ','Singer','Model','Actor')),
  instagram text not null,
  facebook text not null,
  youtube text not null,
  contact_email text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.auditions enable row level security;
alter table public.admin_users enable row level security;

drop policy if exists "Anyone can insert auditions" on public.auditions;
create policy "Anyone can insert auditions"
on public.auditions
for insert
to anon, authenticated
with check (true);

drop policy if exists "Admins can select auditions" on public.auditions;
create policy "Admins can select auditions"
on public.auditions
for select
to authenticated
using (
  exists (
    select 1 from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "Admins can delete auditions" on public.auditions;
create policy "Admins can delete auditions"
on public.auditions
for delete
to authenticated
using (
  exists (
    select 1 from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "Admins can read admin_users" on public.admin_users;
create policy "Admins can read admin_users"
on public.admin_users
for select
to authenticated
using (user_id = auth.uid());

-- After creating an admin user in Auth -> Users, add them here:
-- insert into public.admin_users (user_id) values ('ADMIN_USER_UUID');
