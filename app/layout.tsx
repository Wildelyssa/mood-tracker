import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mood Tracker",
  description: "Track your moods daily",
};

const inter = Inter({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
