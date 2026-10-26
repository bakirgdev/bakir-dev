"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActiveLink, navbarLinks } from "@/features/Navbar/lib";
import { buttonVariants } from "@/shadcn/components/ui/button";
import { cn } from "@/shadcn/lib/utils";

export function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {navbarLinks.map((link) => {
          const isActive = isActiveLink(pathname, link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
