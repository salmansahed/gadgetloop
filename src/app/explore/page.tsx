import ProductCard from "../../components/products/ProductCard";
import { BsBoxSeam } from "react-icons/bs";
import ExploreFilters from "./ExploreFilters";
import { Suspense } from "react";
import { Skeleton } from "@heroui/react";

interface ExplorePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Main Explore Page component handling URL search parameters
const ExplorePage = async (props: ExplorePageProps) => {
  // Extract URL search parameters asynchronously (Next.js 15+ requirement)
  const searchParams = await props.searchParams;

  // Build query string dynamically based on active filters
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

  const queryString = queryParams.toString();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* --- Page Heading Section --- */}
      <div className="mb-8 text-center md:text-left space-y-2">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Explore Gadgets
        </h1>
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">
          Find the perfect tech gear that matches your needs and budget.
        </p>
      </div>

      {/* Search and control dashboard layout */}
      <ExploreFilters />

      {/* Suspense handles the loading state while ProductData fetches data */}
      <Suspense key={queryString} fallback={<ProductGridSkeleton />}>
        <ProductData queryString={queryString} />
      </Suspense>
    </div>
  );
};

export default ExplorePage;

// Server Component responsible for fetching and displaying product data
async function ProductData({ queryString }: { queryString: string }) {
  // Fetch products from the backend API with the active query string
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products?${queryString}`,
    {
      cache: "no-store", // Ensure fresh data on every request
    },
  );

  const products = await res.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {products.length > 0 ? (
        // Map through the products array and render individual ProductCards
        products.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        // Render glassmorphic empty state if no products match the current filters
        <div className="col-span-full w-full flex items-center justify-center py-12 px-4 sm:px-6 md:py-20">
          {/* Glassmorphic Empty Slate Box Container */}
          <div className="relative w-full max-w-5xl p-8 sm:p-12 md:p-16 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 bg-linear-to-b from-slate-50/40 to-white/10 dark:from-zinc-900/40 dark:to-zinc-950/20 backdrop-blur-xl customShadow overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center rounded-[32px] bg-linear-to-b from-slate-50 to-slate-100/50 dark:from-zinc-800/60 dark:to-zinc-900/20 border border-slate-200/50 dark:border-zinc-800/40 shadow-inner">
              <span className="absolute inset-0 rounded-[32px] bg-indigo-500/5 dark:bg-indigo-500/10 animate-pulse" />
              <BsBoxSeam className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-500 dark:text-indigo-400 relative z-10 animate-bounce animation-duration-[3s]" />
            </div>

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

              <div className="flex justify-center md:justify-start items-center gap-2.5 pt-4">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/60 dark:bg-indigo-400/60 animate-ping" />
                <span className="w-24 h-0.75 rounded-full bg-linear-to-r from-indigo-500/60 to-transparent dark:from-indigo-400/60" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Loading Skeleton Component for Suspense Fallback UI
function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="shadow-panel w-full space-y-5 rounded-lg bg-transparent p-4 border border-slate-200/40 dark:border-zinc-800/50"
          >
            <Skeleton className="h-32 rounded-lg" />
            <div className="space-y-3">
              <Skeleton className="h-3 w-3/5 rounded-lg" />
              <Skeleton className="h-3 w-4/5 rounded-lg" />
              <Skeleton className="h-3 w-2/5 rounded-lg" />
            </div>
          </div>
        ))}
    </div>
  );
}
