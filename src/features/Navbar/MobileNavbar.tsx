"use client";

import { Menu09Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isActiveLink, navbarLinks } from "@/features/Navbar/lib";
import { Button } from "@/shadcn/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/shadcn/components/ui/item";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shadcn/components/ui/sheet";

export function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label="Open menu"
            className="md:hidden"
          >
            <HugeiconsIcon icon={Menu09Icon} />
          </Button>
        }
      />
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-lg">Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Main">
          <ul className="flex flex-col gap-2 px-4">
            {navbarLinks.map((link) => {
              const isActive = isActiveLink(pathname, link.href);

              return (
                <li key={link.href}>
                  <Item
                    variant={isActive ? "muted" : "outline"}
                    render={
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setOpen(false)}
                      />
                    }
                  >
                    <ItemContent>
                      <ItemTitle>{link.title}</ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <HugeiconsIcon icon={link.icon} />
                    </ItemActions>
                  </Item>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
