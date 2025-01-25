FROM node:20-alpine

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./


ARG NEXT_PUBLIC_LOCATION
## set the environment variables
ENV
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_PUBLIC_LOCATION=$NEXT_PUBLIC_LOCATION

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .

RUN if [ "$NEXT_PUBLIC_LOCATION" = "local" ]; then \
      npm run build-local; \
    elif [ "$NEXT_PUBLIC_LOCATION" = "prod" ]; then \
      npm run build-prod; \
    else \
      npm run build-dev; \
    fi

CMD if [ "$NEXT_PUBLIC_LOCATION" = "local" ]; then \
      npm run start-local; \
    elif [ "$NEXT_PUBLIC_LOCATION" = "prod" ]; then \
      npm run start-prod; \
    elif [ "$NEXT_PUBLIC_LOCATION" = "dev" ]; then \
      npm run start_build_dev; \
    else \
      npm run start; \
    fi