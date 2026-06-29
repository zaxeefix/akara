import { InfoPage } from "@/components/shared/info-page";

export default function VendorPolicyPage() {
  return <InfoPage title="Vendor Policy" description="Guidance for vendors during beta." sections={[
    { title: "Approval", body: "Vendors must submit accurate business, location, contact, and menu information for admin review." },
    { title: "Food information", body: "Vendors are responsible for keeping prices, availability, hours, and descriptions accurate." },
    { title: "Suspension", body: "Admins may suspend vendors for safety, fraud, repeated complaints, or policy violations after review." }
  ]} />;
}
