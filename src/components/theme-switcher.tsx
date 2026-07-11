"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitch(): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-xl shadow animate-pulse" />
    );
  }

  const isDark: boolean = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="p-1.5 rounded-xl border border-black/10 bg-white/80 shadow dark:bg-gray-700 dark:border-white/20 active:scale-90 transition-transform duration-200 cursor-pointer"
    >
      <div
        className={`transition-transform duration-500 ease-out ${
          isDark ? "rotate-180" : "rotate-0"
        }`}
      >
        {isDark ? (
          <FiSun className="w-5 h-5 text-amber-500" />
        ) : (
          <FiMoon className="w-5 h-5 text-indigo-600" />
        )}
      </div>
    </button>
  );
}
