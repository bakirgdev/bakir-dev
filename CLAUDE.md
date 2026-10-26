# CLAUDE.md

Personal website and blog for [bakir.dev](https://bakir.dev). Public OSS repo: code MIT, content CC BY-NC 4.0 (`LICENSES/`).

Stack: Next.js 16 App Router (Turbopack), React 19, TypeScript, Tailwind CSS 4, shadcn/ui (Base UI primitives, `base-vega` style, Hugeicons), `@next/mdx`, Biome, pnpm 12.

## Commands

```bash
pnpm dev       # dev server
pnpm build     # production build (also type-checks)
pnpm start     # serve the production build
pnpm lint      # biome check (lint + format check)
pnpm format    # biome format --write
```

Verify a change with `pnpm lint`, then `pnpm build`. There are no tests. `./node_modules/.bin/biome check --write` applies safe fixes.

## Layout

- `src/app/`: routes. Every page is statically prerendered; keep it that way (no request-time APIs).
- `src/content/blog/*.mdx`: blog posts.
- `src/features/<Feature>/`: one directory per UI section. MDX element overrides are in `src/features/MDX/`, wired in `src/mdx-components.tsx`.
- `src/lib/site.ts`: site URL, author, email, social links. Single source for these values; there are no env vars.
- `src/lib/blog.ts`: post discovery, validation, reading time.
- `src/lib/metadata.ts`: `pageMetadata()` and shared Open Graph fields.
- `src/shadcn/`: vendored shadcn/ui components. Reinstall instead of editing: `pnpm dlx shadcn@latest add <name> --overwrite`.
- `public/static/images/`: images, referenced by string path (`src="/static/images/..."`) with explicit `width`/`height`.

Only the `@/*` -> `src/*` path alias exists.

## Blog posts

Adding a post = adding `src/content/blog/<slug>.mdx`. No registry. It must start with:

```mdx
export const metadata = {
  title: "...",
  description: "...",
  published: "YYYY-MM-DD",
  // updated: "YYYY-MM-DD",
};
```

`getPosts()` reads the directory and validates `metadata` with Zod, so a bad field fails the build. The slug, sitemap, RSS (`/blog/rss.xml`), OG image and prev/next links derive from it.

Code fences are highlighted at build time by `rehype-pretty-code` (Shiki). Headings get ids and anchor links from `rehype-slug` and `rehype-autolink-headings`.

## Gotchas

- MDX plugins in `next.config.ts` are referenced by string name with JSON-serializable options. Turbopack cannot take plugin functions.
- Segments that set `openGraph` replace the parent's object entirely. Build page metadata with `pageMetadata()`, or spread `sharedOpenGraph`.
- Dynamic metadata image routes need their own `generateStaticParams` (see `src/app/blog/[slug]/opengraph-image.tsx`) or they render on demand.
- `src/app/template.tsx` mounts the `tailwindcss-intersect` observer. It remounts on every navigation, which re-binds `intersect:*` classes on new pages.
- Links styled as buttons use `buttonVariants()` on `<Link>`/`<a>`. Never nest a `<Button>` inside a link, and never use `render={<a />}` on Button (Base UI forces `role="button"`).
- For lists of link `Item`s use `<ul>`/`<li>`, not `ItemGroup`: its `role="list"` does not allow `<a>` children (fails axe `aria-required-children`).
- The shadcn CLI writes `import { cn } from "cn"` with this repo's custom `utils` alias. After adding components, rewrite it to `@/shadcn/lib/utils`.
- Dark mode only: `dark` is hardcoded on `<html>`.
- Biome skips everything under `public/` (override in `biome.json`).

## Deployment

Dokploy on a VPS builds the `Dockerfile` on every push to `main` and serves port 3002 behind Cloudflare. No env vars or build args are needed.

The Dockerfile follows Next's `with-docker` example on `node:26-slim`. Node 25+ ships without corepack, so it installs the pnpm version from `packageManager` with npm. pnpm 12 fails with `ERR_PNPM_UNRECOGNIZED_WORKSPACE_SETTINGS` on unknown keys in `pnpm-workspace.yaml`.

@AGENTS.md
