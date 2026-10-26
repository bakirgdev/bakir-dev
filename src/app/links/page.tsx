import {
  Coffee01Icon,
  GithubIcon,
  Linkedin02Icon,
  MailEdit01Icon,
  OfficeIcon,
  WhatsappBusinessIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import PageHeading from "@/features/PageHeading/PageHeading";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/shadcn/components/ui/item";

export const metadata = pageMetadata({
  title: "Links",
  description:
    "Links to connect with me online. Explore my GitHub, LinkedIn, and more. Feel free to reach out!",
  path: "/links",
});

const links = [
  {
    title: "Email",
    description: site.email,
    href: `mailto:${site.email}`,
    icon: MailEdit01Icon,
  },
  {
    title: "GitHub",
    description: "github.com/bakirgdev",
    href: site.links.github,
    icon: GithubIcon,
  },
  {
    title: "LinkedIn",
    description: "linkedin.com/in/bakirgdev",
    href: site.links.linkedin,
    icon: Linkedin02Icon,
  },
  {
    title: "WhatsApp Business",
    description: "Chat with me on WhatsApp",
    href: site.links.whatsapp,
    icon: WhatsappBusinessIcon,
  },
  {
    title: site.company.name,
    description: "sanjacklee.digital",
    href: site.company.url,
    icon: OfficeIcon,
  },
  {
    title: "Buy Me a Coffee",
    description: "buymeacoffee.com/bakirgdev",
    href: site.links.buyMeACoffee,
    icon: Coffee01Icon,
  },
];

export default function LinksPage() {
  return (
    <section>
      <PageHeading title="Links" subtitle="Connect with me across the web" />

      <ul className="mx-auto flex max-w-md flex-col gap-2">
        {links.map((link, i) => (
          <li key={link.title}>
            <Item
              variant="outline"
              className="motion-preset-slide-down"
              style={{ animationDelay: `${i * 50}ms` }}
              render={
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
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
          </li>
        ))}
      </ul>
    </section>
  );
}
