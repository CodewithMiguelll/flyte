import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Flyte",
  description: "Flight Tracking For The Future!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
