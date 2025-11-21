import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav-menu";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "FLYTE | Book Flights, Track Prices, Explore Destinations",
    template: "FLYTE | %s",
  },
  description:
    "Your ultimate flight booking companion. Compare fares, track prices, manage bookings, and explore top destinations with FLYTE.",
  keywords: [
    "Flyte",
    "flight booking",
    "travel app",
    "cheap flights",
    "ticket prices",
    "flight tracker",
    "explore destinations",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "FLYTE — Your Travel, Elevated",
    description:
      "Book flights, manage trips, and explore destinations with a refined, modern experience.",
    url: "https://flyte-one.vercel.app",
    siteName: "FLYTE",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "FLYTE - Explore destinations and book your flights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
