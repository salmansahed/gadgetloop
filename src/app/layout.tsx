import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import React from "react";
import Navbar from "../components/Navbar";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GadgetLoop | Buy & Sell Used Gadgets",
  description:
    "The ultimate marketplace for buying and selling second-hand laptops, smartphones, and tech accessories.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${josefinSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
