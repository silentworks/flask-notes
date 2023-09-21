from flask import Flask, render_template
from app.utils import (
    login_required,
    password_update_required,
    session_context_processor,
)
from app.auth import auth
from app.account import account

app = Flask(__name__, template_folder="../templates", static_folder="../static")

# Set the secret key to some random bytes. Keep this really secret!
app.secret_key = b"c8af64a6a0672678800db3c5a3a8d179f386e083f559518f2528202a4b7de8f8"
app.context_processor(session_context_processor)
app.register_blueprint(auth)
app.register_blueprint(account)


@app.route("/")
@login_required
@password_update_required
def home():
    return render_template("index.html")
