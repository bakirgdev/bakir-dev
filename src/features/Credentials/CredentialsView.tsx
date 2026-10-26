"use client";

import { useState } from "react";
import { CredentialCard } from "@/features/Credentials/CredentialCard";
import { type CredentialTag, myCredentials } from "@/features/Credentials/lib";
import { Badge } from "@/shadcn/components/ui/badge";
import { cn } from "@/shadcn/lib/utils";

const allTags = [...new Set(myCredentials.flatMap((c) => c.tags))];

export function CredentialsView() {
  const [activeTag, setActiveTag] = useState<CredentialTag | null>(null);

  const filteredCredentials = activeTag
    ? myCredentials.filter((c) => c.tags.includes(activeTag))
    : myCredentials;

  const filters = [
    { label: "All", tag: null },
    ...allTags.map((tag) => ({ label: tag, tag })),
  ];

  return (
    <>
      <fieldset className="mb-10 flex flex-wrap justify-center gap-2">
        <legend className="sr-only">Filter credentials by issuer</legend>
        {filters.map(({ label, tag }, i) => {
          const isActive = activeTag === tag;

          return (
            <Badge
              key={label}
              variant={isActive ? "default" : "outline"}
              className={cn(
                "h-8 px-4 motion-preset-slide-down",
                !isActive && "hover:bg-muted",
              )}
              style={{ animationDelay: `${i * 50}ms` }}
              render={
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTag(isActive ? null : tag)}
                />
              }
            >
              {label}
            </Badge>
          );
        })}
      </fieldset>

      <p className="sr-only" aria-live="polite">
        Showing {filteredCredentials.length}{" "}
        {filteredCredentials.length === 1 ? "credential" : "credentials"}
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCredentials.map((credential, i) => (
          <CredentialCard
            key={credential.name}
            credential={credential}
            style={{ animationDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
    </>
  );
}
