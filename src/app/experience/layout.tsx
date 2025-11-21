import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flyte Experiences",
  description:
    "Unlock unforgettable travel experiences, curated adventures, and Flyte+ exclusive perks designed to elevate your journey.",
  keywords: [
    "Flyte experiences",
    "travel adventures",
    "premium travel",
    "Flyte+ perks",
    " curated trips",
  ],
  openGraph: {
    title: "Explore Flyte Experiences",
    description:
      "Discover curated activities, unforgettable adventures, and Flyte+ exclusive experiences around the world.",
    url: "https://flyte-one.vercel.app/experience",
    siteName: "Flyte",
    images: [
      {
        url: "/assets/og-image-experience.png",
        width: 1200,
        height: 630,
        alt: "Flyte immersive experience banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
