"use client"
import {motion} from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/SplitText";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 px-4">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mt-20">
        <SplitText
          text="Flight Tracking For The Future!"
          className="text-4xl md:text-5xl font-semibold mb-6"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <motion.p
          className="text-gray-600 mb-10 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Discover flights, explore destinations, and experience aviation like
          never before.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Input
            placeholder="Search flight number, airline or destination..."
            className="w-full max-w-md"
          />
          <Button className="flex items-center gap-2">
            Search <ArrowRight size={16} />
          </Button>
        </motion.div>
      </section>

      {/* Featured Flights */}
      <section className="mt-32 w-full max-w-6xl">
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Popular Routes
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
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
