import { FiShield, FiZap, FiCheckCircle } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";

// Features interface structure for type safety
interface FeatureItem {
  id: string;
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

// Marketplace core features data
const featuresData: FeatureItem[] = [
  {
    id: "feat-1",
    title: "Verified Sellers",
    description:
      "Every single tech vendor is deeply vetted and verified to ensure authentic brand-new drops.",
    icon: HiOutlineUserGroup,
    accentColor: "from-blue-600 to-cyan-500",
    hoverBg: "hover:bg-blue-50/40 dark:hover:bg-blue-950/10",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)]",
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "feat-2",
    title: "Secure Escrow Payment",
    description:
      "Your funds are securely held and only released to the seller once you receive and confirm your gadget.",
    icon: FiShield,
    accentColor: "from-purple-600 to-fuchsia-500",
    hoverBg: "hover:bg-purple-50/40 dark:hover:bg-purple-950/10",
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)]",
    iconBg: "bg-purple-50 dark:bg-purple-950/50",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "feat-3",
    title: "Instant Tech Listing",
    description:
      "List your premium brand-new gadgets and set up your digital storefront in less than a minute.",
    icon: FiZap,
    accentColor: "from-amber-500 to-orange-600",
    hoverBg: "hover:bg-amber-50/40 dark:hover:bg-amber-950/10",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)]",
    iconBg: "bg-amber-50 dark:bg-amber-950/50",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "feat-4",
    title: "Quality Assurance",
    description:
      "Strict policy monitoring guarantees that only unboxed, intact, and brand-new electronics are traded.",
    icon: FiCheckCircle,
    accentColor: "from-emerald-600 to-teal-500",
    hoverBg: "hover:bg-emerald-50/40 dark:hover:bg-emerald-950/10",
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export default function Features(): React.JSX.Element {
  return (
    <section className="w-full py-20 px-6 max-w-7xl mx-auto select-none">
      {/* Header Info */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-widest bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-white dark:text-transparent dark:bg-clip-text px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 shadow-xs">
          Why Choose Us
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
          Next-Gen Trading Security
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 mt-2">
          We provide a highly optimized ecosystem tailored specifically for
          buying and selling premium, brand-new tech drops safely.
        </p>
      </div>

      {/* Grid Layout Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresData.map((feature: FeatureItem): React.JSX.Element => {
          const IconComponent: React.ComponentType<{ className?: string }> =
            feature.icon;
          return (
            <div
              key={feature.id}
              className={`group relative p-6 rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/80 dark:border-white/10 ${feature.hoverBorder} ${feature.hoverBg} ${feature.hoverShadow} transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
            >
              {/* Corner Glow Blur on Hover */}
              <div
                className={`absolute -top-10 -right-10 w-24 h-24 bg-linear-to-br ${feature.accentColor} rounded-full opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              />

              {/* Icon layout styling */}
              <div
                className={`p-3.5 w-fit rounded-xl ${feature.iconBg} ${feature.iconColor} group-hover:bg-linear-to-br group-hover:${feature.accentColor} group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-110 mb-5`}
              >
                <IconComponent className="w-6 h-6" />
              </div>

              {/* Text descriptions */}
              <h3 className="font-bold text-base text-slate-800 dark:text-zinc-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
