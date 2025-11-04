"use client";

import Link from "next/link";
import Navbar from "./nav-menu";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Lora } from "next/font/google";


const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  style:"italic"
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className={`${lora.className} text-2xl font-bold tracking-tight text-gray-900`}
          >
            FLY<span className="text-blue-600">TE</span>
          </Link>
        </motion.div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navbar />
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <Button
            variant="ghost"
            className="rounded-full text-gray-700 hover:text-blue-600"
          >
            Sign In
          </Button>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {/* Mobile Nav Links */}
              <Navbar />

              {/* Auth Buttons (Mobile) */}
              <div className="flex flex-col gap-2 mt-4">
                <Button
                  variant="ghost"
                  className="rounded-full text-gray-700 hover:text-blue-600 w-full"
                >
                  Sign In
                </Button>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
