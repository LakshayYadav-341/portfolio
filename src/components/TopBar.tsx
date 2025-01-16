"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { FaLightbulb, FaCloudMoon } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const ThemeToggleButton = () => (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="md:px-4 py-2 md:ms-56 rounded-lg font-semibold transition-all duration-300"
    >
      {theme === "dark" ? (
        <div className="flex items-center space-x-2">
          <p>Light Mode</p>
          <FaLightbulb />
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <p>Dark Mode</p>
          <FaCloudMoon />
        </div>
      )}
    </button>
  );

  const ContactButton = () => (
    <button
      aria-label="Contact Me"
      className="relative group p-[3px] hidden md:block"
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transition duration-300 group-hover:from-purple-500 group-hover:to-indigo-500" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative transition duration-300 group-hover:bg-transparent">
        <span className="text-white group-hover:text-black">Contact Me</span>
      </div>
    </button>
  );

  return (
    <div className={cn("fixed bg-transparent top-0 inset-x-0 max-w-6xl z-50", className)}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 bg-transparent w-screen shadow-lg">
        <Menu setActive={() => {}}>
          <div className="flex items-center space-x-6">
            <button onClick={scrollToTop} className="text-2xl mr-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ed2be] to-[#2D9CDB] dark:from-[#1F8A70] dark:to-[#1F6D8B] animate-pulse">
              Lakshay Yadav
            </button>
          </div>

          <div className="flex items-center space-x-10">
            <ThemeToggleButton />
            <ContactButton />
          </div>
        </Menu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white dark:bg-black shadow-lg">
        <div className="flex justify-between items-center px-4 py-2">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#72EFDD] to-[#2D9CDB] animate-pulse">
            Lakshay Yadav
          </h3>
          <button
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            className="z-50"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-black z-40 overflow-y-auto pb-20">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <ThemeToggleButton />
                <ContactButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
