"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: "/explore", label: "Explore" },
    { href: "/trips", label: "Trips" },
    { href: "/bookings", label: "Bookings" },
    { href: "/profile", label: "Profile" },
    { href: "/experience", label: "Experience" },
  ];

  return (
    <div className="flex justify-center my-6 text-[#121212] font-medium">
      <NavigationMenu>
        {/* Add spacing *here* for consistent gaps between items */}
        <NavigationMenuList className="flex gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className={`relative px-3 py-2 text-[16px] transition-all duration-200 rounded-md ${
                    isActive
                      ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-600 after:rounded-full"
                      : "text-[#121212] hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
