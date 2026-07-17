import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FiShield, FiLock, FiEye, FiCheckCircle } from "react-icons/fi";

const PrivacyPolicyPage = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen p-4 md:p-8 bg-linear-to-b from-transparent to-purple-50/10 dark:to-purple-950/5">
      <div className="max-w-4xl mx-auto space-y-8 py-10">
        {/* Heading Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl mb-2">
            <FiShield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Last Updated: {currentDate}
          </p>
        </div>

        {/* Main Policy Content (Glassmorphic Container with Custom Shadow) */}
        <div className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xs border border-gray-200 dark:border-neutral-800 p-6 md:p-10 rounded-3xl space-y-8 text-zinc-700 dark:text-zinc-300">
          <p className="text-base leading-relaxed">
            Welcome to <strong>GadgetLoop</strong>. Your privacy is highly
            important to us. This Privacy Policy document outlines the types of
            personal information that is received and collected by our website
            and how it is used.
          </p>

          {/* 1. Information We Collect */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-bold text-lg">
              <FiEye className="shrink-0" />
              <h2>1. Information We Collect</h2>
            </div>
            <p className="text-sm leading-relaxed pl-7 text-zinc-600 dark:text-zinc-400">
              We only collect basic information necessary for your
              authentication and user experience, such as your name, email
              address, and profile picture when you log in via our secure
              authentication system.
            </p>
          </div>

          {/* 2. Data Security & Storage */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-bold text-lg">
              <FiLock className="shrink-0" />
              <h2>2. Data Security & Storage</h2>
            </div>
            <p className="text-sm leading-relaxed pl-7 text-zinc-600 dark:text-zinc-400">
              Your security is our priority. We implement safe industry-standard
              practices to protect your personal data from unauthorized access,
              alteration, disclosure, or destruction. We never share your
              personal information with third parties.
            </p>
          </div>

          {/* 3. Cookies and Analytics */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-bold text-lg">
              <FiCheckCircle className="shrink-0" />
              <h2>3. Cookies and Analytics</h2>
            </div>
            <p className="text-sm leading-relaxed pl-7 text-zinc-600 dark:text-zinc-400">
              GadgetLoop uses basic cookies to keep you securely logged in and
              to store your dynamic preference sessions (like Light/Dark mode).
              These cookies do not track your personal activities outside of
              this platform.
            </p>
          </div>

          {/* 4. Consent */}
          <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <Link href="/">
            <Button className="font-medium bg-linear-to-r to-indigo-600 from-purple-600 text-white hover:to-indigo-700 hover:from-purple-700 transition-all duration-300 rounded-lg">
              <FaArrowLeft />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
