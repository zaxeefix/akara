import type { HTMLAttributes, ReactNode } from "react";

export function Card({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={`rounded-card border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-950 ${className}`} {...props}>
      {children}
    </div>
  );
}
