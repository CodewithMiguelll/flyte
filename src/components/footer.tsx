"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, StarsIcon, Github, Instagram } from "lucide-react";
import { Lora } from "next/font/google";

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "italic",
});

const Footer = () => {
  return (
    <footer className="relative mt-32 bg-linear-to-b from-white/30 to-white/10 backdrop-blur-md border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center text-2xl font-semibold text-gray-900 ${lora.className}`}
          >
            <Plane className="w-6 h-6 text-blue-600" />
            FLY<span className="text-blue-600">TE</span>
          </motion.div>
          <p className="mt-3 text-sm text-gray-600 max-w-sm">
            Designed for dreamers of the sky — track, explore, and take flight
            with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Navigate</h4>
          <ul className="flex flex-col gap-2 text-gray-700 text-sm">
            {["Home", "Explore", "Trips", "Book"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Connect</h4>
          <div className="flex justify-center md:justify-start gap-4">
            {/* GitHub */}
            <motion.a
              href="https://github.com/CodeWithMiguelll"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-50"
            >
              <Github className="w-5 h-5 text-gray-700 hover:text-blue-600 transition-colors" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/_big.migz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 rounded-full border border-gray-200 hover:border-pink-600 hover:bg-pink-50"
            >
              <Instagram className="w-5 h-5 text-gray-700 hover:text-pink-600 transition-colors" />
            </motion.a>

            {/* The Studio */}
            <motion.a
              href="https://madebynorthlight.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 rounded-full border border-gray-200 hover:border-[#7e57c2]"
            >
              <StarsIcon className="w-5 h-5 text-gray-700 hover:text-[#7e57c2] transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 mt-10 py-4 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} FLYTE — Designed for dreamers of the sky.
      </div>
    </footer>
  );
};

export default Footer;
