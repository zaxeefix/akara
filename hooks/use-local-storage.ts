"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (stored) setValue(JSON.parse(stored) as T);
  }, [key]);

  const update = (nextValue: T) => {
    setValue(nextValue);
    window.localStorage.setItem(key, JSON.stringify(nextValue));
  };

  return [value, update] as const;
}
