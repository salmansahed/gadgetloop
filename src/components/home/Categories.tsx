import React from "react";
import Link from "next/link";
import {
  FiSmartphone,
  FiWatch,
  FiHeadphones,
  FiMonitor,
  FiCpu,
} from "react-icons/fi";
import { IoGameController } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

// Category data structure with styling configurations
interface CategoryItem {
  id: string;
  name: string;
  count: number;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  gradient: string;
  hoverBg: string;
  hoverBorder: string;
  hoverShadow: string;
  iconBg: string;
  iconColor: string;
}

// Marketplace category items configuration
const categoriesData: CategoryItem[] = [
  {
    id: "cat-1",
    name: "Smartphones & Tablets",
    count: 1420,
    slug: "smartphones-tablets",
    icon: FiSmartphone,
    description: "Latest flagship & mid-range drops",
    gradient: "from-blue-600 to-cyan-500",
    hoverBg: "hover:bg-blue-50/40 dark:hover:bg-blue-950/10",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]",
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "cat-2",
    name: "Smartwatches & Wearables",
    count: 850,
    slug: "smartwatches-wearables",
    icon: FiWatch,
    description: "Next-gen fitness trackers & watches",
    gradient: "from-amber-500 to-orange-600",
    hoverBg: "hover:bg-amber-50/40 dark:hover:bg-amber-950/10",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)]",
    iconBg: "bg-amber-50 dark:bg-amber-950/50",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "cat-3",
    name: "Wireless Audio & Sound",
    count: 930,
    slug: "wireless-audio",
    icon: FiHeadphones,
    description: "Premium earbuds, headphones & speakers",
    gradient: "from-purple-600 to-fuchsia-500",
    hoverBg: "hover:bg-purple-50/40 dark:hover:bg-purple-950/10",
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]",
    iconBg: "bg-purple-50 dark:bg-purple-950/50",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "cat-4",
    name: "Gaming & Consoles",
    count: 640,
    slug: "gaming-consoles",
    icon: IoGameController,
    description: "Powerful rigs, setups, and accessories",
    gradient: "from-rose-600 to-red-500",
    hoverBg: "hover:bg-rose-50/40 dark:hover:bg-rose-950/10",
    hoverBorder: "hover:border-rose-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(244,63,94,0.15)]",
    iconBg: "bg-rose-50 dark:bg-rose-950/50",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    id: "cat-5",
    name: "Laptops & Computers",
    count: 710,
    slug: "laptops-computers",
    icon: FiMonitor,
    description: "High-performance work & gaming laptops",
    gradient: "from-indigo-600 to-blue-500",
    hoverBg: "hover:bg-indigo-50/40 dark:hover:bg-indigo-950/10",
    hoverBorder: "hover:border-indigo-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/50",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "cat-6",
    name: "Smart Home & Automation",
    count: 420,
    slug: "smart-home",
    icon: FiCpu,
    description: "IoT devices, smart displays & ecosystem",
    gradient: "from-emerald-600 to-teal-500",
    hoverBg: "hover:bg-emerald-50/40 dark:hover:bg-emerald-950/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export default function Categories(): React.JSX.Element {
  return (
    <section className="w-full py-20 px-6 max-w-7xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div>
          <span className="text-xs font-bold tracking-widest bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 text-white dark:text-transparent dark:bg-clip-text px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-500/30 shadow-xs">
            Browse Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            Top Tech Categories
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 mt-2 max-w-xl">
            Explore newly launched, brand-new premium devices categorized by
            your tech lifestyle.
          </p>
        </div>

        {/* View All Button */}
        <Link
          href="/explore" 
          className="w-full md:w-auto justify-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 flex items-center gap-1 group whitespace-nowrap bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl hover:shadow-xs"
        >
          See All Categories
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            <FaArrowRight />
          </span>
        </Link>
      </div>

      {/* Categories Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesData.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className={`group relative block p-6 rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 ${category.hoverBorder} ${category.hoverBg} ${category.hoverShadow} transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
            >
              {/* Dynamic Radial Ambient Blur Ring */}
              <div
                className={`absolute -top-10 -right-10 w-24 h-24 bg-linear-to-br ${category.gradient} rounded-full opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              />

              <div className="relative z-10 flex items-start gap-4">
                {/* Interactive Icon Container */}
                <div
                  className={`p-4 rounded-xl ${category.iconBg} ${category.iconColor} group-hover:bg-linear-to-br group-hover:${category.gradient} group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-110 group-hover:rotate-3`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Card Content details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base text-slate-800 dark:text-zinc-100 group-hover:text-slate-900 dark:hover:text-white transition-colors duration-300 truncate mb-0.5">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-zinc-500 line-clamp-1 mb-4">
                    {category.description}
                  </p>

                  {/* Stock/Product Count Badge */}
                  <span
                    className={`inline-block text-[11px] font-bold ${category.iconColor} bg-slate-100/60 dark:bg-slate-800/40 group-hover:bg-white dark:group-hover:bg-slate-950 px-2.5 py-0.5 rounded-md border border-slate-200/40 dark:border-white/4 transition-colors duration-300`}
                  >
                    {category.count.toLocaleString()} Products
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
