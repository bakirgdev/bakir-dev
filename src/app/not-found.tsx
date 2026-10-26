import { Home07Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import Non200Pages from "@/features/Non200Pages/Non200Pages";
import { buttonVariants } from "@/shadcn/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFoundPage() {
  return (
    <Non200Pages code="404" title="Page Not Found">
      <Link href="/" className={buttonVariants({ size: "lg" })}>
        <HugeiconsIcon icon={Home07Icon} data-icon="inline-start" />
        Back to Home
      </Link>
    </Non200Pages>
  );
}
