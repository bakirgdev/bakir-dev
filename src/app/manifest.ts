import type { MetadataRoute } from "next";
import { defaultMetadataImage } from "@/lib/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "bakir.dev",
    short_name: "bakir.dev",
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: "#85cc23",
    background_color: "#0a0a0a",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: defaultMetadataImage,
        sizes: "1200x630",
        type: "image/png",
      },
    ],
  };
}
