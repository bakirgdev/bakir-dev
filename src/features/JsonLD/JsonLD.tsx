/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: JSON-LD must be inlined as a script; "<" is escaped to prevent breaking out of it */

import type { Person, Thing, WithContext } from "schema-dts";
import { site } from "@/lib/site";

// One stable @id lets search engines and AI crawlers tie every page and post to the same person.
export const author = {
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.author,
  url: site.url,
} satisfies Person;

type JsonLdProps<T extends Thing> = {
  code: WithContext<T>;
};

export function JsonLD<T extends Thing>({ code }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(code).replace(/</g, "\\u003c"),
      }}
    />
  );
}
