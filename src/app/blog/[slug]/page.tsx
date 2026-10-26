import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import type { BlogPosting, WithContext } from "schema-dts";
import { author, JsonLD } from "@/features/JsonLD/JsonLD";
import { formatDate, getPost, getPosts, type Post } from "@/lib/blog";
import { rssAlternate, sharedOpenGraph } from "@/lib/metadata";
import { site } from "@/lib/site";
import { cn } from "@/shadcn/lib/utils";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  const path = `/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path, types: rssAlternate },
    openGraph: {
      ...sharedOpenGraph,
      type: "article",
      title: post.title,
      description: post.description,
      url: path,
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: [site.url],
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const [post, posts, { default: PostContent }] = await Promise.all([
    getPost(slug),
    getPosts(),
    import(`@/content/blog/${slug}.mdx`),
  ]);

  const index = posts.findIndex((p) => p.slug === slug);
  const newer = posts[index - 1];
  const older = posts[index + 1];
  const url = `${site.url}/blog/${slug}`;

  const blogPostingSchema: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    url,
    image: `${url}/opengraph-image`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author,
  };

  return (
    <>
      <JsonLD code={blogPostingSchema} />

      <article className="prose mx-auto w-full max-w-prose wrap-break-word text-pretty motion-preset-blur-down-sm dark:prose-invert prose-headings:scroll-mt-6 prose-headings:[&_a]:text-inherit prose-headings:[&_a]:no-underline prose-a:text-primary prose-a:underline-offset-4 prose-pre:bg-muted prose-code:before:content-none prose-code:after:content-none [&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-muted [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:font-normal">
        <header className="not-prose mb-10">
          <p className="text-sm text-muted-foreground">
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            {post.updated && (
              <>
                {" · Updated "}
                <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            )}
            {` · ${post.readingTime} min read`}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
        </header>

        <PostContent />
      </article>

      {(newer || older) && (
        <nav
          aria-label="More posts"
          className="mx-auto mt-16 grid w-full max-w-prose gap-4 sm:grid-cols-2"
        >
          {older && <PostNavLink post={older} direction="previous" />}
          {newer && <PostNavLink post={newer} direction="next" />}
        </nav>
      )}
    </>
  );
}

function PostNavLink({
  post,
  direction,
}: {
  post: Post;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "flex flex-col gap-1 rounded-xl p-4 ring-1 ring-foreground/10 transition-colors hover:bg-muted",
        isNext && "items-end text-right sm:col-start-2",
      )}
    >
      <span className="flex items-center gap-1 text-sm text-muted-foreground">
        {!isNext && <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />}
        {isNext ? "Next" : "Previous"}
        {isNext && <HugeiconsIcon icon={ArrowRight01Icon} size={16} />}
      </span>
      <span className="font-medium">{post.title}</span>
    </Link>
  );
}
