import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import React from "react";
import Navbar from "../components/global/Navbar";
import { Providers } from "./providers";

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${josefinSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
