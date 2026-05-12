import Link from "next/link";
import { BackToTop } from "@/features/Footer/BackToTop";
import { CopyrightYear } from "@/features/Footer/CopyrightYear";

export default function Footer() {
  return (
    <footer className="py-4 flex items-center justify-between text-sm text-muted-foreground">
      <div className="flex items-center gap-3 md:gap-5 intersect:motion-preset-blur-right intersect-once">
        <p>
          © <CopyrightYear /> bakir.dev
        </p>

        <Link
          href="https://github.com/bakirgdev/bakir-dev/blob/main/LICENSES/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="hover:underline transition-all"
          prefetch={false}
        >
          Licenses
        </Link>

        <Link
          href="https://sanjacklee.digital"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all"
          prefetch={false}
        >
          Company
        </Link>
      </div>

      <BackToTop />
    </footer>
  );
}
