import "@/css/global.css";
import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import Footer from "@/features/Footer/Footer";
import Navbar from "@/features/Navbar/Navbar";
import { rssAlternate, sharedOpenGraph } from "@/lib/metadata";
import { site } from "@/lib/site";

const publicSans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author, url: site.url }],
  creator: site.author,
  alternates: { types: rssAlternate },
  openGraph: sharedOpenGraph,
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${publicSans.variable} dark`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>

        <div className="container mx-auto flex min-h-dvh flex-col px-4">
          <Navbar />
          <main id="main" className="flex flex-1 flex-col py-3">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
