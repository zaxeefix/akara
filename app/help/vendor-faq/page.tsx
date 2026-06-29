import { InfoPage } from "@/components/shared/info-page";

export default function VendorFaqPage() {
  return <InfoPage title="Vendor FAQ" description="Common beta questions for vendors." sections={[
    { title: "How does approval work?", body: "Vendors submit business details and verification information. Admins review before public approval." },
    { title: "Can I change prices?", body: "Vendors can manage menu items and prices from the vendor dashboard." },
    { title: "What happens if rejected?", body: "Rejected vendors should receive a reason and may update their application where allowed." }
  ]} />;
}
