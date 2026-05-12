"use client";

import { useState } from "react";
import { CredentialCard } from "@/features/Credentials/CredentialCard";
import { type CredentialTag, myCredentials } from "@/features/Credentials/lib";
import { Badge } from "@/shadcn/components/ui/badge";
import { cn } from "@/shadcn/lib/utils";

export function CredentialsView() {
  const [activeTag, setActiveTag] = useState<CredentialTag | null>(null);

  const allTags = Array.from(
    new Set(myCredentials.flatMap((c) => c.tags)),
  ) as CredentialTag[];

  const filteredCredentials = activeTag
    ? myCredentials.filter((c) => c.tags.includes(activeTag))
    : myCredentials;

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <Badge
          role="button"
          aria-pressed={activeTag === null}
          variant={activeTag === null ? "default" : "outline"}
          className={cn(
            "cursor-pointer px-4 py-1 h-8 motion-preset-slide-down",
            activeTag !== null &&
              "hover:bg-accent hover:text-accent-foreground",
          )}
          onClick={() => setActiveTag(null)}
        >
          All
        </Badge>

        {allTags.map((tag, i) => (
          <Badge
            key={`credential-tag_${tag}`}
            role="button"
            aria-pressed={activeTag === tag}
            variant={activeTag === tag ? "default" : "outline"}
            className={cn(
              "cursor-pointer px-4 py-1 h-8 motion-preset-slide-down",
              activeTag !== tag &&
                "hover:bg-accent hover:text-accent-foreground",
            )}
            style={{ animationDelay: `${i * 50}ms` }}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredCredentials.map((credential, i) => (
          <CredentialCard
            key={`credential-card_${credential.name}`}
            credential={credential}
            style={{ animationDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
    </>
  );
}
