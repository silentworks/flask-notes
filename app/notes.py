import base64
import io
from flask import Blueprint, flash, redirect, render_template, request, url_for
from postgrest.exceptions import APIError
from app.forms import NoteForm
from app.supabase import (
    get_note_by_user_and_id,
    supabase,
    get_notes_by_user,
    get_profile_by_user,
)
from app.decorators import login_required, password_update_required, profile_required
from app.utils import random_choice

notes = Blueprint("notes", __name__, url_prefix="/notes")


@notes.route("/")
@login_required
@password_update_required
@profile_required
def home():
    profile = get_profile_by_user()
    notes = get_notes_by_user()
    return render_template("notes/index.html", profile=profile, notes=notes)


@notes.route("/new", methods=["GET", "POST"])
@login_required
@password_update_required
@profile_required
def new():
    profile = get_profile_by_user()
    form = NoteForm(data=profile)
    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        is_public = form.is_public.data
        featured_image = form.featured_image.name
        image = request.files[featured_image]
        image_stream = io.BytesIO()
        image.save(image_stream)
        path = f"{profile['id']}/{random_choice().lower()}_fi.png"

        try:
            # Upload file
            r = supabase.storage.from_("featured_image").upload(
                path=path,
                file=image_stream.getvalue(),
                file_options={"content-type": image.content_type},
            )

            # Save to database
            res = (
                supabase.table("notes")
                .insert(
                    json={
                        "author_id": profile["id"],
                        "title": title,
                        "content": content,
                        "is_public": is_public,
                        "featured_image": path,
                    }
                )
                .execute()
            )

            if res:
                flash("Your new note was added successfully.", "info")
                return redirect(url_for("notes.home"))
            else:
                flash(
                    "Adding your note failed, please try again.",
                    "error",
                )
        except APIError as exception:
            flash(exception.message, "error")

    return render_template("notes/new.html", profile=profile, form=form)


@notes.route("/<note_id>/edit", methods=["GET", "POST"])
@login_required
@password_update_required
@profile_required
def edit(note_id):
    profile = get_profile_by_user()
    note = get_note_by_user_and_id(note_id)
    form = NoteForm(data=note)
    image = None
    if note["featured_image"] is not None:
        r = supabase.storage.from_("featured_image").get_public_url(
            note["featured_image"],
            options={"transform": {"width": 200}, "download": True},
        )
        # image = f"data:image/png;base64," + base64.b64encode(r).decode("utf-8")
        image = r
    else:
        path = note["featured_image"]

    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        is_public = form.is_public.data
        featured_image = form.featured_image.name
        print(f"Featured: {featured_image}")
        if featured_image is not None:
            image = request.files[featured_image]
            image_stream = io.BytesIO()
            image.save(image_stream)
            path = f"{profile['id']}/{random_choice().lower()}_fi.png"
            print(f"Path: {path}")

        try:
            if featured_image is not None:
                # Upload file
                r = supabase.storage.from_("featured_image").upload(
                    path=path,
                    file=image_stream.getvalue(),
                    file_options={"content-type": image.content_type},
                )

            # Save to database
            res = (
                supabase.table("notes")
                .update(
                    json={
                        "author_id": profile.get("id"),
                        "title": title,
                        "content": content,
                        "is_public": is_public,
                        "featured_image": path,
                    }
                )
                .match({"id": note.get("id"), "author_id": profile.get("id")})
                .execute()
            )

            if res:
                flash("Your new note was added successfully.", "info")
                return redirect(url_for("notes.home"))
            else:
                flash(
                    "Adding your note failed, please try again.",
                    "error",
                )
        except APIError as exception:
            flash(exception.message, "error")

    return render_template(
        "notes/edit.html", profile=profile, form=form, note=note, image=image
    )
