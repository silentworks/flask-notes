from functools import wraps
from typing import Union
from flask import redirect, session, url_for, request
from gotrue.errors import AuthApiError, AuthRetryableError
from gotrue.types import Session, User
from app.supabase import get_profile_by_user, supabase


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
        except AuthRetryableError:
            return redirect(url_for("service_unavailable"))

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


def profile_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        incomplete_profile = False
        try:
            # get profile and profile_info
            profile = get_profile_by_user()

            if profile and profile["display_name"] is None:
                incomplete_profile = True
        except AuthApiError:
            incomplete_profile = True
        except AuthRetryableError:
            incomplete_profile = True

        if incomplete_profile:
            return redirect(url_for("account.update"))

        return f(*args, **kwargs)

    return decorated
