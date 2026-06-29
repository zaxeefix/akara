import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AkaraConnect",
    short_name: "AkaraConnect",
    description: "Digital marketplace for local Akara, Pap, and street food vendors in Nigeria.",
    start_url: "/",
    display: "standalone",
    background_color: "#081120",
    theme_color: "#0B66A3",
    icons: [
      { src: "/icons/icon.svg", sizes: "any", type: "image/svg+xml" }
    ]
  };
}
