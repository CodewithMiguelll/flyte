"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Lora, Inter } from "next/font/google";
import  {useFlights}  from "@/hooks/useFlight";

const lora = Lora({ weight: ["400"], subsets: ["latin"] });
const inter = Inter({ weight: ["400"], subsets: ["latin"] });


export default function ExplorePage() {
  const [filter, setFilter] = useState("All");
  const { airport, setAirport, flights, loading } = useFlights("LOS");

  const destinations = [
    {
      name: "Paris, France",
      image: "/images/chris-karidis-nnzkZNYWHaU-unsplash.jpg",
      price: 520,
      tag: "Trending",
    },
    {
      name: "Tokyo, Japan",
      image: "/images/jezael-melgoza-ryqRm-dfZbI-unsplash.jpg",
      price: 980,
      tag: "Popular",
    },
    {
      name: "Nairobi, Kenya",
      image: "/images/mustafa-omar-Zkao_QBEjk8-unsplash.jpg",
      price: 430,
      tag: "New",
    },
    {
      name: "London, UK",
      image: "/images/justin-lim-Uy3qxMj1LVc-unsplash.jpg",
      price: 560,
      tag: "Trending",
    },
    {
      name: "Accra, Ghana",
      image: "/images/yoel-winkler-zCAh6tOWFt8-unsplash.jpg",
      price: 150,
      tag: "Budget",
    },
    {
      name: "Dubai, UAE",
      image: "/images/zq-lee-VbDjv8-8ibc-unsplash.jpg",
      price: 700,
      tag: "Luxury",
    },
    {
      name: "Macchu Picchu, Hawaii",
      image: "/images/kalen-emsley-PVQ0NfcJ3PM-unsplash.jpg",
      price: 1350,
      tag: "Popular",
    },
    {
      name: "Victoria Island, Lagos",
      image: "/images/nupo-deyon-daniel-67ruAEYmp4c-unsplash.jpg",
      price: 2500,
      tag: "Local Fav",
    },
    {
      name: "Cairo, Egypt",
      image: "/images/ahmed-ezzat-7Xmf7zix9K8-unsplash.jpg",
      price: 600,
      tag: "Historic",
    },
    {
      name: "Greece, Santorini",
      image: "/images/alexandros-giannakakis-34FuSj7l-Cg-unsplash.jpg",
      price: 600,
      tag: "Historic",
    },
    {
      name: "Johannesburg, South Africa",
      image: "/images/clodagh-da-paixao-xvJVDUoGpoU-unsplash.jpg",
      price: 1600,
      tag: "Trending",
    },
    {
      name: "Yucatán Peninsula, Mexico",
      image: "/images/vera-wijermars-feathering-t7OkjhMjuAo-unsplash.jpg",
      price: 1600,
      tag: "Historic",
    },
  ];

  const tags = [
    "All",
    "Trending",
    "Popular",
    "Budget",
    "Luxury",
    "New",
    "Historic",
    "Local Fav",
  ];

  const filtered =
    filter === "All"
      ? destinations
      : destinations.filter((d) => d.tag === filter);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.h1
        className={`${lora.className} text-4xl md:text-5xl font-semibold text-center mb-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Explore Destinations
      </motion.h1>

      <motion.p
        className={`${inter.className} text-gray-600 text-center mb-12 max-w-xl mx-auto`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Discover breathtaking cities, hidden gems, and iconic wonders.
      </motion.p>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === t ? "bg-blue-600 text-white" : "hover:bg-gray-100"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Destination Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((dest, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            className="relative group rounded-xl overflow-hidden shadow-md h-72"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover group-hover:scale-110 transition"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

            <span className="absolute top-4 left-4 bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              {dest.tag}
            </span>

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-lg font-semibold">{dest.name}</h3>
              <p className="text-sm">From ${dest.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Flights Section */}
      <section className="mt-24">
        <h2
          className={`${lora.className} text-3xl font-semibold text-center mb-4`}
        >
          Live Departing Flights
        </h2>

        {/* Airport Selector */}
        <div className="flex justify-center gap-3 mb-8">
          {["LOS", "ABV", "ACC", "NBO"].map((code) => (
            <button
              key={code}
              onClick={() => setAirport(code)}
              className={`px-4 py-2 rounded-full border font-medium transition ${
                airport === code
                  ? "bg-blue-600 text-white shadow-md"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        {/* Flights Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Fetching live flights…</p>
        ) : (
          <motion.div
            layout
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {flights.map((flight) => (
              <motion.div
                key={flight.flight?.iata + flight.departure?.iata}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="p-4 rounded-xl bg-white border shadow-sm flex flex-col justify-between"
              >
                {/* Flight Route */}
                <p className="font-semibold text-lg">
                  {flight.departure?.iata} → {flight.arrival?.iata}
                </p>

                {/* Airline + Flight */}
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  {flight.airline?.logo && (
                    <Image
                      src={flight.airline.logo}
                      alt={flight.airline.name}
                      width={20}
                      height={20}
                      className="inline-block"
                    />
                  )}
                  {flight.airline?.name} · {flight.flight?.iata}
                </p>

                {/* Flight Times */}
                {flight.departure?.scheduled && flight.arrival?.scheduled && (
                  <p className="text-xs text-gray-400 mt-1">
                    Dep: {flight.departure.scheduled.slice(11, 16)} | Arr:{" "}
                    {flight.arrival.scheduled.slice(11, 16)}
                  </p>
                )}

                {/* Flight Status */}
                <span
                  className={`inline-block mt-2 text-xs px-2 py-1 rounded-md font-semibold ${
                    flight.flight_status === "active"
                      ? "bg-green-100 text-green-700"
                      : flight.flight_status === "landed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {flight.flight_status}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </section>
  );
}
