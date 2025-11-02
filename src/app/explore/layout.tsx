import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "FLYTE | Explore",
  description:
    "Track flights, explore destinations, and elevate your travel experience with FLYTE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <main>{children}</main>
      </body>
    </html>
  );
}
