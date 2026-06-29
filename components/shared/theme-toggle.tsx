"use client";

import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("akaraconnect-theme", "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  );
}
