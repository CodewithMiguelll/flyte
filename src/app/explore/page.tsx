"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Paris, France",
    image: "/images/chris-karidis-nnzkZNYWHaU-unsplash.jpg",
    price: 520,
  },
  {
    name: "Tokyo, Japan",
    image: "/images/jezael-melgoza-ryqRm-dfZbI-unsplash.jpg",
    price: 980,
  },
  {
    name: "Nairobi, Kenya",
    image: "/images/mustafa-omar-Zkao_QBEjk8-unsplash.jpg",
    price: 430,
  },
  {
    name: "London, UK",
    image: "/images/justin-lim-Uy3qxMj1LVc-unsplash.jpg",
    price: 560,
  },
  {
    name: "Accra, Ghana",
    image: "/images/yoel-winkler-zCAh6tOWFt8-unsplash.jpg",
    price: 150,
  },
  {
    name: "Dubai, UAE",
    image: "/images/zq-lee-VbDjv8-8ibc-unsplash.jpg",
    price: 700,
  },
  {
    name: "Macchu Picchu, Hawaii",
    image: "/images/kalen-emsley-PVQ0NfcJ3PM-unsplash.jpg",
    price: 450,
  },
  {
    name: "Victoria Island, Lagos",
    image: "/images/nupo-deyon-daniel-67ruAEYmp4c-unsplash.jpg",
    price: 500,
  },
  {
    name: "Cairo, Egypt",
    image: "/images/ahmed-ezzat-7Xmf7zix9K8-unsplash.jpg",
    price: 600,
  },
];

export default function ExplorePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl md:text-5xl font-semibold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Explore Destinations
      </motion.h1>
      <motion.p
        className="text-gray-600 text-center mb-12 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Discover amazing destinations around the world. Find your next escape,
        compare flight deals, and book your journey with Flyte.
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest, idx) => (
          <motion.div
            key={idx}
            className="relative h-64 md:h-72 lg:h-80 group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-lg font-semibold">{dest.name}</h3>
              <p className="text-sm mt-1">From ${dest.price}</p>
              <button className="mt-3 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition">
                See Flights
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
