import React from "react";
import { FiUsers, FiShoppingBag, FiShield, FiTrendingUp } from "react-icons/fi";

// Interface for individual statistical counter items
interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  hoverBg: string;
  hoverBorder: string;
  hoverShadow: string;
  iconBg: string;
  iconColor: string;
}

// Analytics and platform trust performance metrics data aligned with Features styling
const statsData: StatItem[] = [
  {
    id: "stat-1",
    value: "42K+",
    label: "Successful Drops",
    description: "Verified premium tech items successfully delivered.",
    icon: FiShoppingBag,
    accentColor: "from-pink-500 to-rose-500",
    hoverBg: "hover:bg-rose-50/40 dark:hover:bg-rose-950/10",
    hoverBorder: "hover:border-rose-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(244,63,94,0.12)]",
    iconBg: "bg-rose-50 dark:bg-rose-950/50",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    id: "stat-2",
    value: "99.8%",
    label: "Trust Score",
    description: "Consistently rated by our exclusive community members.",
    icon: FiShield,
    accentColor: "from-emerald-500 to-teal-500",
    hoverBg: "hover:bg-emerald-50/40 dark:hover:bg-emerald-950/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "stat-3",
    value: "150+",
    label: "Verified Distributors",
    description: "Official tech brands and certified local partners.",
    icon: FiUsers,
    accentColor: "from-blue-600 to-cyan-500",
    hoverBg: "hover:bg-blue-50/40 dark:hover:bg-blue-950/10",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)]",
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "stat-4",
    value: "$2.4M+",
    label: "Trading Volume",
    description: "Secure escrow digital transactions processed securely.",
    icon: FiTrendingUp,
    accentColor: "from-amber-500 to-orange-600",
    hoverBg: "hover:bg-amber-50/40 dark:hover:bg-amber-950/10",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)]",
    iconBg: "bg-amber-50 dark:bg-amber-950/50",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
];

export default function PlatformStats(): React.JSX.Element {
  return (
    <section className="w-full py-20 px-6 max-w-7xl mx-auto select-none border-t border-slate-100 dark:border-white/4">
      {/* Grid Layout Layout aligned perfectly with Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat: StatItem): React.JSX.Element => {
          const IconComponent: React.ComponentType<{ className?: string }> =
            stat.icon;

          return (
            <div
              key={stat.id}
              className={`group relative p-6 rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/80 dark:border-white/10 ${stat.hoverBorder} ${stat.hoverBg} ${stat.hoverShadow} transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
            >
              {/* Corner Glow Blur on Hover */}
              <div
                className={`absolute -top-10 -right-10 w-24 h-24 bg-linear-to-br ${stat.accentColor} rounded-full opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              />

              {/* Icon layout styling aligned with Features code */}
              <div
                className={`p-3.5 w-fit rounded-xl ${stat.iconBg} ${stat.iconColor} group-hover:bg-linear-to-br group-hover:${stat.accentColor} group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-110 mb-5`}
              >
                <IconComponent className="w-6 h-6" />
              </div>

              {/* Analytical Numeric Value Counter String */}
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                {stat.value}
              </span>

              {/* Primary Metric Label */}
              <h3 className="font-bold text-base text-slate-800 dark:text-zinc-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 mt-2 mb-1.5">
                {stat.label}
              </h3>

              {/* Extended Meta Content Descriptive Field */}
              <p className="text-xs sm:text-[13px] text-slate-500 dark:text-zinc-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
