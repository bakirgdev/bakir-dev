import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { cache } from "react";
import { z } from "zod";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

const postMetadataSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  published: z.iso.date(),
  updated: z.iso.date().optional(),
});

export type Post = z.infer<typeof postMetadataSchema> & {
  slug: string;
  readingTime: number;
};

async function readPost(slug: string): Promise<Post> {
  const [{ metadata }, source] = await Promise.all([
    import(`@/content/blog/${slug}.mdx`),
    readFile(path.join(postsDirectory, `${slug}.mdx`), "utf8"),
  ]);
  const words = source.split(/\s+/).filter(Boolean).length;

  return {
    ...postMetadataSchema.parse(metadata),
    slug,
    readingTime: Math.max(1, Math.round(words / 225)),
  };
}

// Newest first. Each post is an `.mdx` file exporting `metadata`, so adding a post needs no registration.
export const getPosts = cache(async (): Promise<Post[]> => {
  const files = await readdir(postsDirectory);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => readPost(file.replace(/\.mdx$/, ""))),
  );

  return posts.sort((a, b) => b.published.localeCompare(a.published));
});

export async function getPost(slug: string) {
  const post = (await getPosts()).find((post) => post.slug === slug);
  if (!post) notFound();
  return post;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  });
}
