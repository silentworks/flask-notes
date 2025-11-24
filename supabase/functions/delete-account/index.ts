import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.84.0"
import { corsHeaders } from "../_shared/cors.ts";

console.log(`Function "user-self-deletion" up and running!`)

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const authHeader = req.headers.get('Authorization')!
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      {
        global: {
          headers: { Authorization: authHeader }
        }
      }
    )

    // Now we can get the session or user object
    const {
      data: { user },
    } = await supabaseClient.auth.getUser()

    // And we can run queries in the context of our authenticated user
    const { data: profile, error: userError } = await supabaseClient.from('profiles')
      .select('id')
      .match({ id: user?.id })
      .single()

    if (userError) {
      throw userError
    }

    const user_id = profile.id
    const { data: list_of_files, error: storageError } = await supabaseClient
      .storage
      .from('featured_image')
      .list(user_id)

    if (storageError) {
      throw storageError
    }

    const file_urls = []
    for (let i = 0; i < list_of_files.length; i++) {
      file_urls.push(list_of_files[i].name)
    }

    console.log("Files to delete: ", { file_urls: file_urls.map(name => `${user_id}/${name}`) })

    // Create the admin client to delete files & user with the Admin API.
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (file_urls.length > 0) {
      const { data: fi, error: fi_error } = await supabaseAdmin
        .storage
        .from('featured_image')
        .remove(file_urls.map(name => `${user_id}/${name}`))

      if (fi_error) {
        throw fi_error
      }
    }
    // throw new Error(`User & files deleted user_id: ${user_id}`)
    const { data: deletion_data, error: deletion_error } = await supabaseAdmin
      .auth.admin
      .deleteUser(user_id)

    if (deletion_error) throw deletion_error
    console.log("User & files deleted user_id: " + user_id)
    return new Response("User deleted: " + JSON.stringify(deletion_data, null, 2), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return Response.json({ error: error.message }, {
      headers: { 'Content-Type': 'application/json' },
      status: 400
    })
  }
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/delete_account' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
