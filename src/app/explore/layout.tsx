import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Destinations | Flyte",
  description:
    "Discover the world's most captivating destinations with Flyte. Find flight deals, plan your next getaway, and unlock new adventures wherever you go.",
  keywords: [
    "Flyte travel",
    "flight booking",
    "cheap flights",
    "travel destinations",
    "explore trips",
    "vacation deals",
  ],
  openGraph: {
    title: "Explore the World with Flyte ✈️",
    description:
      "From Paris to Tokyo, discover breathtaking destinations and exclusive flight deals with Flyte.",
    url: "https://flyte.com/explore",
    siteName: "Flyte",
    images: [
      {
        url: "/images/og-explore.jpg",
        width: 1200,
        height: 630,
        alt: "Explore destinations around the world with Flyte",
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
      <body className="antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
