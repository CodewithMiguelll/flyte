"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Lora } from "next/font/google";
import { Button } from "./ui/button";

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "italic",
});

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/explore", label: "Explore" },
    { href: "/trips", label: "Trips" },
    { href: "/bookings", label: "Bookings" },
    { href: "/profile", label: "Profile" },
    { href: "/experience", label: "Experience" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full bg-white/75 shadow-sm sticky top-0 left-0 z-50 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">
        {/* Brand */}
        <div className={`${lora.className} text-2xl font-bold`}>
          <Link href="/">
            FLY
            <span className="text-blue-500">TE</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[#121212] font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-all duration-200 rounded-md ${
                  isActive
                    ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-600 after:rounded-full"
                    : "hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex gap-4.5">
          <Link href="/auth/signup">
            <button className="bg-[#292929] backdrop-blur-2xl text-white p-2.5 rounded-md hover:translate-y-1 transition">
              Get Started
            </button>
          </Link>

          <Link href="/auth/login">
            <button className="bg-blue-500 text-white p-2.5 rounded-md hover:translate-y-1 transition">
              Log In
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#121212] hover:text-blue-600 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col items-start p-4 space-y-4 text-[#121212] font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full px-2 py-2 rounded-md transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-4.5 p-3.5">
            <Link
              href="/auth/signup"
              className="bg-[#292929] backdrop-blur-2xl text-white p-2.5 mt-2.5 rounded-md w-full text-center"
            >
              <button>Get Started</button>
            </Link>

            <Link
              href="/auth/login"
              className="w-full bg-blue-500 text-white p-2.5 mb-2.5 rounded-md text-center"
            >
              <button>Log In</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
