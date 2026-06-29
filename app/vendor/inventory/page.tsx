import { ComingSoon } from "@/components/shared/coming-soon";

export default function VendorInventoryPage() {
  return (
    <ComingSoon
      eyebrow="Inventory"
      title="Inventory and stock tools"
      description="Inventory tools will help vendors track ingredients, menu item stock, low-stock alerts, and profit estimates."
      items={["Stock status", "Low stock alerts", "Inventory adjustments", "Profit estimates"]}
    />
  );
}
