import Image from "next/image";
import Link from "next/link";
import React from "react";
import salmanProfile from "../../assets/images/salmansahed.png";
import {
  FiShield,
  FiZap,
  FiCpu,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiTarget,
  FiArrowRight,
  FiCheckCircle,
  FiSearch,
  FiLock,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@heroui/react";

export default function AboutPage(): React.JSX.Element {

  interface CorePrinciple {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    desc: string;
  }

  const corePrinciples: CorePrinciple[] = [
    {
      icon: FiShield,
      title: "Military-Grade Security",
      desc: "Every gadget is verified, every transaction is encrypted with industry-leading protocols.",
    },
    {
      icon: FiTarget,
      title: "User-Centric UI",
      desc: "Technology is only useful if it's intuitive. We design for humans, not robots.",
    },
    {
      icon: FiGlobe,
      title: "Global Accessibility",
      desc: "Connecting tech lovers across borders with one unified, standard platform.",
    },
  ];

  interface HowItWorksStep {
    step: string;
    title: string;
    desc: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }

  const howItWorks: HowItWorksStep[] = [
    {
      step: "01",
      title: "Discover & List",
      desc: "Browse curated premium gadgets or list your verified device in minutes.",
      icon: FiSearch,
    },
    {
      step: "02",
      title: "Secure Escrow",
      desc: "Funds are held safely until both parties are fully satisfied with the trade.",
      icon: FiLock,
    },
    {
      step: "03",
      title: "Trade Complete",
      desc: "Receive your new gadget. We handle the friction, you enjoy the tech.",
      icon: FiCheckCircle,
    },
  ];

  interface Stat {
    label: string;
    value: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    bg: string;
  }

  const stats: Stat[] = [
    {
      label: "Active Tech Hunters",
      value: "15k+",
      icon: FiUsers,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10 dark:bg-purple-400/10",
    },
    {
      label: "Successful Trades",
      value: "8,200+",
      icon: FiTrendingUp,
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-500/10 dark:bg-cyan-400/10",
    },
    {
      label: "Verified Gadgets",
      value: "25k+",
      icon: FiZap,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-500 text-slate-900 dark:text-white pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-100 bg-purple-500/10 dark:bg-purple-900/30 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:scale-105 transition-transform cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-700 dark:text-zinc-300">
              Welcome to the future of trade
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
            Redefining <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                Tech Exchange.
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-linear-to-r from-purple-500 to-cyan-500 opacity-20 blur-sm" />
            </span>
          </h1>

          <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            GadgetLoop isn&apos;t just a platform; it&apos;s a movement. We
            empower tech enthusiasts to discover, trade, and secure their next
            favorite gadget with zero friction.
          </p>

          <div className="flex justify-center flex-wrap gap-6 pt-6">
            <Link href="/explore">
              <Button className="group px-8 h-14 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-base hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Explore Market{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#our-story">
              <Button className="px-8 h-14 rounded-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/15 text-black  dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                Read Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-40">
        {/* Our Story Section */}
        <section
          className="grid lg:grid-cols-2 gap-16 items-center scroll-m-28"
          id="our-story"
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">
              The Origin Story
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-zinc-400 leading-relaxed text-lg">
              <p>
                It started with a simple frustration: why is it so hard to trade
                premium gadgets securely? The market was cluttered with
                unreliable platforms, confusing processes, and massive security
                risks.
              </p>
              <p>
                We decided to change that. GadgetLoop was built in a small room
                with a massive vision: to create a transparent, user-first
                ecosystem where your tech assets are treated with the respect
                they deserve.
              </p>
            </div>
            <div className="flex gap-4">
              {["Verified Users", "Secure Escrow", "24/7 Support"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-zinc-200"
                  >
                    <FiCheckCircle className="text-cyan-500" /> {item}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-linear-to-r from-purple-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
            <div className="relative h-100 w-full rounded-3xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col justify-center items-center gap-8 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500">
              <div className="flex gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <FiCpu className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-500 delay-100">
                  <FiShield className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-slate-900 dark:text-white font-black text-2xl">
                  Trust Built-in
                </h3>
                <p className="text-slate-500 dark:text-zinc-500 mt-2">
                  Every pixel designed for security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-black">Core Principles</h2>
            <p className="text-slate-600 dark:text-zinc-400 text-lg">
              The foundational pillars that guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {corePrinciples.map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:-translate-y-3 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                <item.icon className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-8 group-hover:scale-125 group-hover:text-cyan-500 transition-all duration-500" />
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              How GadgetLoop Works
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 text-lg">
              A seamless, three-step journey to secure your next tech upgrade.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop layouts */}
            <div className="hidden md:block absolute top-10 left-[10%] w-[80%] h-0.5 bg-linear-to-r from-transparent via-purple-500/30 to-transparent z-0" />

            {howItWorks.map((item, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center space-y-6 group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/20 shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-500" />
                  <item.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 relative z-10 group-hover:text-cyan-500 transition-colors" />
                </div>
                <div className="space-y-3">
                  <span className="text-5xl font-black text-slate-100 dark:text-white/5 absolute -top-4 -z-10 group-hover:-translate-y-2 transition-transform duration-500">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-400 leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-12 px-6 rounded-[2.5rem] bg-white/40 dark:bg-white/2 border border-slate-300 dark:border-slate-700/80 backdrop-blur-md text-center overflow-hidden group shadow-sm">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-750" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-750" />

          <div className="relative z-10 grid md:grid-cols-3 gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/60 dark:divide-white/5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="space-y-4 py-6 md:py-2 px-4 hover:-translate-y-2 transition-all duration-300 cursor-default group/item"
              >
                <div
                  className={`w-14 h-14 mx-auto rounded-2xl ${stat.bg} flex items-center justify-center shadow-xs group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                <div className="space-y-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black dark:text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-linear-to-r group-hover/item:from-purple-600 group-hover/item:to-cyan-600 dark:group-hover/item:from-purple-400 dark:group-hover/item:to-cyan-400 transition-all duration-300">
                    {stat.value}
                  </h2>
                  <p className="text-slate-500 dark:text-zinc-400 uppercase tracking-widest text-xs font-bold font-mono">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Founder Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 p-10 md:p-16 rounded-[3rem] border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-white/5 shadow-xl dark:shadow-none hover:shadow-2xl transition-shadow duration-500">
          <div className="relative group cursor-pointer">
            {/* Glow Effect Border */}
            <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-purple-500 to-cyan-500 opacity-50 group-hover:opacity-100 blur-md transition-opacity duration-500" />

            {/* Profile Image Container */}
            <div className="relative w-48 h-48 rounded-full bg-slate-100 dark:bg-[#111] border-4 border-white dark:border-[#050505] overflow-hidden z-10 group-hover:scale-105 transition-transform duration-500">
              <Image
                src={salmanProfile}
                alt="Salman Sahed"
                placeholder="blur" // Image loading effect
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="space-y-6 text-center md:text-left flex-1">
            <div>
              <h4 className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-sm mb-2">
                Architect & Founder
              </h4>
              <h2 className="text-4xl font-black text-black dark:text-white">
                Salman Sahed
              </h2>

              {/* Social Links Group */}
              <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
                <Link
                  href="https://github.com/salmansahed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                  title="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/salman-sahed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-[#0077b5] dark:hover:text-[#0077b5] hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                  title="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/salman_sahed10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                  title="X (Twitter)"
                >
                  <FaXTwitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://salman-sahed.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                  title="Portfolio"
                >
                  <FiGlobe className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-lg">
              &quot;As a developer, I spent hundreds of hours ensuring that
              GadgetLoop isn&apos;t just beautiful, but incredibly robust. Every
              line of code, from the Next.js frontend to the backend logic, is
              written with user security and seamless UI in mind. My goal is
              simple: you enjoy the tech, we handle the complexity.&quot;
            </p>
          </div>
        </section>

        {/* Call To Action (CTA) Section */}
        <section className="text-center space-y-4 sm:space-y-8 sm:py-10">
          <h2 className="text-4xl font-black">Ready to join the loop?</h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">
            Start trading your gadgets securely today.
          </p>
          <Link href="/signup">
            <Button className="px-10 h-14 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300">
              Create Free Account
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
