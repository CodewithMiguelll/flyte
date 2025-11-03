"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/trips", label: "Trips" },
    { href: "/explore", label: "Explore" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 bg-white/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-10">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <NavigationMenuItem key={href}>
                  <Link
                    href={href}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-500"
                    }`}
                  >
                    {label}

                    {isActive && (
                      <motion.span
                        layoutId="activeLink"
                        className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
