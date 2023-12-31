# Flask Notes

This is a Flask/Supabase project showing how to create a user profile along with how to store sensitive data that only the user of that data should be able to view using a one-to-one relationship and row level security (RLS). This project also demonstrates how to use a Postgres function to update two tables (which is done in a transaction so that if one fails there should be a rollback) using a `.rpc` function call. We also demonstrate how to use a generated column for the slug inside the database by making use of a Postgres function we create. Storage is used to store the featured image for the notes in the app.

This project makes use of:

- [Supabase Python Library](https://supabase.com/docs/reference/python/introduction)
- [Poetry](https://python-poetry.org/)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
- [DaisyUI](https://daisyui.com/)
- [tailwindcss](https://tailwindcss.com/)
- [pgTAP](https://pgtap.org/) Postgres unit testing
- [Tailwind Profile from Codepen](https://codepen.io/ScottWindon/pen/XWdbPLm)
- [heroicons](https://heroicons.com/)

## Getting started

You can get started with this locally by using the Supabase CLI. Make sure you have the CLI installed before continuing. You can find installation instructions [here](https://supabase.com/docs/guides/cli).

Create a copy of this project using the commands below:

```bash
npx degit silentworks/flask-notes project-name
cd project-name
npm install # or pnpm install or yarn install
poetry install
```

Run the command below to start your local Supabase docker instance

```bash
npx supabase start
```

Copy `.env.example` file and rename it `.env`. Now copy the credentials you were given when you ran `npx supabase start` into this file.

> Be sure to take a peek at the `.sql` files inside the `supabase/migrations` and `supabase/tests` directory. You can run the supabase tests by calling `npx supabase test db`.

Now we can start the project dev server:

```bash
poetry run flask run --debug
```

We can now navigate to the `/auth/signup` url to create an account.
