import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FiShoppingBag, FiPlusCircle } from "react-icons/fi";

export default function HeroSection(): React.JSX.Element {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] w-full flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* 📦 Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* 🏷️ Premium Marketplace Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-500/30 text-[11px] font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
          The Ultimate Gadget Marketplace
        </div>

        {/* 👑 Mega E-Commerce Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
          Buy, Sell & Trade <br className="hidden sm:inline" />
          <span className="bg-linear-to-r from-purple-600 via-indigo-600 to-purple-600 dark:from-purple-400 dark:via-indigo-300 dark:to-fuchsia-400 bg-clip-text text-transparent drop-shadow-sm">
            Premium Gadgets
          </span>
        </h1>

        {/* 📄 English Brand-New Product Focused Description */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-500 dark:text-zinc-400 leading-relaxed mb-10 px-4">
          Discover the latest brand-new tech drops from verified sellers, or
          list your newly launched products to reach millions of tech
          enthusiasts instantly. Fast, secure, and built for next-gen commerce.
        </p>

        {/* ⚡ Call-To-Action Buttons (Buy & Sell) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6">
          {/* Action 1: Buy Gadgets */}
          <Link href="/explore" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 tracking-wide transition-all duration-300 px-8 h-12 shadow-[0_8px_25px_rgba(99,102,241,0.25)] dark:shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_12px_35px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 rounded-xl gap-2 group">
              <FiShoppingBag className="text-base group-hover:scale-110 transition-all duration-300" />
              Explore Shop
            </Button>
          </Link>

          {/* Action 2: Sell Gadget */}
          <Link href="/items/add" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/8 text-slate-700 dark:text-zinc-200 tracking-wide transition-all duration-300 px-8 h-12 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:-translate-y-0.5 rounded-xl gap-2 group shadow-xs">
              <FiPlusCircle className="text-base group-hover:rotate-90 transition-all duration-300" />
              Start Selling
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
