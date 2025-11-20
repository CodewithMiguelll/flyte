"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lora, IBM_Plex_Sans, Inter } from "next/font/google";

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

const ibm_Plex_Sans_bold = IBM_Plex_Sans({
  weight: ["700"],
  subsets: ["latin"],
});

const mockActiveFlight = {
  airline: "Air Peace",
  airlineLogo: "/images/Air-Peace-Logo.png",
  flightNo: "P4-732",
  from: "Lagos (LOS)",
  to: "Abuja (ABV)",
  date: "Dec 22, 2025",
  time: "14:35",
  gate: "B12",
  status: "On Time",
};

const mockUpcoming = [
  {
    id: 1,
    from: "Abuja (ABV)",
    to: "Accra (ACC)",
    date: "Jan 04, 2026",
    airline: "Ibom Air",
    airlineLogo: "/images/Ibom_air_Logo.png",
  },
  {
    id: 2,
    from: "Accra (ACC)",
    to: "Nairobi (NBO)",
    date: "Feb 16, 2026",
    airline: "Kenya Airways",
    airlineLogo: "/images/kenyan-airways-logo.png",
  },
];

const BookingsPage = () => {
  const hasActiveFlight = true;
  const hasUpcoming = mockUpcoming.length > 0;

  return (
    <div className="p-5 pb-24 space-y-10">
      {/* Header */}
      <section>
        <h1 className={`${lora.className} text-3xl font-bold`}>Your Bookings</h1>
        <p className={`${inter.className} text-base text-gray-600 mt-1`}>
          Keep tabs on your journeys, from runway to touchdown.
        </p>
      </section>
      {/* Active Flight */}
      <section>
        <h2 className={`${ibm_Plex_Sans_bold.className} text-xl font-semibold mb-3`}>Active Flight</h2>
    
        {hasActiveFlight ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 backdrop-blur-md relative overflow-hidden"
          >
            {/* Airline Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                {mockActiveFlight.airlineLogo && (
                  <Image
                    src={mockActiveFlight.airlineLogo}
                    alt={`${mockActiveFlight.airline} logo`}
                    width={32}
                    height={32}
                    className="rounded"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900">
                    {mockActiveFlight.airline}
                  </p>
                  <p className="text-sm text-gray-500">
                    Flight {mockActiveFlight.flightNo}
                  </p>
                </div>
              </div>

              <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-md">
                {mockActiveFlight.status}
              </span>
            </div>

            {/* Route */}
            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-xl font-bold">{mockActiveFlight.from}</p>
                <p className="text-sm text-gray-500">{mockActiveFlight.time}</p>
              </div>

              <Image
                src="/images/airplane-svgrepo-com.svg"
                alt="plane icon"
                width={42}
                height={42}
                className="opacity-60"
              />

              <div className="text-right">
                <p className="text-xl font-bold">{mockActiveFlight.to}</p>
                <p className="text-sm text-gray-500">
                  Gate {mockActiveFlight.gate}
                </p>
              </div>
            </div>

            {/* Footer */}
            <p className="text-sm text-gray-600 mt-1">
              Departure:{" "}
              <span className="font-semibold">{mockActiveFlight.date}</span>
            </p>
          </motion.div>
        ) : (
          <p className="text-gray-500 text-sm">
            No active flights at the moment.
          </p>
        )}
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Upcoming Trips */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Upcoming Trips</h2>

        {hasUpcoming ? (
          <div className="grid gap-4">
            {mockUpcoming.map((trip) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: trip.id * 0.05 }}
                className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 backdrop-blur-md flex items-center justify-between"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {trip.from} → {trip.to}
                  </p>
                  <p className="text-sm text-gray-500">{trip.date}</p>
                </div>

                {trip.airlineLogo ? (
                  <Image
                    src={trip.airlineLogo}
                    alt={trip.airline}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                ) : (
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md">
                    {trip.airline}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No upcoming trips yet.</p>
        )}
      </section>
    </div>
  );
};

export default BookingsPage;
