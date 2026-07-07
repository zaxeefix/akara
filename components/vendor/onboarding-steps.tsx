import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Badge } from "@/components/ui/badge";

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

const onboardingSections = [
  ["Business information", ["Business name", "Owner name", "Phone number", "Email", "Password"]],
  ["Business branding", ["Logo upload", "Cover photo", "Business description"]],
  ["Location", ["Country", "State", "Local Government Area", "Full address", "GPS coordinates", "Google Maps location"]],
  ["Business settings", ["Opening time", "Closing time", "Pickup available", "Delivery available", "Delivery radius", "Delivery fee"]],
  ["First menu item", ["Food name", "Price", "Description", "Food image", "Preparation time", "Availability status"]],
  ["Payment", ["Bank name", "Account number", "Account name", "Mobile wallet future placeholder"]],
  ["Verification", ["National ID optional", "Business certificate optional", "Business photos", "Location verification where possible"]],
  ["Final step", ["Accept terms", "Submit for admin approval", "Awaiting approval status"]]
];

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
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold">Required approval checklist</h2>
          <Badge tone="warning">Approval gated</Badge>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">A vendor cannot start selling until onboarding is complete and an admin approves the business.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {onboardingSections.map(([title, items]) => (
            <div key={title as string} className="rounded-card bg-slate-100 p-4 dark:bg-slate-900">
              <h3 className="font-bold">{title}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
                {(items as string[]).map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
