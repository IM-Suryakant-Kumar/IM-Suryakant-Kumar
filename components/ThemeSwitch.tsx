"use client";

import { useTheme } from "@/contexts/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-8 bottom-8 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === "dark" ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}