"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Plane } from "lucide-react";
import SplitText from "@/components/SplitText";
import { Lora, IBM_Plex_Sans, Inter } from "next/font/google";

/* 
Font Configurations 
  Heading: Lora

  Subheading: IBM Plex Sans

  Body: Inter
*/

const lora = Lora({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

const ibm_Plex_Sans = IBM_Plex_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

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
        <div className="absolute inset-0 bg-linear-90 from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 px-6">
          <SplitText
            tag="h1"
            text="Bringing The Skies To Your Fingertips."
            className={`${lora.className} text-5xl md:text-6xl font-semibold mb-6`}
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
            className={`${inter.className} text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto`}
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

      {/* FEATURED FLIGHTS */}
      <section className="mt-32 w-full max-w-6xl mx-auto px-4">
        <motion.h2
          className={`${ibm_Plex_Sans.className} text-2xl md:text-4xl font-semibold mb-8 text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Popular Routes
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              from: "Lagos (LOS)",
              to: "London (LHR)",
              status: "On Time",
              price: "$520",
              duration: "6h 45m",
            },
            {
              from: "Abuja (ABV)",
              to: "Dubai (DXB)",
              status: "Delayed",
              price: "$410",
              duration: "7h 10m",
            },
            {
              from: "Nairobi (NBO)",
              to: "Paris (CDG)",
              status: "Boarding",
              price: "$460",
              duration: "8h 05m",
            },
          ].map((flight, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden bg-linear-to-br from-white to-blue-50 border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-gray-800">
                  {flight.from} → {flight.to}
                </h3>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    flight.status === "On Time"
                      ? "bg-green-100 text-green-600"
                      : flight.status === "Delayed"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {flight.status}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>{flight.duration}</p>
                <p className="font-semibold text-gray-900">{flight.price}</p>
              </div>

              <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="mt-32 w-full max-w-6xl mx-auto px-4">
        <motion.h2
          className={`${ibm_Plex_Sans.className} text-2xl md:text-4xl font-semibold mb-6 text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Start Planning Your Next Trip
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              image: "/images/air-hostess-3.jpg",
              title: "Voted Best Airline Service of the Year",
              description:
                "Experience top-notch service and comfort on every flight with our award-winning airline.",
            },
            {
              image: "/images/bornil-amin-Y7F5ZRxDN6I-unsplash.jpg",
              title: "Save 30% On Your Next Flight",
              description:
                "Book now and enjoy exclusive savings on your next adventure with our special offers.",
            },
            {
              image: "/images/jezael-melgoza-ryqRm-dfZbI-unsplash.jpg",
              title: "Stopovers Made Easy",
              description:
                "Discover convenient stopover options to make your journey more enjoyable and flexible.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-32 w-full max-w-6xl mx-auto px-4">
        <motion.h2
          className={`${ibm_Plex_Sans.className} text-2xl md:text-4xl font-semibold mb-12 text-center`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why’s Flyte The Right Choice?
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              image: "/images/airport.jpg",
              icon: <Plane size={28} className="text-white mx-auto" />,
              title: "Lowest Fares",
              description:
                "Get unbeatable ticket prices and exclusive deals, so you can travel farther for less.",
            },
            {
              image: "/images/air-hostess.jpg",
              icon: <Phone size={28} className="text-white mx-auto" />,
              title: "24/7 Customer Support",
              description:
                "Our team’s got your back at every hour — real humans, real help, anytime.",
            },
            {
              image: "/images/plane-wing.jpg",
              icon: <ArrowRight size={28} className="text-white mx-auto" />,
              title: "Easy Booking",
              description:
                "Book your next adventure in seconds — smooth, intuitive, and hassle-free.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative group overflow-hidden rounded-2xl h-96 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* Text content */}
              <div className="relative z-10 flex flex-col items-center justify-end text-center text-white p-6 h-full">
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-200 max-w-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
