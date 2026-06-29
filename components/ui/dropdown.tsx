"use client";

import { useState } from "react";
import { Button } from "./button";

export function Dropdown({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <Button variant="secondary" onClick={() => setOpen((value) => !value)} aria-expanded={open}>{label}</Button>
      {open ? (
        <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-card border border-slate-200 bg-white p-2 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          {items.map((item) => <button key={item} className="block min-h-10 w-full rounded-md px-3 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-900">{item}</button>)}
        </div>
      ) : null}
    </div>
  );
}
