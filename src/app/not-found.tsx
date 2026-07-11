import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound(): React.JSX.Element {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-950 px-6 py-12 relative overflow-hidden select-none transition-colors duration-300">
      {/* Dynamic Cyber Grid with Soft Intersections */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#818cf80a_1px,transparent_1px),linear-gradient(to_bottom,#818cf80a_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-100" />

      {/* Futuristic Deep Glowing Orbs (Indigo & Purple Theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-full -translate-y-1/2 w-96 h-96 bg-linear-to-tr from-purple-600 to-indigo-600 dark:from-purple-700/20 dark:to-indigo-600/20 rounded-full blur-[120px] sm:blur-[160px] opacity-20 dark:opacity-30 animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-indigo-500 to-fuchsia-500 dark:from-indigo-600/20 dark:to-fuchsia-600/20 rounded-full blur-[120px] sm:blur-[160px] opacity-20 dark:opacity-30 animate-pulse pointer-events-none" />

      {/* Floating Geometric Elements for Visual Depth */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full border border-purple-500/30 animate-bounce" />
      <div className="absolute bottom-12 right-12 w-6 h-6 rounded-md border border-indigo-500/20 rotate-45 animate-spin animation-duration-[12s]" />

      {/* Premium Glassmorphic Identity Card */}
      <div className="relative max-w-lg w-full text-center flex flex-col items-center z-10 p-8 sm:p-14 rounded-3xl bg-white/60 dark:bg-slate-900/40 backdrop-blur-2xl border border-white dark:border-white/4 shadow-[0_30px_60px_rgba(99,102,241,0.05)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
        {/* Holographic Glowing Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-500/20 text-[11px] font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
          System Outage
        </div>

        {/* 3D Stacked 404 Text Treatment */}
        <div className="relative mb-4 group">
          <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tighter bg-linear-to-b from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-purple-500 bg-clip-text text-transparent drop-shadow-md select-none">
            404
          </h1>
          {/* Subtle Cyber Text Shadow effect behind the text */}
          <div className="absolute inset-0 text-8xl sm:text-9xl font-extrabold tracking-tighter text-indigo-500/5 dark:text-purple-500/10 blur-[2px] select-none pointer-events-none transform translate-y-1 group-hover:translate-y-2 transition-transform duration-300">
            404
          </div>
        </div>

        {/* Unique Copywriting */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-3">
          Page Not Found
        </h2>

        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-xs mx-auto">
          The node you are trying to fetch is currently unreachable or has been
          purged from our active stack.
        </p>

        {/* Premium Smooth Glass CTA Button */}
        <Link href="/" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm tracking-wide transition-all duration-300 px-12 h-13 shadow-[0_8px_25px_rgba(99,102,241,0.25)] dark:shadow-[0_8px_30px_rgba(168,85,247,0.2)] hover:shadow-[0_12px_35px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 rounded-xl flex items-center justify-center gap-2 group">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-all duration-300" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
