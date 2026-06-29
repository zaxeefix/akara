"use client";

import type { ReactNode } from "react";
import { Button } from "./button";

export function Modal({ open, title, children, onClose }: { open: boolean; title: string; children: ReactNode; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="w-full max-w-lg rounded-card bg-white p-5 shadow-soft dark:bg-slate-950">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold">{title}</h2>
          <Button variant="ghost" onClick={onClose} aria-label="Close dialog">Close</Button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
