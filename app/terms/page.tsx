import { InfoPage } from "@/components/shared/info-page";

export default function TermsPage() {
  return <InfoPage title="Terms of Service" description="Beta terms placeholder pending legal review." sections={[
    { title: "Beta notice", body: "AkaraConnect is being prepared for public beta. Some features may be incomplete, unavailable, or subject to change." },
    { title: "Marketplace role", body: "AkaraConnect connects customers and vendors. Vendor products, availability, and fulfillment remain subject to vendor confirmation." },
    { title: "Legal review", body: "This page is a professional placeholder and should be reviewed by qualified counsel before public launch." }
  ]} />;
}
