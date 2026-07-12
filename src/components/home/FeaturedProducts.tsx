import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ProductCard from "../products/ProductCard";
import { Button, Chip } from "@heroui/react";

// Product item data structure interface
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

// Products data array for featured products
const productsData: ProductItem[] = [
  {
    id: "prod-1",
    title: "iPhone 15 Pro Max - 256GB",
    price: 1199,
    totalStars: 405,
    reviewCount: 92,
    category: "smartphones-tablets",
    condition: "Intact",
    seller: "Apple Store BD",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "prod-2",
    title: "Sony WH-1000XM5 Wireless",
    price: 349,
    totalStars: 328,
    reviewCount: 80,
    category: "wireless-audio",
    condition: "Brand-New",
    seller: "Gadget & Gear",
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "prod-3",
    title: "PlayStation 5 Slim Digital",
    price: 449,
    totalStars: 71,
    reviewCount: 15,
    category: "gaming-consoles",
    condition: "Intact",
    seller: "Sony Rangs",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "prod-4",
    title: 'MacBook Pro M3 Max 14"',
    price: 1999,
    totalStars: 202,
    reviewCount: 45,
    category: "laptops-computers",
    condition: "Brand-New",
    seller: "Executive Machines",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
  },
];

export default function FeaturedProducts(): React.JSX.Element {
  return (
    <section className="w-full py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header Wrapper */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div>
          <Chip className="bg-linear-to-r from-rose-600 to-orange-600 dark:from-rose-400 dark:to-orange-400 text-white tracking-widest font-bold dark:text-transparent dark:bg-clip-text rounded-full border border-rose-200 dark:border-rose-500/30 shadow-xs">
            Exclusive Drops
          </Chip>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            Featured Premium Tech
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 mt-2 max-w-xl">
            Inspect the latest untampered, high-end electronics listed by
            verified top-tier tech distributors.
          </p>
        </div>

        {/* View All Listings Button */}
        <Link href="/explore">
          <Button
            variant="outline"
            className="rounded-xl text-indigo-700 dark:text-indigo-400 dark:bg-indigo-900/20 font-bold bg-indigo-100/50 border border-indigo-200/80 dark:border-indigo-900/80 transition-all duration-300 group w-full"
          >
            Explore All Products
            <FiArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </Link>
      </div>

      {/* Product Display Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.map((product: ProductItem): React.JSX.Element => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}
