import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import type { Credential } from "@/features/Credentials/lib";
import { Button } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

interface CredentialCardProps {
  credential: Credential;
  style?: React.CSSProperties;
}

export function CredentialCard({ credential, style }: CredentialCardProps) {
  return (
    <Card className="h-full pt-0 motion-preset-slide-down-sm" style={style}>
      <div className="relative w-full bg-muted/50 aspect-4/3 overflow-hidden p-1">
        <Image
          src={credential.image}
          alt={credential.name}
          fill
          sizes="100%"
          className="object-contain"
        />
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2 text-xl" title={credential.name}>
          {credential.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="grow">
        <CardDescription className="line-clamp-3 text-base">
          {credential.description}
        </CardDescription>
      </CardContent>

      {credential.verify && (
        <CardFooter className="pt-3 mt-auto">
          <Link
            href={credential.verify || "#"}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full font-bold"
          >
            <Button
              variant="outline"
              className="w-full"
              disabled={!credential.verify}
              aria-disabled={!credential.verify}
            >
              Verify
              <HugeiconsIcon icon={ArrowRight01Icon} />
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
