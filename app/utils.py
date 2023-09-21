import os
from functools import wraps
from typing import Union
from flask import redirect, session, url_for, request
from supabase.client import create_client, Client
from supabase.lib.client_options import ClientOptions
from app.flask_storage import FlaskSessionStorage
from gotrue.errors import AuthApiError
from gotrue.types import Session

url = os.environ.get("SUPABASE_URL", "")
key = os.environ.get("SUPABASE_KEY", "")

supabase: Client = create_client(
    url,
    key,
    options=ClientOptions(
        storage=FlaskSessionStorage(),
    ),
)


def session_context_processor():
    try:
        sess = supabase.auth.get_session()
        return dict(session=sess)
    except AuthApiError:
        return dict(session=None)


def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        sess: Union[Session, None] = None
        try:
            sess = supabase.auth.get_session()
        except AuthApiError as exception:
            err = exception.to_dict()
            if err.get("message") == "Invalid Refresh Token: Already Used":
                sess = None

        if sess is None:
            return redirect(url_for("auth.signin", next=request.endpoint))

        return f(*args, **kwargs)

    return decorated


def password_update_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if "password_update_required" in session:
            return redirect(url_for("account.update_password"))

        return f(*args, **kwargs)

    return decorated
