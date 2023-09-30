import os
from flask import g
from werkzeug.local import LocalProxy
from supabase.client import create_client, Client
from supabase.lib.client_options import ClientOptions
from app.flask_storage import FlaskSessionStorage
from gotrue.errors import AuthApiError, AuthRetryableError
from gotrue.types import User
from typing import Union

url = os.environ.get("SUPABASE_URL", "")
key = os.environ.get("SUPABASE_KEY", "")
app_name = os.environ.get("APP_NAME", "Supabase Flask Demo")


def get_supabase() -> Client:
    if "supabase" not in g:
        g.supabase: Client = create_client(
            url, key, options=ClientOptions(storage=FlaskSessionStorage())
        )
    return g.supabase


supabase: Client = LocalProxy(get_supabase)


def session_context_processor():
    try:
        sess = supabase.auth.get_session()
        return dict(session=sess, app_name=app_name)
    except (AuthApiError, AuthRetryableError):
        return dict(session=None, app_name=app_name)


def get_profile(user_or_slug: Union[User, str]):
    # get profile and profile_info
    profile = {}
    profile_info = {}
    try:
        query = supabase.table("profiles")

        if hasattr(user_or_slug, "id"):
            query = query.select("*, profiles_info(*)").match({"id": user_or_slug.id})
        else:
            query = query.select("*, profiles_info(first_name, last_name)").match(
                {"slug": user_or_slug}
            )

        r = query.single().execute()
        profile = r.data
        if r.data["profiles_info"]:
            profile_info = r.data["profiles_info"]
    except Exception as err:
        None

    return {**profile, **profile_info}


def get_profile_by_user():
    sess = supabase.auth.get_session()
    user = sess.user
    return get_profile(user)


def get_profile_by_slug(slug: str):
    return get_profile(slug)


def get_notes(user_or_user_id: Union[User, str], public_only: bool = False):
    # get profile and profile_info
    notes = {}
    try:
        query = (
            supabase.table("notes").select("*").order(column="created_at", desc=True)
        )

        if hasattr(user_or_user_id, "id"):
            query = query.match({"author_id": user_or_user_id.id})
        else:
            query = query.match({"author_id": user_or_user_id})

        if public_only:
            query = query.match({"is_public": public_only})

        r = query.execute()
        notes = r.data
    except Exception as err:
        None

    return notes


def get_notes_by_user():
    sess = supabase.auth.get_session()
    user = sess.user
    return get_notes(user)


def get_all_notes_by_user_id(user_id: str):
    return get_notes(user_id, True)


def get_note(user_or_slug: Union[User, str], id: str):
    note = {}
    try:
        r = (
            supabase.table("notes")
            .select("*")
            .match({"author_id": user_or_slug.id, "id": id})
            .single()
            .execute()
        )

        note = r.data
    except Exception as err:
        None

    return note


def get_note_by_user_and_id(id: str):
    sess = supabase.auth.get_session()
    user = sess.user
    return get_note(user, id)


def get_note_by_slug(slug: str):
    note = {}
    try:
        r = supabase.table("notes").select("*").match({"slug": slug}).single().execute()

        note = r.data
    except Exception as err:
        None

    return note
