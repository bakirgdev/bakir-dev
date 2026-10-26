"use client";

import { Refresh01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Non200Pages from "@/features/Non200Pages/Non200Pages";
import { Button } from "@/shadcn/components/ui/button";

export default function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <Non200Pages code="500" title="Something went wrong">
      <Button size="lg" onClick={() => retry()}>
        <HugeiconsIcon icon={Refresh01Icon} data-icon="inline-start" />
        Try Again
      </Button>
    </Non200Pages>
  );
}
