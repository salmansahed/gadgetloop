import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ProductCard from "../products/ProductCard";
import { Button, Chip } from "@heroui/react";
import { LuPackageOpen } from "react-icons/lu";

export default async function FeaturedProducts(): Promise<React.JSX.Element> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/top-products`,
    {
      cache: "no-store",
    },
  );
  const products = await res.json();

  return (
    <section className="w-full py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header Wrapper */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div>
          <Chip className="bg-linear-to-r from-rose-600 to-orange-600 dark:from-rose-400 dark:to-orange-400 text-white tracking-widest font-bold dark:text-transparent dark:bg-clip-text rounded-full border border-rose-200 dark:border-rose-500/30 shadow-xs">
            Exclusive Drops
          </Chip>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            Featured Premium Tech
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 mt-2 max-w-xl">
            Inspect the latest untampered, high-end electronics listed by
            verified top-tier tech distributors.
          </p>
        </div>

        {/* View All Listings Button */}
        <Link href="/explore">
          <Button
            variant="outline"
            className="rounded-xl text-indigo-700 dark:text-indigo-400 dark:bg-indigo-900/20 font-bold bg-indigo-100/50 border border-indigo-200/80 dark:border-indigo-900/80 transition-all duration-300 group w-full"
          >
            Explore All Products
            <FiArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </Link>
      </div>

      {/* Product Display Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product: any): React.JSX.Element => {
            return <ProductCard key={product._id} product={product} />;
          })
        ) : (
          <div className="col-span-full w-full flex items-center justify-center py-10 px-4">
            {/* Modern Glassmorphic Container */}
            <div className="relative w-full max-w-4xl p-8 sm:p-12 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 bg-linear-to-b from-slate-50/40 to-white/10 dark:from-zinc-900/40 dark:to-zinc-950/20 backdrop-blur-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12 overflow-hidden">
              {/* Background Glows */}
              <div className="absolute -top-20 -left-20 w-52 h-52 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Left Side: React Icon Container */}
              <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-2xl bg-linear-to-b from-slate-50 to-slate-100/60 dark:from-zinc-800/60 dark:to-zinc-900/30 border border-slate-200/50 dark:border-zinc-800/40 shadow-inner">
                <span className="absolute inset-0 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 animate-pulse" />
                <LuPackageOpen className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 dark:text-amber-400 relative z-10 animate-bounce animation-duration-[3s]" />
              </div>

              {/* Right Side: Typography & Alerts */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/40">
                  Status Alert
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight bg-linear-to-r from-slate-800 via-amber-950 to-slate-800 dark:from-zinc-100 dark:via-amber-200 dark:to-zinc-100 bg-clip-text text-transparent">
                  No Featured Items Available
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
                  We are currently updating our collection with exclusive
                  top-rated products. Check back shortly to explore our new
                  featured selections!
                </p>

                {/* Decorative Dot */}
                <div className="flex justify-center sm:justify-start items-center gap-2 pt-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500/60 dark:bg-amber-400/60 animate-ping" />
                  <span className="w-16 h-0.5 rounded-full bg-linear-to-r from-amber-500/50 to-transparent dark:from-amber-400/50" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
