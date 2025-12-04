# The builder image, used to build the virtual environment
FROM python:3.12-slim-trixie AS builder
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy

# Disable Python downloads, because we want to use the system interpreter
# across both images. If using a managed Python version, it needs to be
# copied from the build image into the final image.
ENV UV_PYTHON_DOWNLOADS=0

COPY --from=ghcr.io/astral-sh/uv:0.9.15 /uv /uvx /bin/

WORKDIR /app
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --locked --no-install-project --no-dev
COPY . /app
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --locked --no-dev

# Install dependencies only when needed
FROM node:alpine AS node-builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY templates/ ./templates
COPY tailwind.css tailwind.config.js package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm -v
RUN pnpm install --frozen-lockfile --prod --ignore-scripts --prefer-offline && pnpm build

# The runtime image, used to just run the code provided its virtual environment
FROM python:3.12-slim-trixie as runtime

ENV VIRTUAL_ENV=/app/.venv \
    PATH="/app/.venv/bin:$PATH"

ARG SUPABASE_URL
ARG SUPABASE_KEY
ENV SUPABASE_URL=$SUPABASE_URL
ENV SUPABASE_KEY=$SUPABASE_KEY

COPY --from=builder ${VIRTUAL_ENV} ${VIRTUAL_ENV}
COPY --from=node-builder /app/static/ ./static

COPY app /app
# COPY static /static
COPY templates /templates

RUN ls -la ${VIRTUAL_ENV}

EXPOSE 8000
ENV PORT=8000

CMD ["gunicorn", "-w", "4", "app.__init__:app", "--bind", "0.0.0.0:8000"]
