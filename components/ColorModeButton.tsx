"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ColorModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Renderizar un placeholder mientras se monta para evitar cambios de diseño
  if (!mounted) {
    return (
      <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
      title={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
      aria-pressed={isDark}
      className="rounded-full p-2 text-blue-600 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-100 active:scale-95 dark:bg-slate-950 dark:text-white dark:hover:bg-black dark:hover:shadow-slate-800"
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ColorModeButton;
