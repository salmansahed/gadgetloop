"use client";

import { Input, Button, Form, TextField, FieldError } from "@heroui/react";
import { FiSend, FiZap } from "react-icons/fi";
import { toast } from "react-toastify";

export default function Newsletter(): React.JSX.Element {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    toast.success(
      "Thank you for subscribing! We'll keep you updated on the latest tech drops.",
      {
        position: "top-center",
      },
    );
    console.log("🚀 ~ handleSubscribe ~ userData:", userData);
    e.currentTarget.reset();
  };

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 overflow-hidden">
      {/* The Core Floating Dark Canvas (Always Dark for Premium Vibe) */}
      <div className="relative max-w-7xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] bg-[#0A0A0A] border border-white/10 dark:border-gray-600 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
        {/* Animated Background Neon Blurs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-purple-600/30 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-1000" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen" />
        </div>

        {/* Content Layout Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 sm:p-14 lg:p-20 items-center">
          {/* LEFT SIDE: Bold Typography & Social Proof */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mx-auto lg:mx-0">
              <FiZap className="text-yellow-400 w-4.5 h-4.5 animate-bounce" />
              <span className="text-xs font-bold text-white tracking-widest uppercase">
                Elite Tech Radar
              </span>
            </div>

            {/* Massive Apple-Style Headline */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter">
              Catch the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-fuchsia-500 to-cyan-400">
                Next Drop.
              </span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              The most exclusive unboxed gadgets disappear in seconds. Join the
              inner circle and get notified before anyone else even sees them.
            </p>

            {/* Social Proof Avatars Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {/* 4 Dummy Avatars using Gradients for a techy look */}
                <div className="w-11 h-11 rounded-full border-2 border-[#0A0A0A] bg-linear-to-br from-rose-400 to-orange-400 shadow-sm" />
                <div className="w-11 h-11 rounded-full border-2 border-[#0A0A0A] bg-linear-to-br from-blue-400 to-emerald-400 shadow-sm" />
                <div className="w-11 h-11 rounded-full border-2 border-[#0A0A0A] bg-linear-to-br from-purple-400 to-pink-400 shadow-sm" />
                <div className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#0A0A0A] bg-white/10 backdrop-blur-md text-xs font-bold text-white">
                  +2k
                </div>
              </div>
              <div className="text-sm text-zinc-400 text-left">
                <strong className="text-white text-base">2,500+</strong> tech
                hunters <br />
                already joined the pipeline.
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Floating Glassmorphism Form Card */}
          <div className="relative group w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            {/* Card Background Glow Hover Effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* The Actual Form Card */}
            <div className="relative p-8 sm:p-10 bg-white/3 border border-white/10 rounded-3xl backdrop-blur-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Join our Community
              </h3>
              <p className="text-sm text-zinc-400 mb-8">
                Get exclusive updates on new gear directly to your inbox.
              </p>

              <Form onSubmit={handleSubscribe} className="space-y-5">
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value: string) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(value)
                      ? null
                      : "Please enter a valid email address.";
                  }}
                >
                  <Input placeholder="john@example.com" className="h-14" />
                  <FieldError />
                </TextField>

                <Button
                  type="submit"
                  className="w-full h-12 bg-white text-black font-extrabold text-[15px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 rounded-xl"
                >
                  Subscribe Now
                  <FiSend className="ml-1 w-4.5 h-4.5" />
                </Button>
              </Form>

              <p className="mt-5 text-center text-xs text-zinc-500 flex items-center justify-center gap-1.5">
                🔒 Your data is secured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
