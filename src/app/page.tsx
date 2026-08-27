import type { Person, WebSite, WithContext } from "schema-dts";
import { CTA } from "@/features/IndexPage/CTA";
import { FAQ } from "@/features/IndexPage/FAQ";
import { Hero } from "@/features/IndexPage/Hero";
import { JsonLD } from "@/features/JsonLD/JsonLD";

// metadata applied from layout.tsx

export default function IndexPage() {
  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bakir Gracić",
    jobTitle: "Web Solutions Architect",
    url: process.env.NEXT_PUBLIC_APP_URL,
    image: `${process.env.NEXT_PUBLIC_APP_URL}/static/images/headshot.jpeg`,
    sameAs: [
      process.env.NEXT_PUBLIC_GITHUB_URL,
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
      process.env.NEXT_PUBLIC_WHATSAPP_URL,
      process.env.NEXT_PUBLIC_COMPANY_URL,
      process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL,
    ],
  };
  const webSiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "bakir.dev",
    url: process.env.NEXT_PUBLIC_APP_URL,
    author: {
      "@type": "Person",
      name: "Bakir Gracić",
      url: process.env.NEXT_PUBLIC_APP_URL,
    },
  };

  return (
    <>
      <JsonLD code={personSchema} />
      <JsonLD code={webSiteSchema} />

      <section className="flex flex-col gap-25 md:gap-30 mt-20">
        <Hero />
        <FAQ />
        <CTA />
      </section>
    </>
  );
}
