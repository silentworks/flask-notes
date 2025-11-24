drop policy "allow insert for own profile only" on public.profiles;

create policy "allow insert for own profile only" on public.profiles
for insert
to authenticated
with check ((select auth.uid()) = id);

drop policy "allow update for own profile only" on public.profiles;

create policy "allow update for own profile only" on public.profiles 
as permissive for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

drop policy "allow delete for own profile only" on public.profiles;

create policy "allow delete for own profile only" on public.profiles 
as permissive for delete
to authenticated
using ((select auth.uid()) = id);

drop policy "allow select for users own profile info only" on public.profiles_info;

create policy "allow select for users own profile info only" on public.profiles_info 
as permissive for select 
to authenticated
using ((select auth.uid()) = profile_id);

drop policy "allow insert for own profile info only" on public.profiles_info; 

create policy "allow insert for own profile info only" on public.profiles_info 
as permissive for insert
to authenticated
with check ((select auth.uid()) = profile_id);

drop policy "allow update for own profile info only" on public.profiles_info;

create policy "allow update for own profile info only" on public.profiles_info 
as permissive for update
to authenticated
using ((select auth.uid()) = profile_id)
with check ((select auth.uid()) = profile_id);

drop policy "allow delete for own profile info only" on public.profiles_info; 

create policy "allow delete for own profile info only" on public.profiles_info 
as permissive for delete
to authenticated
using ((select auth.uid()) = profile_id);

drop policy "Anyone can select `public` notes" on public.notes;

create policy "Anyone can select `public` notes" on public.notes
as permissive for select
to public
using (is_public or (author_id = (select auth.uid())));

drop policy "Authenticated users can insert their notes" on public.notes;

create policy "Authenticated users can insert their notes" on public.notes
as permissive for insert
to authenticated
with check ((author_id = (select auth.uid())));

drop policy "allow update for own note only" on public.notes;

create policy "allow update for own note only" on public.notes 
as permissive for update
to authenticated
using ((select auth.uid()) = author_id)
with check ((select auth.uid()) = author_id);

drop policy "allow delete for own note only" on public.notes;

create policy "allow delete for own note only" on public.notes 
as permissive for delete
to authenticated
using ((select auth.uid()) = author_id);

