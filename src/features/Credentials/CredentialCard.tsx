import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import type { Credential } from "@/features/Credentials/lib";
import { buttonVariants } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { cn } from "@/shadcn/lib/utils";

interface CredentialCardProps {
  credential: Credential;
  style?: React.CSSProperties;
}

export function CredentialCard({ credential, style }: CredentialCardProps) {
  return (
    <Card className="h-full pt-0 motion-preset-slide-down-sm" style={style}>
      <div className="relative aspect-4/3 w-full bg-muted/50">
        <Image
          src={credential.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-1"
        />
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2 text-xl">
          <h2>{credential.name}</h2>
        </CardTitle>
      </CardHeader>

      <CardContent className="grow">
        <CardDescription className="line-clamp-3 text-base">
          {credential.description}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <a
          href={credential.verify}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${credential.name}`}
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          Verify
          <HugeiconsIcon icon={ArrowUpRight01Icon} data-icon="inline-end" />
        </a>
      </CardFooter>
    </Card>
  );
}
