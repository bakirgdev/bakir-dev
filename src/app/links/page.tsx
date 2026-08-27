import {
  Coffee01Icon,
  GithubIcon,
  Linkedin02Icon,
  MailEdit01Icon,
  OfficeIcon,
  WhatsappBusinessIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import PageHeading from "@/features/PageHeading/PageHeading";
import { pageMetadata } from "@/lib/metadata";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/shadcn/components/ui/item";

export const metadata = pageMetadata(
  "Links | bakir.dev",
  "Links to connect with me online. Explore my GitHub, LinkedIn, and more. Feel free to reach out!",
  "/links",
);

export default function LinksPage() {
  const links = [
    {
      title: "Email",
      description: "Send me an email",
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
      icon: MailEdit01Icon,
    },
    {
      title: "GitHub",
      description: "github.com/bakirgdev",
      href: process.env.NEXT_PUBLIC_GITHUB_URL,
      icon: GithubIcon,
    },
    {
      title: "LinkedIn",
      description: "linkedin.com/in/bakirgdev",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      icon: Linkedin02Icon,
    },
    {
      title: "WhatsApp Business",
      description: "wa.me/message/...",
      href: process.env.NEXT_PUBLIC_WHATSAPP_URL,
      icon: WhatsappBusinessIcon,
    },
    {
      title: "Company Website",
      description: "sanjacklee.digital",
      href: process.env.NEXT_PUBLIC_COMPANY_URL,
      icon: OfficeIcon,
    },
    {
      title: "Buy Me a Coffee",
      description: "buymeacoffee.com/bakirgdev",
      href: process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL,
      icon: Coffee01Icon,
    },
  ];

  return (
    <section>
      <PageHeading title="Links" subtitle="Connect with me across the web" />

      <div className="max-w-md mx-auto">
        <ItemGroup className="gap-2">
          {links.map((link, i) => (
            <Item
              key={`link-item_${link.title}`}
              className="motion-preset-slide-down"
              style={{ animationDelay: `${i * 50}ms` }}
              render={
                <Link
                  href={link.href}
                  aria-label={`${link.title} - ${link.description}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                />
              }
            >
              <ItemMedia>
                <HugeiconsIcon icon={link.icon} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{link.title}</ItemTitle>
                <ItemDescription>{link.description}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </div>
    </section>
  );
}
