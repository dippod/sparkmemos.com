"use client";

import { Moon, Sun } from "lucide-react";
import clsx from "clsx";
import { useEffect, useState, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : getSystemTheme();
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [hydrated, theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const isDark = theme === "dark";
  const label = hydrated ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={clsx(
        "inline-flex h-10 w-10 items-center justify-center rounded-full transition",
        className ||
          "border border-ink-200/30 bg-ink-900/70 text-ink-100 hover:border-ink-200/55 hover:bg-ink-900/80"
      )}
    >
      {hydrated ? (
        isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
