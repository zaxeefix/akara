import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://akaraconnect.example"),
  title: {
    default: "AkaraConnect",
    template: "%s | AkaraConnect"
  },
  description: "Digital marketplace for local Akara, Pap, and street food vendors in Nigeria.",
  applicationName: "AkaraConnect",
  openGraph: {
    title: "AkaraConnect",
    description: "Find trusted local food vendors across Nigeria.",
    type: "website",
    siteName: "AkaraConnect"
  },
  twitter: {
    card: "summary_large_image",
    title: "AkaraConnect",
    description: "Digital marketplace for Nigerian local street food vendors."
  }
};

export const viewport: Viewport = {
  themeColor: "#0B66A3",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AkaraConnect",
    description: "Digital marketplace for local Akara, Pap, and street food vendors in Nigeria."
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
