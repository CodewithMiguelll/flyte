"use client";
import { motion } from "framer-motion";
import { Rocket, Briefcase, StarsIcon } from "lucide-react";
import Image from "next/image";

export default function ExperiencePage() {
  const benefits = [
    {
      title: "Flyte+ Membership",
      desc: "Unlock lounges, priority check-ins, and exclusive partner perks with every flight.",
      icon: <Briefcase className="text-white w-8 h-8" />,
      image: "/images/kenjiro-yagi-TyS6oIM1y58-unsplash.jpg",
    },
    {
      title: "Travel Points",
      desc: "Earn FlytePoints each time you fly — redeem them for meals, upgrades, or even free trips.",
      icon: <StarsIcon className="text-white w-8 h-8" />,
      image: "/images/air-hostess-3.jpg",
    },
    {
      title: "Priority Boarding",
      desc: "Glide past queues and be among the first to board. Your time matters.",
      icon: <Rocket className="text-white w-8 h-8" />,
      image: "/images/clint-patterson-eFfrnMm3Rlo-unsplash.jpg",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <header className="relative rounded-2xl overflow-hidden mb-20 h-96">
        <Image
          src="/images/nicolas-j-leclercq-84qOq203MS0-unsplash.jpg"
          alt="Flyte Experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            Your Journey, Upgraded
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl max-w-2xl"
          >
            Experience the world through comfort, rewards, and next-level
            privileges designed for explorers like you.
          </motion.p>
          <button className="mt-6 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-100 transition">
            Join Flyte+
          </button>
        </div>
      </header>

      {/* Benefits Section */}
      <section aria-labelledby="benefits-heading" className="mb-24">
        <div className="text-center mb-12">
          <h2
            id="benefits-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Benefits of Flying with Flyte
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Every flight should be more than just travel — it should be a
            reward. With Flyte, every mile brings you closer to new perks,
            exclusive experiences, and effortless luxury.
          </p>
        </div>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.6 },
            },
          }}
        >
          {benefits.map((benefit, idx) => (
            <motion.article
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative rounded-xl overflow-hidden shadow-lg group h-96"
            >
              {/* Background Image */}
              <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dim Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent z-10" />

              {/* Content */}
              <div className="absolute bottom-0 z-20 p-6 text-white">
                <div className="mb-3">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-100/90 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              {/* Large Background Label */}
              <h2 className="absolute inset-0 flex items-center justify-center text-6xl font-extrabold text-white/10 tracking-tight z-0">
                {benefit.title.split(" ")[0].toUpperCase()}
              </h2>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-linear-to-r from-blue-700 to-blue-500 text-white rounded-2xl py-16 px-8 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Experience the Future of Flight?
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-blue-100 text-lg">
          Join Flyte+ today and start earning travel rewards that actually
          matter.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-100 transition"
        >
          Get Started
        </motion.button>
      </section>
    </main>
  );
}
