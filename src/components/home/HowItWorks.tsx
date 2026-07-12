"use client";

import React, { useState } from "react";
import {
  FiSearch,
  FiShield,
  FiPackage,
  FiUserPlus,
  FiPlusCircle,
  FiDollarSign,
} from "react-icons/fi";

// Interface for individual step structure
interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  hoverBg: string;
  hoverBorder: string;
  hoverShadow: string;
  iconBg: string;
  iconColor: string;
}

// Buyer process workflow steps
const buyerSteps: StepItem[] = [
  {
    id: "buy-1",
    stepNumber: "01",
    title: "Browse Products",
    description:
      "Explore authentic, unboxed, and premium tech drops from verified vendors.",
    icon: FiSearch,
    accentColor: "from-blue-600 to-cyan-500",
    hoverBg: "hover:bg-blue-50/40 dark:hover:bg-blue-950/10",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)]",
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "buy-2",
    stepNumber: "02",
    title: "Secure Escrow Payment",
    description:
      "Your money is kept 100% safe. Funds are released only after you approve the gadget.",
    icon: FiShield,
    accentColor: "from-purple-600 to-fuchsia-500",
    hoverBg: "hover:bg-purple-50/40 dark:hover:bg-purple-950/10",
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)]",
    iconBg: "bg-purple-50 dark:bg-purple-950/50",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "buy-3",
    stepNumber: "03",
    title: "Receive Fast Delivery",
    description:
      "Get your product shipped directly to your doorstep with real-time package tracking.",
    icon: FiPackage,
    accentColor: "from-emerald-600 to-teal-500",
    hoverBg: "hover:bg-emerald-50/40 dark:hover:bg-emerald-950/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

// Seller process workflow steps
const sellerSteps: StepItem[] = [
  {
    id: "sell-1",
    stepNumber: "01",
    title: "Create Account",
    description:
      "Register your digital storefront and clear our strict top-tier vendor verification.",
    icon: FiUserPlus,
    accentColor: "from-orange-500 to-amber-500",
    hoverBg: "hover:bg-amber-50/40 dark:hover:bg-amber-950/10",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)]",
    iconBg: "bg-amber-50 dark:bg-amber-950/50",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "sell-2",
    stepNumber: "02",
    title: "List New Gadget",
    description:
      "Upload pristine product details, photos, and set your own fixed premium price tag.",
    icon: FiPlusCircle,
    accentColor: "from-pink-500 to-rose-500",
    hoverBg: "hover:bg-rose-50/40 dark:hover:bg-rose-950/10",
    hoverBorder: "hover:border-rose-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(244,63,94,0.12)]",
    iconBg: "bg-rose-50 dark:bg-rose-950/50",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    id: "sell-3",
    stepNumber: "03",
    title: "Get Paid Instantly",
    description:
      "Receive direct balance transfers into your wallet the millisecond the buyer confirms data.",
    icon: FiDollarSign,
    accentColor: "from-indigo-600 to-blue-500",
    hoverBg: "hover:bg-indigo-50/40 dark:hover:bg-indigo-950/10",
    hoverBorder: "hover:border-indigo-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/50",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
];

export default function HowItWorks(): React.JSX.Element {
  // Pure React State for managing active tabs
  const [activeTab, setActiveTab] = useState<"buyers" | "sellers">("buyers");

  // Reusable card grid function
  const renderStepGrid = (steps: StepItem[]): React.JSX.Element => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {steps.map((step: StepItem): React.JSX.Element => {
        const IconComponent = step.icon;

        return (
          <div
            key={step.id}
            className={`group relative p-6 rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/80 dark:border-white/10 ${step.hoverBorder} ${step.hoverBg} ${step.hoverShadow} transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
          >
            <div
              className={`absolute -top-10 -right-10 w-24 h-24 bg-linear-to-br ${step.accentColor} rounded-full opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-xl transition-opacity duration-300`}
            />

            <span
              className={`absolute top-4 right-5 text-3xl font-black opacity-10 dark:opacity-5 group-hover:opacity-20 transition-opacity duration-300 ${step.iconColor}`}
            >
              {step.stepNumber}
            </span>

            <div
              className={`p-3.5 w-fit rounded-xl ${step.iconBg} ${step.iconColor} group-hover:bg-linear-to-br group-hover:${step.accentColor} group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-110 mb-5`}
            >
              <IconComponent className="w-6 h-6" />
            </div>

            <h3 className="font-bold text-base text-slate-800 dark:text-zinc-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 mb-2">
              {step.title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 dark:text-zinc-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="w-full py-20 px-6 max-w-7xl mx-auto">
      {/* Centered Header Layout */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold tracking-widest bg-linear-to-r from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400 text-white dark:text-transparent dark:bg-clip-text px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-500/30 shadow-xs">
          How It Works
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
          Trade Premium Tech in 3 Simple Steps
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 mt-2">
          Whether you&apos;re hunting for the latest exclusive gadgets or
          launching your verified storefront, our ecosystem makes it effortless
          and 100% secure.
        </p>
      </div>

      {/* 100% Error-Free Custom Tailwind Tabs */}
      <div className="flex flex-col items-center w-full">
        {/* Tab Buttons */}
        <div className="flex gap-8 w-full border-b border-slate-200 dark:border-white/10 justify-center">
          <button
            onClick={() => setActiveTab("buyers")}
            className={`px-4 py-3 text-sm font-bold transition-all duration-300 border-b-2 relative -bottom-px ${
              activeTab === "buyers"
                ? "border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400"
                : "border-transparent text-slate-500 dark:text-zinc-500 hover:text-slate-800 dark:hover:text-zinc-300"
            }`}
          >
            For Smart Buyers
          </button>
          <button
            onClick={() => setActiveTab("sellers")}
            className={`px-4 py-3 text-sm font-bold transition-all duration-300 border-b-2 relative -bottom-px ${
              activeTab === "sellers"
                ? "border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400"
                : "border-transparent text-slate-500 dark:text-zinc-500 hover:text-slate-800 dark:hover:text-zinc-300"
            }`}
          >
            For Premium Sellers
          </button>
        </div>

        {/* Dynamic Tab Content rendering */}
        <div className="w-full">
          {activeTab === "buyers"
            ? renderStepGrid(buyerSteps)
            : renderStepGrid(sellerSteps)}
        </div>
      </div>
    </section>
  );
}
