import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav-menu";
import Header from "@/components/header";


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
      <Header/>
      <body>
        {children}
      </body>
    </html>
  );
}
