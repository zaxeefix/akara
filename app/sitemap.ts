import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://akaraconnect.example";
  return ["", "/marketplace", "/nearby", "/login", "/register", "/vendor/onboarding"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
