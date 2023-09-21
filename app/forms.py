from flask_wtf import FlaskForm
from wtforms import PasswordField, EmailField
from wtforms.validators import Email, InputRequired, Length, EqualTo
from wtforms.widgets import PasswordInput


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
