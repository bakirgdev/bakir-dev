import { ImageResponse } from "next/og";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function OpengraphImage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#0a0a0a",
        color: "#fafafa",
        borderBottom: "16px solid #8ad13c",
      }}
    >
      <div style={{ fontSize: 32, color: "#8ad13c", fontWeight: 700 }}>
        {site.name}
      </div>
      <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.15 }}>
        {post.title}
      </div>
      <div style={{ fontSize: 28, color: "#a3a3a3" }}>
        {`${formatDate(post.published)} · ${site.author}`}
      </div>
    </div>,
    size,
  );
}
