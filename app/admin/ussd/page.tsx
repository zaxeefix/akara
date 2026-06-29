import { ComingSoon } from "@/components/shared/coming-soon";

export default function AdminUssdPage() {
  return (
    <ComingSoon
      eyebrow="USSD"
      title="USSD ordering support"
      description="USSD support is planned for low-data customer ordering, order status checks, and vendor cash confirmation workflows."
      items={["Customer menus", "Vendor menus", "Telco integration", "USSD security"]}
    />
  );
}
