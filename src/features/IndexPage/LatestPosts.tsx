import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { BlogCard } from "@/features/BlogCard/BlogCard";
import { getPosts } from "@/lib/blog";
import { buttonVariants } from "@/shadcn/components/ui/button";

export async function LatestPosts() {
  const posts = (await getPosts()).slice(0, 3);

  return (
    <section
      aria-labelledby="latest-posts-heading"
      className="flex flex-col items-center gap-10"
    >
      <h2
        id="latest-posts-heading"
        className="text-center text-4xl font-bold tracking-tight"
      >
        Latest posts
      </h2>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <BlogCard
            key={post.slug}
            post={post}
            style={{ animationDelay: `${i * 50}ms` }}
          />
        ))}
      </div>

      <Link href="/blog" className={buttonVariants({ variant: "outline" })}>
        All posts
        <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
      </Link>
    </section>
  );
}
