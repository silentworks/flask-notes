from flask import Flask, abort, g, render_template

from flask_misaka import Misaka
from app.supabase import (
    supabase,
    session_context_processor,
    get_profile_by_slug,
    get_profile_by_user,
    get_all_notes_by_user_id,
    get_note_by_slug,
    get_all_notes_with_profile,
)
from app.decorators import login_required, password_update_required, profile_required
from app.auth import auth
from app.account import account
from app.notes import notes
from app.utils import humanize_ts, resize_image

app = Flask(__name__, template_folder="../templates", static_folder="../static")

Misaka(app)

# Set the secret key to some random bytes. Keep this really secret!
app.secret_key = b"c8af64a6a0672678800db3c5a3a8d179f386e083f559518f2528202a4b7de8f8"
app.context_processor(session_context_processor)
app.register_blueprint(auth)
app.register_blueprint(account)
app.register_blueprint(notes)
app.jinja_env.filters["humanize"] = humanize_ts


@app.teardown_appcontext
def close_supabase(e=None):
    g.pop("supabase", None)


@app.route("/")
def home():
    notes = get_all_notes_with_profile()
    return render_template("index.html", notes=notes)


@app.route("/dashboard")
@login_required
@password_update_required
@profile_required
def dashboard():
    profile = get_profile_by_user()
    return render_template("dashboard.html", profile=profile)


@app.route("/u/<slug>")
def u(slug):
    profile = get_profile_by_slug(slug)
    notes = get_all_notes_by_user_id(profile.get("id"))
    return render_template("profile.html", profile=profile, notes=notes)


@app.route("/u/<slug>/<note_slug>")
def user_note(slug, note_slug):
    profile = get_profile_by_slug(slug)
    note = get_note_by_slug(note_slug)
    if note.get("slug") is None:
        abort(404)
    featured_image = None
    try:
        r = supabase.storage.from_("featured_image").get_public_url(
            note["featured_image"]
        )
        featured_image = resize_image(r, 700, 400)
    except:
        None

    return render_template(
        "note.html", profile=profile, note=note, featured_image=featured_image
    )


@app.route("/service-unavailable")
def service_unavailable():
    return render_template("5xx.html", title="Service Unavailable!")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html", title="Page Not Found!"), 404
