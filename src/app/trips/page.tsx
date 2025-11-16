"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Plane } from "lucide-react";

export default function TripsPage() {
  // Mock trips 
  const trips = [
    {
      id: 1,
      destination: "Paris, France",
      date: "Aug 14, 2025",
      image: "/images/chris-karidis-nnzkZNYWHaU-unsplash.jpg",
    },
    {
      id: 2,
      destination: "Nairobi, Kenya",
      date: "Apr 2, 2025",
      image: "/images/mustafa-omar-Zkao_QBEjk8-unsplash.jpg",
    },
    {
      id: 3,
      destination: "Machu Picchu, Peru",
      date: "Jan 29, 2025",
      image: "/images/kalen-emsley-PVQ0NfcJ3PM-unsplash.jpg",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* ======================= HEADER ======================= */}
      <section className="mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Your Trips
        </h1>
        <p className="mt-3 text-gray-600 max-w-xl">
          Track your journeys, revisit your adventures, and get inspired for
          your next escape.
        </p>
      </section>

      {/* ======================= TRIPS GRID ======================= */}
      {trips.length > 0 ? (
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.12, duration: 0.6 },
            },
          }}
        >
          {trips.map((trip) => (
            <motion.div
              key={trip.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow-md group h-80 cursor-pointer"
            >
              {/* Trip Image */}
              <Image
                src={trip.image}
                alt={trip.destination}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-900"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-2xl font-bold drop-shadow">
                  {trip.destination}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-white/90">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{trip.date}</span>
                </div>
              </div>

              {/* Floating Icon */}
              <Plane className="absolute top-4 right-4 text-white/90 w-7 h-7 drop-shadow" />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        // ======================= EMPTY STATE =======================
        <div className="text-center py-20">
          <MapPin className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">No trips yet</h3>
          <p className="text-gray-500 mt-2">
            When you start your journey, your trips will appear here.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Explore Destinations
          </button>
        </div>
      )}
    </main>
  );
}
