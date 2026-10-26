"use client";

import { CheckmarkCircle02Icon, Copy01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/shadcn/components/ui/button";

export default function Pre(props: React.ComponentProps<"pre">) {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(preRef.current?.textContent ?? "");
    } catch (error) {
      console.error("Copying code failed", error);
      return;
    }
    setIsCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <pre ref={preRef} {...props} />

      <Button
        variant="outline"
        size="icon-sm"
        onClick={handleCopy}
        aria-label={isCopied ? "Copied" : "Copy code"}
        className="absolute top-2 right-2 transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:focus-visible:opacity-100"
      >
        <HugeiconsIcon icon={isCopied ? CheckmarkCircle02Icon : Copy01Icon} />
      </Button>
    </div>
  );
}
