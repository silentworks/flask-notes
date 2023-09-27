from flask_wtf import FlaskForm
from wtforms import (
    PasswordField,
    EmailField,
    StringField,
    TextAreaField,
    BooleanField,
    FileField,
)
from wtforms.validators import Email, InputRequired, Length, EqualTo, Optional


class AuthForm(FlaskForm):
    email = EmailField(
        "Email", validators=[InputRequired("Email is required."), Email()]
    )
    password = PasswordField(
        "Password", validators=[InputRequired("Password is required."), Length(min=6)]
    )


class ForgotPasswordForm(FlaskForm):
    email = EmailField(
        "Email", validators=[InputRequired("Email is required."), Email()]
    )


class VerifyTokenForm(FlaskForm):
    email = EmailField(
        "Email", validators=[InputRequired("Email is required."), Email()]
    )
    token = StringField("Token", validators=[InputRequired("Token is required.")])


class UpdateForm(FlaskForm):
    bio = TextAreaField("Bio", validators=[Optional()])
    display_name = StringField(
        "Display name", validators=[InputRequired("Display name is required.")]
    )
    first_name = StringField(
        "First name", validators=[InputRequired("First name is required.")]
    )
    last_name = StringField(
        "Last name", validators=[InputRequired("Last name is required.")]
    )
    dob = StringField(
        "Date of birth", validators=[InputRequired("Date of birth is required.")]
    )
    profile_location = StringField(
        "Location", validators=[InputRequired("Location is required.")]
    )


class UpdateEmailForm(FlaskForm):
    email = EmailField(
        "Email",
        validators=[
            InputRequired("Email is required."),
            Email(),
            EqualTo(fieldname="email_confirm", message="Email Address does not match"),
        ],
    )
    email_confirm = EmailField(
        "Confirm email", validators=[InputRequired("Email is required."), Email()]
    )


class UpdatePasswordForm(FlaskForm):
    password = PasswordField(
        "Password", validators=[InputRequired("Password is required.")]
    )
    password_confirm = PasswordField(
        "Confirm password",
        validators=[
            InputRequired("Password is required."),
            EqualTo(fieldname="password", message="Password does not match"),
        ],
    )


class NoteForm(FlaskForm):
    title = StringField("Title", validators=[InputRequired("Title is required.")])
    content = TextAreaField(
        "Content", validators=[InputRequired("Content is required.")]
    )
    featured_image = FileField("Featured Image", validators=[Optional()])
    is_public = BooleanField("Is public", validators=[Optional()])
