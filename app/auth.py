from flask import Blueprint, render_template, redirect, request, session, url_for, flash
from app.forms import AuthForm, ForgotPasswordForm
from app.utils import supabase
from gotrue.errors import AuthApiError

auth = Blueprint("auth", __name__, url_prefix="/auth")


@auth.route("/signin", methods=["GET", "POST"])
def signin():
    next = request.args.get("next")
    form = AuthForm()
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data

        try:
            user = supabase.auth.sign_in_with_password(
                credentials={"email": email, "password": password}
            )

            if user:
                return redirect(url_for(next or "home"))
        except AuthApiError as message:
            flash(message, "error")

    return render_template("auth/signin.html", form=form, next=next)


@auth.route("/signup", methods=["GET", "POST"])
def signup():
    form = AuthForm()
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data

        user = supabase.auth.sign_up(credentials={"email": email, "password": password})

        if user:
            return redirect(url_for("home"))
        else:
            flash("User registration failed!", "error")

    return render_template("auth/signup.html", form=form)


@auth.route("/signout", methods=["POST"])
def signout():
    supabase.auth.sign_out()
    return redirect(url_for("auth.signin"))


@auth.route("/forgotpassword", methods=["GET", "POST"])
def forgot_password():
    form = ForgotPasswordForm()
    if form.validate_on_submit():
        email = form.email.data
        supabase.auth.reset_password_email(email=email)

        flash(
            "Please check your email for a password reset link to log into the website.",
            "info",
        )

    return render_template("auth/forgotpassword.html", form=form)


@auth.route("/confirm")
def confirm():
    token_hash = request.args.get("token_hash")
    auth_type = request.args.get("type")
    next = request.args.get("next", "home")

    if token_hash and auth_type:
        if auth_type == "recovery":
            session["password_update_required"] = True

        supabase.auth.verify_otp(params={"token_hash": token_hash, "type": auth_type})

    return redirect(url_for(next))
