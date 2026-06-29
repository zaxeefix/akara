import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Array<{ label: string; value: string }>;
};

export function Select({ label, options, id, className = "", ...props }: SelectProps) {
  const selectId = id ?? props.name ?? label;
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-800 dark:text-slate-100" htmlFor={selectId}>
      {label}
      <select
        id={selectId}
        className={`min-h-11 rounded-card border border-slate-300 bg-white px-3 py-2 text-slate-950 outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}
