export function Badge({ children, tone = "info" }: { children: React.ReactNode; tone?: "info" | "success" | "warning" | "danger" | "neutral" }) {
  const tones = {
    info: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200",
    success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
    warning: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
    danger: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200",
    neutral: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
  };
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
