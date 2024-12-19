"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { 
  Menu as MenuIcon, 
  X as CloseIcon 
} from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hydration fix: Ensure the client-side theme is set after the first render
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch by rendering only after the first mount
  if (!mounted) {
    return null; // Or loading spinner if desired
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActive(null);
  };

  const ThemeToggleButton = () => (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 border-2 hidden md:block
        ${theme === "dark"
          ? "bg-gradient-to-br from-[#5C16C5] to-[#AC39E0] text-white border-[#AC39E0] hover:from-[#AC39E0] hover:to-[#5C16C5] shadow-lg"
          : "bg-gradient-to-br from-[#F2F3F5] to-[#FFFFFF] text-[#5C16C5] border-[#F2F3F5] hover:from-[#FFFFFF] hover:to-[#F2F3F5] shadow-md"
        }
      `}
    >
      {theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );

  const ContactButton = () => (
    <button className="p-[3px] relative group hidden md:block">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transition duration-300 group-hover:from-purple-500 group-hover:to-indigo-500" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative transition duration-300 group-hover:bg-transparent">
        <span className="text-white group-hover:text-black">Contact Me</span>
      </div>
    </button>
  );

  return (
    <div className={cn("fixed top-0 md:top-5 inset-x-0 max-w-6xl mx-auto z-50", className)}>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
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
          <div className="right-div flex items-center space-x-4">
            <ThemeToggleButton />
            <ContactButton />
          </div>
        </Menu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center p-4 bg-white dark:bg-black">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#72EFDD] to-[#2D9CDB] animate-pulse">
            Lakshay Yadav
          </h3>
          
          <button 
            onClick={toggleMobileMenu}
            className="z-50 relative"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-black z-40 overflow-y-auto pb-20">
            <div className="flex flex-col space-y-6 p-6">
              <div className="flex justify-between items-center">
                <ThemeToggleButton />
                <ContactButton />
              </div>

              <div className="space-y-4">
                <div 
                  onClick={() => setActive(active === "Services" ? null : "Services")}
                  className="text-xl font-semibold"
                >
                  Services {active === "Services" ? "▼" : "▶"}
                  {active === "Services" && (
                    <div className="mt-4 space-y-3 pl-4">
                      <HoveredLink href="/web-dev">Web Development</HoveredLink>
                      <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                      <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                      <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                  )}
                </div>

                <div 
                  onClick={() => setActive(active === "Products" ? null : "Products")}
                  className="text-xl font-semibold"
                >
                  Products {active === "Products" ? "▼" : "▶"}
                  {active === "Products" && (
                    <div className="mt-4 space-y-4 pl-4">
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
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}