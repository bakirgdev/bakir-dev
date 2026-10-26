"use client";

import { ArrowUp02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/shadcn/components/ui/button";

export function BackToTop() {
  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        })
      }
      aria-label="Back to top"
      className="intersect:motion-preset-blur-left intersect-once"
    >
      <HugeiconsIcon icon={ArrowUp02Icon} />
    </Button>
  );
}
