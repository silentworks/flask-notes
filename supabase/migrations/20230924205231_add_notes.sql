create extension if not exists moddatetime schema extensions;

-- create public profile table that anyone can view
create table public.notes (
    id uuid primary key default gen_random_uuid(),
    author_id uuid references public.profiles on delete cascade,
    title text,
    slug text generated always as (slugify_with_shortkey(title)) stored,
    content text,
    featured_image text,
    is_public boolean default false not null,
    created_at timestamptz default now() not null,
    updated_at timestamptz
);

alter table public.notes enable row level security;

create policy "Anyone can select `public` notes" on public.notes
as permissive for select
to public
using (is_public or (author_id = auth.uid()));

create policy "Authenticated users can insert their notes" on public.notes
as permissive for insert
to authenticated
with check ((author_id = auth.uid()));

create policy "allow update for own note only" on public.notes 
as permissive for update
to authenticated
using (auth.uid() = author_id)
with check (auth.uid() = author_id);

create policy "allow delete for own note only" on public.notes 
as permissive for delete
to authenticated
using (auth.uid() = author_id);

-- Set up storage for featured_images
insert into storage.buckets (id, name, public)
  values ('featured_image', 'featured_image', true);

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.
create policy "Featured images are publicly accessible." on storage.objects
for select 
using (bucket_id = 'featured_image');

create policy "Anyone can upload an featured_image." on storage.objects
for insert
to authenticated
with check (bucket_id = 'featured_image');

create policy "A user can update their own featured_image." on storage.objects
for update 
using (auth.uid() = owner) 
with check (bucket_id = 'featured_image');

create policy "A user can delete their own featured_image." on storage.objects 
for delete 
to authenticated 
using (bucket_id = 'featured_image' and (storage.foldername(name))[1] = auth.uid()::text);

