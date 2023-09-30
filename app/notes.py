import base64
import io
import requests
from flask import Blueprint, flash, redirect, render_template, request, url_for
from PIL import Image, ImageOps
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
    path = None
    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        is_public = form.is_public.data
        featured_image = form.featured_image.name
        image = request.files[featured_image]
        # check if image is set
        if image:
            image_stream = io.BytesIO()
            image.save(image_stream)
            path = f"{profile['id']}/{random_choice().lower()}_fi.png"

        try:
            # Upload file
            if path is not None:
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
    preview_image = None
    path = note["featured_image"]
    if path is not None:
        # A Supabase PRO plan is required to use the image transform below
        # r = supabase.storage.from_("featured_image").get_public_url(
        #     note["featured_image"],
        #     options={"transform": {"width": 200}},
        # )

        # Alternatively we can use Pillow to handle our image transform but
        # the burden will be on our own server rather than Supabase's and we
        # have to write a lot more code to accomplish the transform, you may
        # also want to cache this as this action will be performed everytime
        # you load an image
        r = supabase.storage.from_("featured_image").get_public_url(
            note["featured_image"]
        )
        response = requests.get(r, stream=True)
        content_size = response.headers.get("Content-length")
        if content_size != "0":
            img = Image.open(response.raw)
            img = ImageOps.contain(img, (200, 200))
            image_stream = io.BytesIO()
            img.save(image_stream, format="png")
            preview_image = f"data:image/png;base64, {base64.b64encode(image_stream.getvalue()).decode('utf-8')}"

    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        is_public = form.is_public.data
        featured_image = form.featured_image.name
        image = request.files[featured_image]
        if image:
            image_stream = io.BytesIO()
            image.save(image_stream)
            path = f"{profile['id']}/{random_choice().lower()}_fi.png"

        try:
            if image:
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
        "notes/edit.html",
        profile=profile,
        form=form,
        note=note,
        preview_image=preview_image,
    )
