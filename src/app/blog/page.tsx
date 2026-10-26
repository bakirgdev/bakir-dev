import type { Blog, WithContext } from "schema-dts";
import { BlogCard } from "@/features/BlogCard/BlogCard";
import { author, JsonLD } from "@/features/JsonLD/JsonLD";
import PageHeading from "@/features/PageHeading/PageHeading";
import { getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const description =
  "Notes and guides from things I build and the problems I solve along the way.";

export const metadata = pageMetadata({
  title: "Blog",
  description,
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getPosts();

  const blogSchema: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog | ${site.name}`,
    url: `${site.url}/blog`,
    description,
    author,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${site.url}/blog/${post.slug}`,
      datePublished: post.published,
    })),
  };

  return (
    <>
      <JsonLD code={blogSchema} />

      <section>
        <PageHeading
          title="Blog"
          subtitle="Notes and guides from things I build"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard
              key={post.slug}
              post={post}
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
