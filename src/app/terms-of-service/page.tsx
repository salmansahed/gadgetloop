import { Button } from "@heroui/react";
import Link from "next/link";
import {
  FiFileText,
  FiUserCheck,
  FiAlertTriangle,
  FiRefreshCw,
} from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";

const TermsOfServicePage = () => {
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
            <FiFileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Last Updated: {currentDate}
          </p>
        </div>

        {/* Main Content (Glassmorphic Container) */}
        <div className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xs border border-gray-200 dark:border-neutral-800 p-6 md:p-10 rounded-3xl space-y-8 text-zinc-700 dark:text-zinc-300">
          <p className="text-base leading-relaxed">
            Welcome to <strong>GadgetLoop</strong>. By accessing or using our
            website, you agree to be bound by these Terms of Service. Please
            read them carefully.
          </p>

          {/* 1. Account & User Responsibilities */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-bold text-lg">
              <FiUserCheck className="shrink-0" />
              <h2>1. User Accounts & Security</h2>
            </div>
            <p className="text-sm leading-relaxed pl-7 text-zinc-600 dark:text-zinc-400">
              When you create an account or log in to GadgetLoop, you are
              responsible for maintaining the security of your session. You
              agree not to use the platform for any unauthorized or illegal
              activities, including uploading malicious content or data
              tampering.
            </p>
          </div>

          {/* 2. Limitation of Liability */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-bold text-lg">
              <FiAlertTriangle className="shrink-0" />
              <h2>2. Limitation of Liability</h2>
            </div>
            <p className="text-sm leading-relaxed pl-7 text-zinc-600 dark:text-zinc-400">
              GadgetLoop and its components are provided on an &quot;as-is&quot;
              basis. We do not guarantee that the platform will always be
              error-free or uninterrupted. We are not responsible for any
              indirect or direct damages resulting from your use or inability to
              use the platform.
            </p>
          </div>

          {/* 3. Changes to Terms */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-bold text-lg">
              <FiRefreshCw className="shrink-0" />
              <h2>3. Changes to Terms</h2>
            </div>
            <p className="text-sm leading-relaxed pl-7 text-zinc-600 dark:text-zinc-400">
              We reserve the right to update or modify these terms at any time
              without prior notice. Your continued use of GadgetLoop after any
              modifications updates your acceptance of the new Terms of Service.
            </p>
          </div>

          {/* Final Agreement or Consent */}
          <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
              If you do not agree to any of these terms, please discontinue
              using GadgetLoop immediately.
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <Link href="/">
            <Button className="font-medium bg-linear-to-r to-indigo-600 from-purple-600 text-white hover:to-indigo-700 hover:from-purple-700 transition-all duration-300 rounded-lg">
              <FaArrowLeft />
              Back to Home
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
