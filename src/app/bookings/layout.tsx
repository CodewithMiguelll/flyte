import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Bookings | Flyte",
  description:
    "View your upcoming flights, past trips, and manage your travel bookings effortlessly with Flyte.",
  keywords: [
    "Flyte bookings",
    "flight reservations",
    "travel itinerary",
    "upcoming flights",
    "past trips",
    "manage bookings",
  ],
  openGraph: {
    title: "Your Bookings on Flyte",
    description:
      "Access and manage all your travel bookings from one convenient dashboard. Fly smarter with Flyte.",
    url: "https://flyte-one.vercel.app/bookings",
    siteName: "Flyte",
    images: [
      {
        url: "/assets/og-images-bookings.png",
        width: 1200,
        height: 630,
        alt: "Access and manage your flight bookings on Flyte",
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
        {children}
      </body>
    </html>
  );
}
