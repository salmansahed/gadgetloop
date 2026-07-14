import ProductCard from "../../components/products/ProductCard";
import { BsBoxSeam } from "react-icons/bs";
import ExploreFilters from "./ExploreFilters";

interface ExplorePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ExplorePage = async (props: ExplorePageProps) => {
  // Await searchParams to unpack dynamic state safely from server lifecycle
  const searchParams = await props.searchParams;

  // Build clean and dynamic query params based on validated criteria
  const queryParams = new URLSearchParams();
  if (searchParams.search)
    queryParams.set("search", searchParams.search.toString());
  if (searchParams.category)
    queryParams.set("category", searchParams.category.toString());
  if (searchParams.minPrice)
    queryParams.set("minPrice", searchParams.minPrice.toString());
  if (searchParams.maxPrice)
    queryParams.set("maxPrice", searchParams.maxPrice.toString());
  if (searchParams.sort) queryParams.set("sort", searchParams.sort.toString());

  // Server-side fetch processing with absolute isolated validation state
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products?${queryParams.toString()}`,
    {
      cache: "no-store",
    },
  );

  const products = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and control dashboard layout */}
      <ExploreFilters />

      {/* Dynamic Grid Layout distributing mapping items safely */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.length > 0 ? (
          products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-full w-full flex items-center justify-center py-12 px-4 sm:px-6 md:py-20">
            {/* Glassmorphic Empty Slate Box Container */}
            <div className="relative w-full max-w-5xl p-8 sm:p-12 md:p-16 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 bg-linear-to-b from-slate-50/40 to-white/10 dark:from-zinc-900/40 dark:to-zinc-950/20 backdrop-blur-xl customShadow overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              {/* Atmospheric lighting layers */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Left Column: Bouncing Dynamic Product Container Icon */}
              <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center rounded-[32px] bg-linear-to-b from-slate-50 to-slate-100/50 dark:from-zinc-800/60 dark:to-zinc-900/20 border border-slate-200/50 dark:border-zinc-800/40 shadow-inner">
                <span className="absolute inset-0 rounded-[32px] bg-indigo-500/5 dark:bg-indigo-500/10 animate-pulse" />
                {/* Fixed: Replaced arbitrary text class with standardized modern bracket format */}
                <BsBoxSeam className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-500 dark:text-indigo-400 relative z-10 animate-bounce animation-duration-[3s]" />
              </div>

              {/* Right Column: Dynamic Typography Alerts */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
                  Search Alert
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight bg-linear-to-r from-slate-800 via-indigo-950 to-slate-800 dark:from-zinc-100 dark:via-indigo-200 dark:to-zinc-100 bg-clip-text text-transparent">
                  No Products Match Your Search
                </h3>

                <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
                  We searched our database but couldn&apos;t find any items
                  matching your active filters. Try clearing some selections,
                  adjusting your price range, or typing another keyword.
                </p>

                {/* Decorative ping tracker element */}
                <div className="flex justify-center md:justify-start items-center gap-2.5 pt-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/60 dark:bg-indigo-400/60 animate-ping" />
                  <span className="w-24 h-0.75 rounded-full bg-linear-to-r from-indigo-500/60 to-transparent dark:from-indigo-400/60" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
