import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";

const steps = [
  "Welcome and account setup",
  "Business registration form",
  "Location capture",
  "Upload logo and cover photo",
  "Add first menu item",
  "Set opening and closing hours",
  "Set pickup or delivery option",
  "Submit verification",
  "Await admin approval"
];

const statuses = ["Draft", "Submitted", "Under review", "Approved", "Rejected", "Suspended"];

export function VendorOnboardingSteps() {
  return (
    <div className="grid gap-4">
      <Card>
        <h2 className="text-xl font-bold">Pilot vendor onboarding steps</h2>
        <ol className="mt-4 grid gap-3">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-3 rounded-card bg-slate-100 p-3 dark:bg-slate-900">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</span>
              <span className="font-semibold">{step}</span>
            </li>
          ))}
        </ol>
      </Card>
      <Card>
        <h2 className="text-xl font-bold">Application status labels</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {statuses.map((status) => <StatusPill key={status} status={status} />)}
        </div>
      </Card>
    </div>
  );
}
