import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav-menu";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Book Flights, Track Prices, and Explore the Skies | FLYTE",
  description: "Your ultimate flight booking companion. Find the best deals, track prices, and embark on unforgettable journeys with FLYTE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar/>
      <body>
        {children}
      </body>
      <Footer/>
    </html>
  );
}
