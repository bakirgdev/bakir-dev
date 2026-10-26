import { BackToTop } from "@/features/Footer/BackToTop";
import { site } from "@/lib/site";

const footerLinks = [
  { title: "RSS", href: "/blog/rss.xml" },
  { title: "Source", href: site.repository },
  { title: "Licenses", href: `${site.repository}/tree/main/LICENSES` },
  { title: site.company.name, href: site.company.url },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between gap-4 py-4 text-sm text-muted-foreground">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 intersect:motion-preset-blur-right intersect-once">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>

        {footerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {link.title}
          </a>
        ))}
      </div>

      <BackToTop />
    </footer>
  );
}
