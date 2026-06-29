import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/vendor"]
    },
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL || "https://akaraconnect.example"}/sitemap.xml`
  };
}
