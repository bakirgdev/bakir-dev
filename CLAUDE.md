# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # start dev server
pnpm build         # production build
pnpm lint          # biome check --write (formats + lints in place)
pnpm tsc           # type-check only (wipes .next/ first, no emit)
pnpm dev:clean     # wipe .next/ then dev
pnpm build:clean   # wipe .next/ then build
```

Verification order: `pnpm lint` then `pnpm tsc` then `pnpm build`.

## Architecture

Personal website + blog for [bakir.dev](https://bakir.dev). Next.js 16 App Router, TypeScript strict, Tailwind 4, shadcn/ui, MDX.

### Path aliases

| Alias | Resolves to |
|-------|-------------|
| `@/*` | `./src/*` |
| `#/*` | `./public/*` |
| `&/*` | `./BLOG/*` |

### Blog system

Blog posts are `.mdx` files in `/BLOG/`. Every post must be registered in `src/lib/blogs.ts` (slug, title, description, published date). The `[slug]` page does a dynamic `import(`&/${slug}.mdx`)` and has `dynamicParams = false`, so only slugs listed in `blogs.ts` are valid. Adding a post = add the MDX file + add entry to `blogs.ts`.

### Features

`src/features/` holds self-contained UI sections (each directory = one feature). MDX component overrides live in `src/features/MDX/` and are wired in `src/mdx-components.tsx`.

### Env validation

All `NEXT_PUBLIC_*` vars are validated at startup via Zod in `src/types/env.ts`. Any missing/malformed var will throw at runtime. The schema is the source of truth for which vars are required.

### Rendering notes

- Dark-mode only: `dark` class is hardcoded on `<html>`.
- `tailwindcss-intersect` drives scroll-triggered animations via `motion-preset-*` classes.
- JSON-LD structured data (schema.org) is injected per-page via `<JsonLD>`.
- `next.config.ts` sets `output: "standalone"` for Docker (deployed via Dokploy on port 3002).
