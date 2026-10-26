import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { buttonVariants } from "@/shadcn/components/ui/button";
import { cn } from "@/shadcn/lib/utils";

export function CTA() {
  return (
    <section className="rounded-3xl bg-primary p-8 text-center text-primary-foreground shadow-2xl intersect:motion-preset-blur-up-lg intersect-once md:p-16">
      <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Let&apos;s talk
      </h2>

      <p className="mx-auto mb-8 max-w-prose text-pretty text-lg leading-tight text-primary-foreground/80 md:text-xl">
        Check out my links or get in touch to discuss your next project.
      </p>

      <Link
        href="/links"
        className={cn(
          buttonVariants({ variant: "secondary", size: "lg" }),
          "h-12 rounded-xl px-5 text-lg font-semibold",
        )}
      >
        Links & Contact
        <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
      </Link>
    </section>
  );
}
