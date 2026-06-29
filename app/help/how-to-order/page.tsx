import { InfoPage } from "@/components/shared/info-page";

export default function HowToOrderPage() {
  return <InfoPage title="How to order" description="A simple first-order guide." sections={[
    { title: "Find a vendor", body: "Search by food, vendor, category, or nearby location." },
    { title: "Choose pickup or delivery", body: "Confirm your address or pickup plan before checkout." },
    { title: "Track your order", body: "Use the order tracking page to follow pending, accepted, preparing, ready, and delivered states." }
  ]} />;
}
