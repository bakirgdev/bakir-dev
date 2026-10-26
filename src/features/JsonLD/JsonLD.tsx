/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: JSON-LD must be inlined as a script; "<" is escaped to prevent breaking out of it */

import type { Thing, WithContext } from "schema-dts";

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
