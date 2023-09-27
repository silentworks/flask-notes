create extension if not exists moddatetime schema extensions;
create extension if not exists pgcrypto schema extensions;

-- by Nathan Fritz (andyet.com); turbo (github.com/turbo)
-- can't query pg_type because type might exist in other schemas
-- no if not exists for create domain, need to catch exception
do $$ begin
  create domain shortkey as varchar(11);
exception
  when duplicate_object then null;
end $$;

-- create public shortkeys table that anyone can view
create table public.shortkeys (
    id shortkey primary key,
    created_at timestamptz default now() not null
);

-- enable RLS (shortkeys table)
alter table public.shortkeys enable row level security;

create or replace function public.shortkey()
returns text as $$
declare
  gkey text;
  key shortkey;
  qry text;
  found text;
  table_name text := 'shortkeys';
begin
  -- generate the first part of a query as a string with safely
  -- escaped table name, using || to concat the parts
  qry := 'select id from ' || quote_ident(table_name) || ' where id=';

  loop
    -- 8 bytes gives a collision p = .5 after 5.1 x 10^9 values
    gkey := encode(gen_random_bytes(8), 'base64');
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
      execute format('insert into %s (id) values(%s);', quote_ident(table_name), quote_literal(key));
      exit;
    end if;
  end loop;

  -- the record returned here is what will actually be inserted,
  -- or what the next trigger will get if there is one.
  return key;
end
$$ language 'plpgsql' security definer;

-- create the function in the public schema
create or replace function public.slugify_with_shortkey(
  v text
) returns text
  language plpgsql
  strict immutable as
$function$
    begin
        return concat(slugify(v), '-', shortkey());
    end;
$function$;

