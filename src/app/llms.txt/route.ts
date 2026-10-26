import { getPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// https://llmstxt.org
export async function GET() {
  const posts = await getPosts();

  const body = `# ${site.name}

> ${site.description}

${site.author} is a ${site.jobTitle}. Contact channels are on the [links page](${site.url}/links).

## Blog

${posts.map((post) => `- [${post.title}](${site.url}/blog/${post.slug}): ${post.description}`).join("\n")}

## Pages

- [Home](${site.url}): Who I am and what I do
- [Links](${site.url}/links): GitHub, LinkedIn, company website and other contact channels
- [Credentials](${site.url}/credentials): Certifications and badges with verification links

## Optional

- [RSS feed](${site.url}/blog/rss.xml)
- [Source code](${site.repository})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
