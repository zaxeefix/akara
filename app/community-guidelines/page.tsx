import { InfoPage } from "@/components/shared/info-page";

export default function CommunityGuidelinesPage() {
  return <InfoPage title="Community Guidelines" description="Guidelines for customers, vendors, admins, and contributors." sections={[
    { title: "Respect", body: "Treat vendors, customers, support staff, and contributors respectfully." },
    { title: "No abuse", body: "Spam, fake reviews, fraudulent listings, harassment, and unsafe behavior are not allowed." },
    { title: "Accurate information", body: "Vendors should keep business details, menus, prices, and availability accurate." }
  ]} />;
}
