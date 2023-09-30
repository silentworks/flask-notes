from flask import Flask, g, render_template
from app.supabase import (
    session_context_processor,
    get_profile_by_slug,
    get_profile_by_user,
)
from app.decorators import login_required, password_update_required, profile_required
from app.auth import auth
from app.account import account
from app.notes import notes

app = Flask(__name__, template_folder="../templates", static_folder="../static")

# Set the secret key to some random bytes. Keep this really secret!
app.secret_key = b"c8af64a6a0672678800db3c5a3a8d179f386e083f559518f2528202a4b7de8f8"
app.context_processor(session_context_processor)
app.register_blueprint(auth)
app.register_blueprint(account)
app.register_blueprint(notes)


@app.teardown_appcontext
def close_supabase(e=None):
    g.pop("supabase", None)


@app.route("/")
@login_required
@password_update_required
@profile_required
def home():
    profile = get_profile_by_user()
    return render_template("index.html", profile=profile)


@app.route("/u/<slug>")
def u(slug):
    profile = get_profile_by_slug(slug)
    return render_template("profile.html", profile=profile)


@app.route("/service-unavailable")
def service_unavailable():
    return render_template("5xx.html", title="Service Unavailable!")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html", title="Page Not Found!"), 404
