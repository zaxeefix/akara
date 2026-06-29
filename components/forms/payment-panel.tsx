import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";

const methods = ["Paystack", "Flutterwave", "Moniepoint", "Opay", "PalmPay", "Bank transfer", "Wallet", "Cash on delivery", "Card"];

export function PaymentPanel() {
  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold">Payment method</h2>
        <StatusPill status="Paystack ready" />
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {methods.map((method) => (
          <label key={method} className="flex min-h-12 items-center gap-3 rounded-card border border-slate-200 px-3 dark:border-slate-800">
            <input type="radio" name="paymentMethod" value={method} />
            <span className="font-semibold">{method}</span>
          </label>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Only public payment keys belong in the frontend. Secret verification stays on the backend.</p>
      <Button className="mt-4 w-full">Continue to payment</Button>
    </Card>
  );
}
