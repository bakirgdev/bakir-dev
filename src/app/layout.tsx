import "@/css/global.css";
import "@/types/env";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/features/Footer/Footer";
import IntersectionObserver from "@/features/IntersectionObserver/IntersectionObserver";
import Navbar from "@/features/Navbar/Navbar";
import { publicSans } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import { baseViewport } from "@/lib/viewport";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs-Latn-BA"
      className={`${publicSans.className} font-public-sans dark`}
      suppressHydrationWarning
    >
      <body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        <IntersectionObserver>
          <div className="container mx-auto px-4 min-h-dvh flex flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col py-3">{children}</main>
            <Footer />
          </div>
        </IntersectionObserver>
      </body>
    </html>
  );
}
