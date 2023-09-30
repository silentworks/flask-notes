import base64
import io
import random
import string
from PIL import Image, ImageOps
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
