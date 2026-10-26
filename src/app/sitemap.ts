import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  return [
    { url: site.url },
    { url: `${site.url}/blog`, lastModified: posts[0]?.published },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: post.updated ?? post.published,
    })),
    { url: `${site.url}/links` },
    { url: `${site.url}/credentials` },
  ];
}
