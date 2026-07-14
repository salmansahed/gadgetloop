import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

// 1. Define the interface for the Product data structure
interface ProductItem {
  _id: string;
  productName: string;
  productCategory: string;
  seller: string;
  productImage: string;
  productPrice: number;
  averageRating: number;
  productBrand: string;
}

// 2. Define the interface for the Component Props
interface ProductCardProps {
  product: ProductItem;
}

const ProductCard = ({ product }: ProductCardProps): React.JSX.Element => {
  const {
    _id,
    productName,
    productCategory,
    seller,
    productImage,
    productPrice,
    averageRating,
    productBrand,
  } = product;

  return (
    <div
      key={_id}
      className="group relative flex flex-col rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/12 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Image Container with Dynamic Badge Overlay */}
      <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
        <span className="absolute top-3 left-3 z-20 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md border backdrop-blur-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
          {productBrand}
        </span>

        <Image
          src={productImage}
          alt={productName}
          fill
          className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
      </div>

      {/* Card Meta Content Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-100 uppercase tracking-wider bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded-md border border-indigo-300 dark:border-indigo-700">
            {productCategory}
          </span>
        </div>

        <h3 className="font-bold text-sm sm:text-base text-slate-800 dark:text-zinc-100 group-hover:text-slate-900 dark:hover:text-white transition-colors duration-300 line-clamp-1 mb-1">
          {productName}
        </h3>

        {/* Advanced Micro-Fractions Star Ratings Layout */}
        <div className="flex items-center gap-0.5 mb-2.5">
          {Array.from({ length: 5 }, (_, index) => {
            const starIndex = index + 1;
            const currentRating = Number(averageRating) || 0;

            const fillPercentage = Math.max(
              0,
              Math.min(100, (currentRating - (starIndex - 1)) * 100),
            );

            return (
              <div key={index} className="relative w-4 h-4 select-none">
                <AiFillStar className="w-full h-full text-slate-200 dark:text-zinc-700/80" />
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
            ({(Number(averageRating) || 0).toFixed(1)})
          </span>
        </div>

        {/* Seller Store Verification Info */}
        <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-zinc-500 mb-4">
          <FiCheckCircle className="w-3 h-3 text-emerald-500" />
          <span className="truncate">{seller}</span>
        </div>

        {/* Pricing Details Wrapper */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-white/4">
          <div className="flex items-center text-slate-900 dark:text-white font-black text-lg">
            <BiDollar className="w-5 h-5 -mr-0.5 text-slate-500 dark:text-zinc-400" />
            <span>{productPrice}</span>
          </div>
          <Link
            href={`/product-details/${_id}`}
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
