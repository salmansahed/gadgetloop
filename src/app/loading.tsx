export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/20 dark:bg-black/20 backdrop-blur-md transition-all duration-300">
      {/* Modern Glass Effect Card */}
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/40 dark:bg-neutral-900/40 border border-white/20 dark:border-neutral-800/30 shadow-2xl backdrop-blur-xl max-w-xs w-full mx-4">
        {/* Outer Spinning Ring */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-t-blue-600 border-r-transparent border-b-neutral-300/40 border-l-transparent rounded-full animate-spin"></div>

          {/* Inner Pulsing Glow */}
          <div className="w-6 h-6 bg-blue-500/30 dark:bg-blue-400/30 rounded-full animate-pulse blur-sm"></div>
        </div>

        {/* Text Animation */}
        <h3 className="mt-6 text-lg font-semibold text-neutral-800 dark:text-neutral-200 tracking-wide animate-pulse">
          Loading...
        </h3>

        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 font-medium text-center">
          Please wait a moment
        </p>
      </div>
    </div>
  );
}
