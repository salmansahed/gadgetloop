"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console for debugging
    console.error("Caught error:", error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 dark:bg-black/30 backdrop-blur-xl p-4">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white/60 dark:bg-neutral-900/60 border border-white/40 dark:border-neutral-800/40 shadow-2xl backdrop-blur-2xl text-center">
        {/* Error Icon */}
        <div className="w-20 h-20 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
          Oops! Something went wrong
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          We encountered an unexpected issue. Please try again.
        </p>

        {/* Try Again Button */}
        <button
          onClick={() => reset()}
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
