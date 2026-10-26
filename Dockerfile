# Based on https://github.com/vercel/next.js/tree/canary/examples/with-docker
ARG NODE_VERSION=26-slim

# ============================================
# Stage 1: pnpm, at the version pinned in package.json
# ============================================

FROM node:${NODE_VERSION} AS base

WORKDIR /app

# Node.js 25+ no longer ships corepack, so install the pinned pnpm with npm
COPY package.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install -g --allow-scripts=pnpm "$(node -p 'require("./package.json").packageManager')"

# ============================================
# Stage 2: Dependencies
# ============================================

FROM base AS dependencies

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,target=/pnpm/store \
    pnpm install --frozen-lockfile --store-dir /pnpm/store

# ============================================
# Stage 3: Build Next.js application in standalone mode
# ============================================

FROM base AS builder

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN --mount=type=cache,target=/app/.next/cache \
    pnpm build

# ============================================
# Stage 4: Run Next.js application
# ============================================

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3002
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder --chown=node:node /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next && chown node:node .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/app/api-reference/config/next-config-js/output
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

EXPOSE 3002

CMD ["node", "server.js"]
