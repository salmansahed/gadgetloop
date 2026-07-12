import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

// 1. Define the interface for the Product data structure
interface ProductItem {
  id: string;
  title: string;
  price: number;
  totalStars: number;
  reviewCount: number;
  category: string;
  condition: "Brand-New" | "Intact";
  seller: string;
  image: string;
}

// 2. Define the interface for the Component Props
interface ProductCardProps {
  product: ProductItem;
}

const ProductCard = ({ product }: ProductCardProps): React.JSX.Element => {
  return (
    <div
      key={product.id}
      className="group relative flex flex-col rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/12 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Image Container with Dynamic Badge Overlay */}
      <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
        <span className="absolute top-3 left-3 z-20 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md border backdrop-blur-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
          {product.condition === "Brand-New" ? "New" : "Intact"}
        </span>

        <Image
          src={product.image}
          alt={product.title}
          fill
          className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
      </div>

      {/* Card Meta Content Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            {product.category.replace("-", " ")}
          </span>
        </div>

        <h3 className="font-bold text-sm sm:text-base text-slate-800 dark:text-zinc-100 group-hover:text-slate-900 dark:hover:text-white transition-colors duration-300 line-clamp-1 mb-1">
          {product.title}
        </h3>

        {/* Advanced Micro-Fractions Star Ratings Layout */}
        <div className="flex items-center gap-0.5 mb-2.5">
          {(() => {
            const averageRating =
              product.reviewCount > 0
                ? product.totalStars / product.reviewCount
                : 0;

            return (
              <>
                {Array(5)
                  .fill(0)
                  .map((_, index: number): React.JSX.Element => {
                    const starIndex = index + 1;

                    // Calculate specific filling percentage for this individual star slot
                    let fillPercentage = 0;
                    if (averageRating >= starIndex) {
                      fillPercentage = 100; // Complete full star filling
                    } else if (averageRating > starIndex - 1) {
                      fillPercentage = (averageRating - (starIndex - 1)) * 100; // Extract precise decimals
                    }

                    return (
                      <div key={index} className="relative w-4 h-4 select-none">
                        {/* Base background fallback: Empty Star layer */}
                        <AiFillStar className="w-full h-full text-slate-200 dark:text-zinc-700/80" />

                        {/* Overlay layer: Filled Star clipped smoothly to exact rating decimal scale */}
                        <div
                          className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-300"
                          style={{ width: `${fillPercentage}%` }}
                        >
                          <AiFillStar className="w-4 h-4 text-amber-500 max-w-none" />
                        </div>
                      </div>
                    );
                  })}
                <span className="text-xs text-slate-400 dark:text-zinc-500 ml-1.5 font-semibold">
                  ({averageRating.toFixed(1)})
                </span>
              </>
            );
          })()}
        </div>

        {/* Seller Store Verification Info */}
        <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-zinc-500 mb-4">
          <FiCheckCircle className="w-3 h-3 text-emerald-500" />
          <span className="truncate">{product.seller}</span>
        </div>

        {/* Pricing Details Wrapper */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-white/4">
          <div className="flex items-center text-slate-900 dark:text-white font-black text-lg">
            <BiDollar className="w-5 h-5 -mr-0.5 text-slate-500 dark:text-zinc-400" />
            <span>{product.price.toLocaleString()}</span>
          </div>
          <Link
            href={`/product-details/${product.id}`}
            className="text-xs font-bold text-slate-500 dark:text-zinc-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-200 flex items-center gap-0.5"
          >
            View Details
            <FiArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
