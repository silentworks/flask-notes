import base64
from datetime import datetime
import io
import random
import string
from PIL import Image, ImageOps
import markdown
import requests


def random_choice():
    alphabet = string.ascii_letters + string.digits + "-_"
    return "".join(random.choices(alphabet, k=8))


def resize_image(image_path: str, width: int, height: int):
    preview_image = None
    response = requests.get(image_path, stream=True)
    content_size = response.headers.get("Content-length")
    if content_size != "0":
        img = Image.open(response.raw)
        img = ImageOps.contain(img, (width, height))
        image_stream = io.BytesIO()
        img.save(image_stream, format="png")
        preview_image = f"data:image/png;base64, {base64.b64encode(image_stream.getvalue()).decode('utf-8')}"

    return preview_image


def humanize_ts(timestamp=False, fmt=False):
    """
    Get a datetime object or a int() Epoch timestamp and return a
    pretty string like 'an hour ago', 'Yesterday', '3 months ago',
    'just now', etc
    """
    now = datetime.now()
    if type(timestamp) is str:
        # convert postgres timestamp string to python timestamp
        timestamp = datetime.strptime(
            timestamp[:26], "%Y-%m-%dT%H:%M:%S.%f"
        ).timestamp()

    datetm = datetime.fromtimestamp(timestamp)

    if fmt:
        return datetm.strftime(fmt)

    diff = now - datetime.fromtimestamp(timestamp)
    second_diff = diff.seconds
    day_diff = diff.days

    if day_diff < 0:
        return ""

    if day_diff == 0:
        if second_diff < 10:
            return "just now"
        if second_diff < 60:
            return str(int(second_diff)) + " seconds ago"
        if second_diff < 120:
            return "a minute ago"
        if second_diff < 3600:
            return str(int(second_diff / 60)) + " minutes ago"
        if second_diff < 7200:
            return "about an hour ago"
        if second_diff < 86400:
            return str(int(second_diff / 3600)) + " hours ago"
    if day_diff == 1:
        return "Yesterday"
    if day_diff < 7:
        return str(day_diff) + " days ago"
    if day_diff < 31:
        return str(int(day_diff / 7)) + " weeks ago"
    if day_diff < 182:
        return str(int(day_diff / 30)) + " months ago"
    return datetm.strftime(fmt or "%b %d %Y")


def mkdown(text: str):
    return markdown.markdown(text)
