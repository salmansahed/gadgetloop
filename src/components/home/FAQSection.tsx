"use client";

import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import {
  FiPlus,
  FiMinus,
  FiHelpCircle,
  FiShield,
  FiBriefcase,
  FiRefreshCw,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";

// Interface for FAQ item structure
interface FaqItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  iconBg: string;
}

// Tailored FAQ data grid
const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "Are all premium tech products brand new?",
    answer:
      "Yes, absolutely! Our marketplace strictly lists authentic, unboxed, or premium-grade gadgets from certified vendors. Every single item undergoes rigorous verification checks before appearing live.",
    icon: FiHelpCircle,
    accentColor: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/10 text-blue-500 dark:text-blue-400",
  },
  {
    id: "faq-2",
    question: "How does the Secured Escrow Payment keep me safe?",
    answer:
      "When you purchase a gadget, your funds are safely locked in our encrypted escrow vault. The seller does not receive a single penny until the product is safely delivered and you officially approve it.",
    icon: FiShield,
    accentColor: "from-purple-500 to-fuchsia-500",
    iconBg: "bg-purple-500/10 text-purple-500 dark:text-purple-400",
  },
  {
    id: "faq-3",
    question: "How do I clear verification and get paid as a seller?",
    answer:
      "Register your storefront credentials under your profile dashboard. Once cleared by our moderation team, earnings are credited straight to your digital wallet the exact millisecond the buyer approves the delivery.",
    icon: FiBriefcase,
    accentColor: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-500/10 text-orange-500 dark:text-amber-400",
  },
  {
    id: "faq-4",
    question: "What is your official dispute & return framework?",
    answer:
      "If the product delivered doesn't perfectly match the listed specs, you have a solid 48-hour window to trigger a dispute. Our neutral resolution team will step in and process a complete 100% refund.",
    icon: FiRefreshCw,
    accentColor: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400",
  },
];

export default function FaqSection(): React.JSX.Element {
  // Setup state to track active open accordion item
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string): void => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-24 px-6 max-w-7xl mx-auto">
      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT SIDE: Heading + Premium CTA Card (Occupies 5 columns on large screens) */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          <div>
            <Chip className="bg-linear-to-r from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400 text-white tracking-widest font-bold dark:text-transparent dark:bg-clip-text rounded-full border border-purple-200 dark:border-purple-500/30 shadow-xs">
              FAQ Framework
            </Chip>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4 leading-tight">
              Frequently Answered Inquiries
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 mt-3 leading-relaxed">
              Got unresolved blockers regarding our secure pipeline
              architecture? We have broken down our core operational blueprints.
            </p>
          </div>

          {/* Ultra-Premium Glassmorphism Support Card */}
          <div className="group relative p-6 rounded-2xl bg-slate-900/5 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-white/5 overflow-hidden shadow-xs">
            {/* Animated Background Neon Blob */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-linear-to-tr from-purple-600 to-fuchsia-600 rounded-full opacity-10 dark:opacity-20 blur-2xl group-hover:scale-120 transition-transform duration-500" />

            <div className="p-3 w-fit rounded-xl bg-purple-600 text-white shadow-md mb-4 group-hover:rotate-6 transition-transform duration-300">
              <FiMessageSquare className="w-5 h-5" />
            </div>

            <h3 className="font-bold text-lg text-slate-800 dark:text-zinc-100 mb-1">
              Still have unresolved questions?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 dark:text-zinc-400 leading-relaxed mb-5">
              Can&apos;t find what you are looking for? Our dedicated tech
              support squad is available 24/7 to clear your pipeline doubts.
            </p>

            {/* Glowing Interactive CTA Button */}
            <Link href="/contact">
              <Button className="text-xs font-bold rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group/btn w-full sm:w-fit">
                Contact Support
                <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-all" />
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Accordions (Occupies 7 columns on large screens) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqData.map((item: FaqItem): React.JSX.Element => {
            const isOpen = openId === item.id;
            const CustomIcon = item.icon;

            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl transition-all duration-300 overflow-hidden bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border ${
                  isOpen
                    ? "border-purple-500/50 shadow-[0_15px_30px_rgba(168,85,247,0.06)] scale-[1.01]"
                    : "border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-0.5"
                }`}
              >
                {/* Background Decorative Glow Grid */}
                <div
                  className={`absolute -top-12 -right-12 w-28 h-28 bg-linear-to-br ${item.accentColor} rounded-full opacity-0 transition-opacity duration-500 ${isOpen ? "opacity-10 dark:opacity-15 blur-xl" : ""}`}
                />

                {/* Accordion Head Bar Trigger */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4 bg-transparent outline-hidden cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl ${item.iconBg} transition-all duration-300 group-hover:scale-105 shrink-0`}
                    >
                      <CustomIcon className="w-4.5 h-4.5" />
                    </div>

                    <span
                      className={`font-bold text-sm sm:text-base tracking-tight transition-colors duration-200 ${
                        isOpen
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-slate-800 dark:text-zinc-200 group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-white/5 text-slate-400 dark:text-zinc-500 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400"
                        : ""
                    }`}
                  >
                    {isOpen ? (
                      <FiMinus className="w-3.5 h-3.5" />
                    ) : (
                      <FiPlus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {/* Smooth CSS Grid Dynamic Height Container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-[13.5px] text-slate-500 dark:text-zinc-400 leading-relaxed max-w-[95%] border-t border-dashed border-slate-100 dark:border-white/4">
                      <p className="mt-4">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
