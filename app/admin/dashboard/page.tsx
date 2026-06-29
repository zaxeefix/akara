import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { BetaOperations } from "@/components/admin/beta-operations";

export default function AdminDashboardPage() {
  return <div className="grid gap-6"><BetaOperations /><AdminDashboard /></div>;
}
