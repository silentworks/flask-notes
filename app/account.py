from flask import Blueprint, redirect, render_template, flash, request, session, url_for
from flask_wtf import FlaskForm
from supabase import AuthApiError, FunctionsRelayError, FunctionsHttpError
from postgrest.exceptions import APIError

from app.forms import UpdateEmailForm, UpdateForm, UpdatePasswordForm
from app.supabase import get_profile_by_user, user_context_processor, supabase
from app.decorators import login_required, password_update_required, profile_required

account = Blueprint("account", __name__, url_prefix="/account")
account.context_processor(user_context_processor)


@account.route("/")
@login_required
@password_update_required
@profile_required
def home():
    profile = get_profile_by_user()
    return render_template("account/index.html", profile=profile)


@account.route("/update", methods=["GET", "POST"])
@login_required
def update():
    profile = get_profile_by_user()
    form = UpdateForm(data=profile)
    if form.validate_on_submit():
        display_name = form.display_name.data
        bio = form.bio.data
        first_name = form.first_name.data
        last_name = form.last_name.data
        dob = form.dob.data
        profile_location = form.profile_location.data

        try:
            res = supabase.rpc(
                fn="update_profile",
                params={
                    "display_name": display_name,
                    "bio": bio,
                    "first_name": first_name,
                    "last_name": last_name,
                    "dob": dob,
                    "profile_location": profile_location,
                },
            ).execute()

            if res:
                flash("Your profile was updated successfully.", "info")
            else:
                flash(
                    "Updating your profile failed, please try again.",
                    "error",
                )
        except APIError as exception:
            flash(exception.message, "error")

    return render_template("account/update.html", form=form, profile=profile)


@account.route("/update-email", methods=["GET", "POST"])
@login_required
@password_update_required
@profile_required
def update_email():
    profile = get_profile_by_user()
    form = UpdateEmailForm()
    if form.validate_on_submit():
        email = form.email.data

        try:
            user = supabase.auth.update_user(attributes={"email": email})

            if user:
                flash("Your email was updated successfully.", "info")
            else:
                flash(
                    "Updating your email address failed, please try again.",
                    "error",
                )
        except AuthApiError as exception:
            err = exception.to_dict()
            flash(err.get("message"), "error")

    return render_template("account/update-email.html", form=form, profile=profile)


@account.route("/update-password", methods=["GET", "POST"])
@login_required
@profile_required
def update_password():
    profile = get_profile_by_user()
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

    return render_template("account/update-password.html", form=form, profile=profile)


@account.route("/delete", methods=["POST"])
@login_required
def delete_account():
    form = FlaskForm()
    if form.is_submitted():
        try:
            r = supabase.functions.invoke("delete-account")

            if r:
                flash("Your account has been successfully deleted.", "info")
                supabase.auth.sign_out()
                return redirect(url_for("auth.signin"))
            else:
                flash(
                    "We couldn't delete your account, please contact support.", "error"
                )
                return redirect(url_for("account.home"))
        except (FunctionsRelayError, FunctionsHttpError) as exception:
            err = exception.to_dict()
            flash(err.get("message"), "error")
            return redirect(url_for("account.home"))
