# The builder image, used to build the virtual environment
FROM python:3.11-buster as builder

RUN pip install poetry==1.4.2

ENV POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /app

COPY pyproject.toml poetry.lock ./

RUN --mount=type=cache,target=$POETRY_CACHE_DIR poetry install --without dev --no-root

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
FROM python:3.11-slim-buster as runtime

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
ENV PORT 8000

CMD ["gunicorn", "-w", "4", "app.__init__:app", "--bind", "0.0.0.0:8000"]
