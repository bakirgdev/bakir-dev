"use client";

import { CheckmarkCircle02Icon, Copy01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/shadcn/components/ui/button";
import { cn } from "@/shadcn/lib/utils";

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
    if (preRef.current) {
      const text = preRef.current.innerText;
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsCopied(false), 3000);
    }
  };

  return (
    <div className="flex my-2">
      <pre
        ref={preRef}
        className={cn(
          props.className,
          "m-0! bg-muted text-muted-foreground w-full py-3.5 px-4.5 rounded-l-lg rounded-r-none overflow-x-auto",
        )}
        {...props}
      />

      <div className="bg-muted rounded-r-lg rounded-l-none p-2 flex items-center">
        <Button
          variant="outline"
          size="icon-lg"
          onClick={handleCopy}
          className="cursor-pointer"
        >
          <HugeiconsIcon
            icon={isCopied ? CheckmarkCircle02Icon : Copy01Icon}
            className={cn(
              "transition-all duration-300",
              isCopied
                ? "text-green-500 scale-125"
                : "text-foreground scale-100",
            )}
          />
        </Button>
      </div>
    </div>
  );
}
