"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/SplitText";

export default function Home() {
  return (
    <main className="w-full text-gray-900">
      {/* HERO SECTION (background isolated here) */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center text-white">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-[url('/images/mos-design-Mc6h6pUc4JI-unsplash.jpg')] bg-cover bg-center"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-120 from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 px-6">
          <SplitText
          tag="h1"
            text="Flight Tracking For The Future!"
            className="text-5xl md:text-6xl font-semibold mb-6"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Track live flights, explore global routes, and experience aviation
            like never before.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-2 w-full max-w-lg mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Input
              placeholder="Search flight number, airline, or destination..."
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 w-full"
            />
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-full">
              Search <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ✅ FEATURED FLIGHTS */}
      <section className="mt-32 w-full max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Popular Routes
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { from: "Lagos (LOS)", to: "London (LHR)", status: "On Time" },
            { from: "Abuja (ABV)", to: "Dubai (DXB)", status: "Delayed" },
            { from: "Nairobi (NBO)", to: "Paris (CDG)", status: "Boarding" },
          ].map((flight, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
            >
              <h3 className="font-semibold text-lg mb-2">
                {flight.from} → {flight.to}
              </h3>
              <p className="text-sm text-gray-600">{flight.status}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
