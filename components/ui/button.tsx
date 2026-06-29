import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  children: ReactNode;
};

const variants = {
  primary: "bg-primary text-white hover:bg-sky-800",
  secondary: "border border-slate-300 bg-white text-slate-950 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white",
  ghost: "text-primary hover:bg-sky-50 dark:hover:bg-slate-800",
  danger: "bg-red-600 text-white hover:bg-red-700"
};

export function Button({ className = "", variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-card px-4 py-2 text-sm font-semibold transition focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
