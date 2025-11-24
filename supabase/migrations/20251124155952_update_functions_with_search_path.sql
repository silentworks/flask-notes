create or replace function public.slugify(
  v text
) returns text
  language plpgsql
  set search_path = ''
  strict immutable as
$function$
    begin
        -- 1. trim trailing and leading whitespaces from text
        -- 2. remove accents (diacritic signs) from a given text
        -- 3. lowercase unaccented text
        -- 4. replace non-alphanumeric (excluding hyphen, underscore) with a hyphen
        -- 5. trim leading and trailing hyphens
        return trim(both '-' from regexp_replace(lower(extensions.unaccent(trim(v))), '[^a-z0-9_-]+', '-', 'gi'));
    end;
$function$;


create or replace function public.handle_new_profile()
  returns trigger
  set search_path = '' 
as $$
begin
    -- create a entry in profiles table
    insert into public.profiles (id)
    values (new.id);

    -- create a entry in profiles_info table
    insert into public.profiles_info (profile_id)
    values (new.id);
    return new;
end;
$$ language plpgsql security definer;

create or replace function update_profile(display_name text, bio text, first_name text, last_name text, dob date, profile_location text)
returns table(profile_display_name text)
language plpgsql
set search_path = ''
as $$
begin
    update public.profiles 
    set display_name = $1, bio = $2
    where id = auth.uid();

    update public.profiles_info 
    set first_name = $3, 
        last_name = $4,
        dob = $5,
        profile_location = $6
    where profile_id = auth.uid();
    
    return query
        select p.display_name as d_name from public.profiles p where p.id = auth.uid();
end; $$;

create or replace function public.shortkey()
returns text
set search_path = '' 
as $$
declare
  gkey text;
  key public.shortkey;
  qry text;
  found text;
  table_name text := 'shortkeys';
begin
  -- generate the first part of a query as a string with safely
  -- escaped table name, using || to concat the parts
  qry := 'select id from public.' || quote_ident(table_name) || ' where id=';

  loop
    -- 8 bytes gives a collision p = .5 after 5.1 x 10^9 values
    gkey := encode(extensions.gen_random_bytes(8), 'base64');
    gkey := replace(gkey, '/', '_');  -- url safe replacement
    gkey := replace(gkey, '+', '-');  -- url safe replacement
    key := rtrim(gkey, '=');          -- cut off padding

    -- concat the generated key (safely quoted) with the generated query
    -- and run it.
    -- select id from "test" where id='blahblah' into found
    -- now "found" will be the duplicated id or null.
    execute qry || quote_literal(key) into found;

    -- check to see if found is null.
    -- if we checked to see if found = null it would always be false
    -- because (null = null) is always false.
    if found is null then
      -- if we didn't find a collision then leave the loop.
      execute format('insert into public.%s (id) values(%s);', quote_ident(table_name), quote_literal(key));
      exit;
    end if;
  end loop;

  -- the record returned here is what will actually be inserted,
  -- or what the next trigger will get if there is one.
  return key;
end
$$ language 'plpgsql' security definer;


create or replace function public.slugify_with_shortkey(
  v text
) returns text
  language plpgsql
  set search_path = ''
  strict immutable as
$function$
    begin
        return concat(public.slugify(v), '-', public.shortkey());
    end;
$function$;

