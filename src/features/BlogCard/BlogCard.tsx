import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { formatDate, type Post } from "@/lib/blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

interface BlogCardProps {
  post: Post;
  style?: React.CSSProperties;
}

export function BlogCard({ post, style }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group motion-preset-slide-down rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      style={style}
    >
      <Card className="h-full transition-colors group-hover:bg-muted/60">
        <CardHeader>
          <p className="mb-2 text-sm text-muted-foreground">
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            {` · ${post.readingTime} min read`}
          </p>
          <CardTitle className="line-clamp-2 text-xl leading-tight">
            <h2>{post.title}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="grow">
          <CardDescription className="line-clamp-4 text-base">
            {post.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="font-medium text-primary">
          Read article
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={16}
            className="ml-1 transition-transform group-hover:translate-x-0.5"
          />
        </CardFooter>
      </Card>
    </Link>
  );
}
