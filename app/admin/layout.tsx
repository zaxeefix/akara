import { DashboardLayout } from "@/components/layout/dashboard-layout";

const nav: Array<[string, string]> = [
  ["Dashboard", "/admin/dashboard"],
  ["Approvals", "/admin/vendors/approval"],
  ["Customers", "/admin/customers"],
  ["Vendors", "/admin/vendors"],
  ["Orders", "/admin/orders"],
  ["Payments", "/admin/payments"],
  ["Security", "/admin/security-logs"],
  ["Settings", "/admin/settings"]
];

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout title="Admin dashboard" role="admin" nav={nav}>{children}</DashboardLayout>;
}
