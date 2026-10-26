import Image from "next/image";
import Link from "next/link";
import { DesktopNavbar } from "@/features/Navbar/DesktopNavbar";
import { MobileNavbar } from "@/features/Navbar/MobileNavbar";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between gap-6 py-4 md:justify-start">
      <Link href="/" aria-label="bakir.dev home">
        <Image
          src="/static/images/logo.png"
          alt=""
          width={25}
          height={25}
          loading="eager"
        />
      </Link>

      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
