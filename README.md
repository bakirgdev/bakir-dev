# bakir.dev

Source of my personal website and blog, [bakir.dev](https://bakir.dev).

If you want to chat, reach me on your preferred platform from the [links](https://bakir.dev/links) page.

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, MDX, Biome, pnpm. Deployed as a Docker image.

## Development

Requires Node.js 20.9+ and pnpm (the version is pinned in `package.json`).

```bash
pnpm install
pnpm dev
```

Blog posts live in [`src/content/blog`](src/content/blog). Each `.mdx` file exports its own `metadata`.

## Licenses

Code in this repository is licensed under the [MIT License](LICENSES/CODE.md).

Non-code content (e.g., blog posts, images etc.) is licensed under the [CC BY-NC 4.0 license](LICENSES/CONTENT.md).
