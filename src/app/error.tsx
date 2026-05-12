"use client";

import { Refresh01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Non200Pages from "@/features/Non200Pages/Non200Pages";
import { Button } from "@/shadcn/components/ui/button";

export default function ErrorPage() {
  return (
    <Non200Pages code="500" title="Server Error">
      <Button size="lg" onClick={() => window.location.reload()}>
        <HugeiconsIcon className="size-5" icon={Refresh01Icon} />
        Refresh
      </Button>
    </Non200Pages>
  );
}
