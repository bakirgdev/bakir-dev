import type { Metadata } from "next";
import { site } from "@/lib/site";

// A segment that sets `openGraph` replaces the parent's object entirely, so shared fields are spread in.
export const sharedOpenGraph = {
  siteName: site.name,
  locale: "en_US",
  type: "website",
} as const;

export const rssAlternate = { "application/rss+xml": "/blog/rss.xml" };

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path, types: rssAlternate },
    openGraph: {
      ...sharedOpenGraph,
      title,
      description,
      url: path,
      images: {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    },
  };
}
