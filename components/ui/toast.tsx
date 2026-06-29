export function Toast({ type = "info", message }: { type?: "success" | "error" | "warning" | "info"; message: string }) {
  const tone = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-900",
    error: "border-red-200 bg-red-50 text-red-900",
    warning: "border-amber-200 bg-amber-50 text-amber-900",
    info: "border-sky-200 bg-sky-50 text-sky-900"
  }[type];
  return <div className={`rounded-card border px-4 py-3 text-sm font-semibold ${tone}`} role="status" aria-live="polite">{message}</div>;
}
