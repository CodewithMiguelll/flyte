"use client";
import { Monoton, Inter,  } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-blue-50 to-white text-gray-800 overflow-hidden">
      {/* 404 Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className={`${monoton.className} text-[8rem] font-bold text-gray-900 tracking-widest`}
      >
        404
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className={`${inter.className} text-lg text-gray-600 mb-10 text-center`}
      >
        This destination isn't under our radar... yet! Let's get you home.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="flex gap-4"
      >
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
        >
          Go Home
        </Link>
        <Link
          href="/explore"
          className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium transition"
        >
          Explore Destinations
        </Link>
      </motion.div>
    </main>
  );
}
