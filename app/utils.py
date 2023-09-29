import random
import string


def random_choice():
    alphabet = string.ascii_letters + string.digits + "-_"
    return "".join(random.choices(alphabet, k=8))
