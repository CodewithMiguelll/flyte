"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fares = [
  {
    src: "/images/chris-karidis-nnzkZNYWHaU-unsplash.jpg",
    label: "Lagos → Paris",
    price: "₦230,000",
  },
  {
    src: "/images/zq-lee-VbDjv8-8ibc-unsplash.jpg",
    label: "Abuja → Dubai",
    price: "₦180,000",
  },
  {
    src: "/images/justin-lim-Uy3qxMj1LVc-unsplash.jpg",
    label: "Nairobi → London",
    price: "₦250,000",
  },
  {
    src: "/images/yoel-winkler-zCAh6tOWFt8-unsplash.jpg",
    label: "Accra → New York",
    price: "₦310,000",
  },
  {
    src: "/images/finding-dan-dan-grinwis-IAytV8T2Qvc-unsplash.jpg",
    label: "Cape Town → Tokyo",
    price: "₦400,000",
  },
  {
    src: "/images/chris-karidis-nnzkZNYWHaU-unsplash.jpg",
    label: "Lagos → Paris",
    price: "₦230,000",
  },
];

const MasonryGrid = () => {
  return (
    <section className="mt-32 max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-2xl md:text-4xl font-semibold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Fares by Destination
      </motion.h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {fares.map((fare, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src={fare.src}
              alt={fare.label}
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white font-medium text-sm">{fare.label}</p>
              <p className="text-blue-400 text-sm">{fare.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MasonryGrid;
