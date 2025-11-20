"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import GradientText from "@/components/GradientText";
import { Lora, Inter, IBM_Plex_Sans } from "next/font/google";

const lora = Lora({
  weight: ["400"],
  subsets: ["latin"],
});

const ibm_Plex_Sans = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});


const ProfilePage = () => {
  const recentTrips = [
    {
      destination: "Paris, France",
      date: "Jan 15, 2025",
      image: "/images/chris-karidis-nnzkZNYWHaU-unsplash.jpg",
    },
    {
      destination: "Barcelona, Spain",
      date: "May 12, 2025",
      image: "/images/dorian-d1-aX5NLrKgRBc-unsplash.jpg",
    },
    {
      destination: "UAE, Dubai",
      date: "Mar 16, 2025",
      image: "/images/zq-lee-VbDjv8-8ibc-unsplash.jpg",
    },
    {
      destination: "Lagos, Nigeria",
      date: "Nov 03, 2025",
      image: "/images/nupo-deyon-daniel-67ruAEYmp4c-unsplash.jpg",
    },
    {
      destination: "Tokyo, Japan",
      date: "Aug 29, 2024",
      image: "/images/jezael-melgoza-ryqRm-dfZbI-unsplash.jpg",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-14">
      {/* HEADER */}
      <section className="grid grid-cols-1 md:grid-cols-2 p-4.5 gap-3 items-center">
        <div>
          <h1
            className={`${lora.className} text-3xl md:text-4xl font-bold mb-3`}
          >
            Welcome Back, John Doe!
          </h1>
          <p className={`${inter.className} text-gray-600`}>
            Here's a quick look at your Flyte activity.
          </p>
        </div>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={5}
          showBorder={false}
          className="custom-class text-3xl md:text-4xl"
        >
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />{" "}
          Flyte+ Points Earned
        </GradientText>
      </section>

      {/* USER CARD */}
      <section className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/20 flex flex-col md:flex-row items-center gap-8">
        {/* Profile Picture */}
        <div className="relative w-32 h-32">
          <Image
            src="/images/samuel-raita-RiDxDgHg7pw-unsplash.jpg"
            alt="User avatar"
            fill
            className="object-cover rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* User Details */}
        <div className="flex-1 space-y-2">
          <h2
            className={`${ibm_Plex_Sans.className} text-3xl font-bold text-gray-900`}
          >
            John Doe
          </h2>
          <p className="text-gray-600">johndoe@example.com</p>

          {/* Membership tag */}
          <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-xl mt-2 shadow-sm">
            Flyte+ Member
          </span>

          <p className="text-sm text-gray-500 mt-1">Joined: March 2024</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-gray-900">
              <CountUp to={12} duration={1.5} />
            </p>
            <p className="text-gray-600 text-sm">Trips</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">
              <CountUp to={21} duration={1.5} />
            </p>
            <p className="text-gray-600 text-sm">Countries</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">
              <CountUp to={32} duration={1.5} />
            </p>
            <p className="text-gray-600 text-sm">Cities</p>
          </div>
        </div>
      </section>

      {/* RECENT TRIPS */}
      <section>
        <h2
          className={`${ibm_Plex_Sans.className} text-2xl md:text-3xl font-bold mb-6`}
        >
          Recent Trips
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentTrips.map((trip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group relative h-64"
            >
              <Image
                src={trip.image}
                alt={trip.destination}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold">{trip.destination}</h3>
                <p className="text-white/80 text-sm mt-1">{trip.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
