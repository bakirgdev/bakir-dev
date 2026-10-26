import {
  DocumentValidationIcon,
  Home07Icon,
  LicenseIcon,
  Link04Icon,
} from "@hugeicons/core-free-icons";

export const navbarLinks = [
  { title: "Home", href: "/", icon: Home07Icon },
  { title: "Blog", href: "/blog", icon: LicenseIcon },
  { title: "Links", href: "/links", icon: Link04Icon },
  { title: "Credentials", href: "/credentials", icon: DocumentValidationIcon },
] as const;

export function isActiveLink(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
