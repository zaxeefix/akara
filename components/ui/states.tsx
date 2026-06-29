import { Button } from "./button";

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-card bg-slate-200 dark:bg-slate-800 ${className}`} aria-hidden="true" />;
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="grid place-items-center rounded-card border border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-950">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">{description}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

export function ErrorState({ title = "Something went wrong", onRetry }: { title?: string; onRetry?: () => void }) {
  return (
    <div className="rounded-card border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
      <p className="font-semibold">{title}</p>
      {onRetry ? <Button className="mt-3" variant="secondary" onClick={onRetry}>Retry</Button> : null}
    </div>
  );
}

export function LoadingState({ label = "Loading" }: { label?: string }) {
  return <div className="rounded-card border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-950">{label}...</div>;
}
