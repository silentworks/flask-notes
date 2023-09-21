from flask import Blueprint, render_template, flash, session
from gotrue.errors import AuthApiError

from app.forms import UpdateEmailForm, UpdatePasswordForm
from app.utils import (
    login_required,
    password_update_required,
    session_context_processor,
    supabase,
)

account = Blueprint("account", __name__, url_prefix="/account")
account.context_processor(session_context_processor)


@account.route("/")
@login_required
@password_update_required
def home():
    return render_template("account/index.html")


@account.route("/update-email", methods=["GET", "POST"])
@login_required
@password_update_required
def update_email():
    form = UpdateEmailForm()
    if form.validate_on_submit():
        email = form.email.data

        try:
            user = supabase.auth.update_user(attributes={"email": email})

            if user:
                flash("Your email was updated successfully.", category="info")
            else:
                flash(
                    "Updating your email address failed, please try again.",
                    category="error",
                )
        except AuthApiError as exception:
            err = exception.to_dict()
            flash(err.get("message"), "error")

    return render_template("account/update-email.html", form=form)


@account.route("/update-password", methods=["GET", "POST"])
@login_required
def update_password():
    form = UpdatePasswordForm()
    if form.validate_on_submit():
        password = form.password.data

        try:
            user = supabase.auth.update_user(attributes={"password": password})

            if user:
                flash("Your password was updated successfully.", "info")
                session.pop("password_update_required", None)
            else:
                flash("Updating your password failed, please try again.", "error")
        except AuthApiError as exception:
            err = exception.to_dict()
            flash(err.get("message"), "error")

    return render_template("account/update-password.html", form=form)
