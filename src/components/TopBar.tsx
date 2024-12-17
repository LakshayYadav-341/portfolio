"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function TopBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  // Hydration fix: Ensure the client-side theme is set after the first render
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch by rendering only after the first mount
  if (!mounted) {
    return null; // Or loading spinner if desired
  }

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="left-div items-center flex space-x-4">
          <h3 className="mr-16 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#72EFDD] to-[#2D9CDB] animate-pulse">
            Lakshay Yadav
          </h3>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
            </div>
          </MenuItem>
        </div>
        <div className="right-div">
          {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="px-8 me-4 py-2 text-black dark:text-white text-sm rounded-md font-semibold hover:shadow-lg">
            {theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button> */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`px-4 me-2 py-2 rounded-lg font-semibold transition-all duration-300 border-2
              ${theme === "dark"
                ? "bg-gradient-to-br from-[#5C16C5] to-[#AC39E0] text-white border-[#AC39E0] hover:from-[#AC39E0] hover:to-[#5C16C5] shadow-lg"
                : "bg-gradient-to-br from-[#F2F3F5] to-[#FFFFFF] text-[#5C16C5] border-[#F2F3F5] hover:from-[#FFFFFF] hover:to-[#F2F3F5] shadow-md"
              }
            `}
          >
            {theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
          <button className="p-[3px] relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transition duration-300 group-hover:from-purple-500 group-hover:to-indigo-500" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative transition duration-300 group-hover:bg-transparent">
              <span className="text-white group-hover:text-black" >Contact Me</span>
            </div>
          </button>

        </div>

      </Menu>

    </div>
  );
}
