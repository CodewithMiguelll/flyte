"use client";
import { motion } from "framer-motion";
import { Rocket, Briefcase, StarsIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // optional utility if you're using it

export default function ExperiencePage() {
  const benefits = [
    {
      title: "Flyte+ Membership",
      desc: "Unlock lounges, priority check-ins, and exclusive partner perks with every flight.",
      icon: <Briefcase className="text-white w-8 h-8" />,
      image: "/images/kenjiro-yagi-TyS6oIM1y58-unsplash.jpg",
      tag: "Elite",
    },
    {
      title: "Travel Points",
      desc: "Earn FlytePoints each time you fly — redeem them for meals, upgrades, or even free trips.",
      icon: <StarsIcon className="text-white w-8 h-8" />,
      image: "/images/air-hostess-3.jpg",
      tag: "Rewards",
    },
    {
      title: "Priority Boarding",
      desc: "Glide past queues and be among the first to board. Your time matters.",
      icon: <Rocket className="text-white w-8 h-8" />,
      image: "/images/clint-patterson-eFfrnMm3Rlo-unsplash.jpg",
      tag: "Speed",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* ======================= HERO ======================= */}
      <header className="relative rounded-2xl overflow-hidden mb-24 h-136 shadow-xl">
        <Image
          src="/images/nicolas-j-leclercq-84qOq203MS0-unsplash.jpg"
          alt="Flyte Experience"
          fill
          className="object-cover scale-105 brightness-90"
          priority
        />

        {/* Soft black overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Glass Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl max-w-3xl text-center shadow-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow tracking-tight">
            Your Journey, Elevated
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mt-4 leading-relaxed">
            Travel meets comfort, rewards, and pure luxury. Let Flyte redefine
            how you move.
          </p>

          <motion.button
            whileHover={{ scale: 1.07 }}
            className="mt-8 bg-white text-blue-700 font-semibold px-10 py-3 rounded-xl shadow-md hover:bg-blue-100 transition"
          >
            Join Flyte+
          </motion.button>
        </motion.div>
      </header>

      {/* ======================= BENEFITS ======================= */}
      <section className="mb-28">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            Benefits of Flying Flyte
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Every mile counts — perks, rewards, and convenience designed for the
            modern explorer.
          </p>
        </div>

        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.18, duration: 0.6 },
            },
          }}
        >
          {benefits.map((b, idx) => (
            <motion.article
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              className="relative h-104 rounded-2xl overflow-hidden shadow-xl group"
            >
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1200"
              />

              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* Tag */}
              <span className="absolute top-4 left-4 bg-white/20 text-white px-4 py-1 text-sm rounded-full backdrop-blur-md border border-white/30 shadow">
                {b.tag}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <div className="mb-4">{b.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 drop-shadow">
                  {b.title}
                </h3>
                <p className="text-white/85 leading-relaxed tracking-wide">
                  {b.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ======================= CTA ======================= */}
      <section className="text-center bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-2xl py-16 px-8 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Step Into a New Kind of Travel
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-blue-100 text-lg leading-relaxed">
          Earn rewards. Skip the lines. Fly with comfort. Flyte+ was made for
          you.
        </p>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-700 font-semibold py-3 px-10 rounded-xl shadow-lg hover:bg-blue-100 transition"
        >
          Get Started
        </motion.button>
      </section>
    </main>
  );
}
