"use client";

import { Refresh01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Non200Pages from "@/features/Non200Pages/Non200Pages";
import { Button } from "@/shadcn/components/ui/button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function ErrorPage({ unstable_retry }: ErrorPageProps) {
  return (
    <Non200Pages code="500" title="Server Error">
      <Button size="lg" onClick={() => unstable_retry()}>
        <HugeiconsIcon
          data-icon="inline-start"
          className="size-5"
          icon={Refresh01Icon}
        />
        Try Again
      </Button>
    </Non200Pages>
  );
}
