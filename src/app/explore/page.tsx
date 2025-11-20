"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Lora, Inter, IBM_Plex_Sans } from "next/font/google";

const lora = Lora({
  weight: ["400"],
  subsets: ["latin"],
});

const ibm_Plex_Sans = IBM_Plex_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});


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

// Motion variants for smooth stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ExplorePage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? destinations
      : destinations.filter((d) => d.tag === filter);

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
        Discover breathtaking cities, hidden gems, and iconic wonders. Find your
        next escape, compare deals, and fly smarter with Flyte.
      </motion.p>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tags.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-full border transition font-medium ${
              filter === t
                ? "bg-blue-600 text-white shadow"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((dest, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6, rotate: -1 }}
            className={`relative group rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition h-64 ${
              idx % 2 === 0 ? "md:h-80" : "md:h-72"
            }`}
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition" />

            {/* Top Badge */}
            <span className="absolute top-4 left-4 bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              {dest.tag}
            </span>

            {/* Bottom Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-lg font-semibold">{dest.name}</h3>
              <p className="text-sm mt-1">From ${dest.price}</p>

              <button className="mt-3 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition">
                See Flights
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
