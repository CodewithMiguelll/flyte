import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Trips | FLYTE",
    template: "FLYTE | %s",
  },
  description:
    "View your past travel history, track upcoming trips, and rediscover destinations you've explored with FLYTE.",
  keywords: [
    "Flyte trips",
    "travel history",
    "flight bookings",
    "upcoming flights",
    "trip manager",
    "travel app",
  ],
  openGraph: {
    title: "Your Trips | FLYTE",
    description:
      "Browse your upcoming flights, explore trip history, and manage all your journeys in one clean, beautiful space.",
    url: "https://flyte-one.vercel.app/trips",
    siteName: "FLYTE",
    images: [
      {
        url: "/assets/og-image-trips.png",
        width: 1200,
        height: 630,
        alt: "FLYTE Trips overview illustration",
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
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
