import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, id, className = "", ...props }: InputProps) {
  const inputId = id ?? props.name ?? label;
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-800 dark:text-slate-100" htmlFor={inputId}>
      {label}
      <input
        id={inputId}
        className={`min-h-11 rounded-card border border-slate-300 bg-white px-3 py-2 text-slate-950 outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white ${className}`}
        {...props}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, error, id, className = "", ...props }: TextareaProps) {
  const inputId = id ?? props.name ?? label;
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-800 dark:text-slate-100" htmlFor={inputId}>
      {label}
      <textarea
        id={inputId}
        className={`min-h-28 rounded-card border border-slate-300 bg-white px-3 py-2 text-slate-950 outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white ${className}`}
        {...props}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
