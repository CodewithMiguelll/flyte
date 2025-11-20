import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Profile | Flyte",
  description:
    "Manage your Flyte account, track your points, view recent trips, and stay organized for your next journey.",
  keywords: [
    "Flyte profile",
    "travel dashboard",
    "flight history",
    "Flyte account",
    "profile management",
  ],
  openGraph: {
    title: "Flyte Profile Dashboard",
    description:
      "Track your points, view your bookings, and personalize your travel experience with Flyte.",
    url: "https://flyte.vercel.app/profile",
    siteName: "Flyte",
    images: [
      {
        url: "/assets/og-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Flyte profile dashboard interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Page Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
