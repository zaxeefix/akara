import { DashboardLayout } from "@/components/layout/dashboard-layout";

const nav: Array<[string, string]> = [
  ["Dashboard", "/vendor/dashboard"],
  ["Orders", "/vendor/orders"],
  ["Menu", "/vendor/menu"],
  ["Earnings", "/vendor/earnings"],
  ["Profile", "/vendor/profile"],
  ["Analytics", "/vendor/analytics"],
  ["Reviews", "/vendor/reviews"],
  ["Settings", "/vendor/settings"]
];

export default function VendorRootLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout title="Vendor dashboard" role="vendor" nav={nav}>{children}</DashboardLayout>;
}
