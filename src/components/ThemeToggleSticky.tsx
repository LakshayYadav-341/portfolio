"use client"
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleSticky = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-0 transform -translate-x-1/2 z-50 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white p-4 rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      style={{ minWidth: 56, minHeight: 56 }}
    >
      {isDark ? (
        <FaSun className="w-6 h-6" />
      ) : (
        <FaMoon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggleSticky; 