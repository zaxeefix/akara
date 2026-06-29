import { InfoPage } from "@/components/shared/info-page";

export default function BecomeVendorHelpPage() {
  return <InfoPage title="How to become a vendor" description="Pilot vendor onboarding guidance." sections={[
    { title: "Register", body: "Create a vendor account and enter business details, contact information, address, hours, and description." },
    { title: "Add menu", body: "Add at least one menu item with category, description, price, and image where available." },
    { title: "Submit verification", body: "Submit verification and wait for admin review. Vendors are not automatically approved." }
  ]} />;
}
