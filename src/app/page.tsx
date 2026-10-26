import type { Metadata } from "next";
import type { Person, WebSite, WithContext } from "schema-dts";
import { About } from "@/features/IndexPage/About";
import { CTA } from "@/features/IndexPage/CTA";
import { FAQ } from "@/features/IndexPage/FAQ";
import { Hero } from "@/features/IndexPage/Hero";
import { LatestPosts } from "@/features/IndexPage/LatestPosts";
import { author, JsonLD } from "@/features/JsonLD/JsonLD";
import { rssAlternate, sharedOpenGraph } from "@/lib/metadata";
import { site } from "@/lib/site";

// The title falls back to the layout's default, which skips the "%s | bakir.dev" template.
export const metadata: Metadata = {
  alternates: { canonical: "/", types: rssAlternate },
  openGraph: {
    ...sharedOpenGraph,
    title: site.name,
    description: site.description,
    url: "/",
  },
};

export default function IndexPage() {
  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    ...author,
    description: site.bio,
    image: `${site.url}/static/images/headshot.jpeg`,
    knowsLanguage: [...site.languages],
    worksFor: {
      "@type": "Organization",
      name: site.company.name,
      url: site.company.url,
    },
    sameAs: [site.links.github, site.links.linkedin, site.links.buyMeACoffee],
  };
  const webSiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    author: { "@id": author["@id"] },
  };

  return (
    <>
      <JsonLD code={personSchema} />
      <JsonLD code={webSiteSchema} />

      <div className="mt-20 flex flex-col gap-25 md:gap-30">
        <Hero />
        <About />
        <LatestPosts />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}
