import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import BackgroundGraph from "@/components/graph/BackgroundGraph";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Blasco",
  description:
    "Digital laboratory exploring artificial intelligence, computational social science and digital fabrication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen bg-[#FCFCFA] text-[#111827] overflow-x-hidden">
        {/* Permanent Knowledge Graph */}
        <BackgroundGraph />

        {/* Entire application */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}