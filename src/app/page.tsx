import type { Metadata } from "next";
import type { Person, WebSite, WithContext } from "schema-dts";
import { CTA } from "@/features/IndexPage/CTA";
import { FAQ } from "@/features/IndexPage/FAQ";
import { Hero } from "@/features/IndexPage/Hero";
import { JsonLD } from "@/features/JsonLD/JsonLD";
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
    "@type": "Person",
    name: site.author,
    jobTitle: site.jobTitle,
    url: site.url,
    image: `${site.url}/static/images/headshot.jpeg`,
    sameAs: Object.values(site.links),
  };
  const webSiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    author: { "@type": "Person", name: site.author, url: site.url },
  };

  return (
    <>
      <JsonLD code={personSchema} />
      <JsonLD code={webSiteSchema} />

      <div className="mt-20 flex flex-col gap-25 md:gap-30">
        <Hero />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}
