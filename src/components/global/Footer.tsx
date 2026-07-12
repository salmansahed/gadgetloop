import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer(): React.JSX.Element {
  interface ConnectLink {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    hoverColor: string;
  }

  const connectLinks: ConnectLink[] = [
    {
      name: "GitHub",
      href: "https://github.com/salmansahed",
      icon: FiGithub,
      hoverColor: "hover:border-yellow-600",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/salman_sahed10",
      icon: BsTwitterX,
      hoverColor: "hover:border-green-500",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/salman-sahed",
      icon: FiLinkedin,
      hoverColor: "hover:border-blue-700",
    },
    {
      name: "Email",
      href: "mailto:salmansahed@example.com",
      icon: FiMail,
      hoverColor: "hover:border-red-500",
    },
  ];

  return (
    <footer className="w-full bg-[#050505] pt-20 pb-10 px-6 dark:border-t dark:border-white/2=10">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Branding Side */}
          <div className="space-y-4">
            <h2 className="text-3xl bg-linear-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent transition-colors duration-300 font-bold">
              GadgetLoop
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your ultimate destination to buy, sell, and trade premium gadgets
              with trust and security.
            </p>
          </div>

          {/* Links - 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li className="hover:text-purple-400 transition-all cursor-pointer">
                <Link href="/explore">Browse Gadgets</Link>
              </li>
              <li className="hover:text-purple-400 transition-all cursor-pointer">
                <Link href="/product/add">Sell Your Tech</Link>
              </li>
              <li className="hover:text-purple-400 transition-all cursor-pointer">
                <Link href="/">Trade Security</Link>
              </li>
            </ul>
          </div>

          {/* Links - 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li className="hover:text-purple-400 transition-all cursor-pointer">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-purple-400 transition-all cursor-pointer">
                <Link href="/">Careers</Link>
              </li>
              <li className="hover:text-purple-400 transition-all cursor-pointer">
                <Link href="/contact">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-3">
              {connectLinks.map((link, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl bg-white/5 border border-white/20 ${link.hoverColor} transition-all cursor-pointer group`}
                >
                  <Link href={link.href} target="_blank">
                    <link.icon className="text-zinc-400 group-hover:text-white w-5 h-5 transition-all" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/15">
          <p className="text-zinc-400 text-xs">
            © 2026 GadgetLoop Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
