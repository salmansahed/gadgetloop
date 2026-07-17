"use client";

import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaVideo,
  FaShoppingBag,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "../../../../lib/auth-client";

interface ProductActionsProps {
  isErrorPage: boolean;
  sellerNumber: string;
  productVideoUrl?: string;
  renderButtonsOnly?: boolean;
  renderReviewSection?: boolean;
  productName?: string;
  showReviewForm?: boolean;
  user?: any;
  productId?: string;
}

export default function ProductActions({
  isErrorPage,
  sellerNumber,
  productVideoUrl,
  renderButtonsOnly = false,
  renderReviewSection = false,
  productName,
  showReviewForm = false,
  user,
  productId,
}: ProductActionsProps) {
  const router = useRouter();

  const [rating, setRating] = useState<number>(0);

  const handleBuyNow = () => {
    if (!user) {
      toast.error("Please login first to buy this product!");
      return;
    }

    toast(`Proceeding to checkout for product Name: ${productName}`);
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validation check before hitting the API
    if (rating === 0) {
      toast.error("Please select a rating star!");
      return;
    }

    try {
      const { data: tokenData } = await authClient.token();
      // 2. Send PATCH request to the backend with the rating value
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/review/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify({ rating }),
        },
      );

      const data = await res.json();

      // 3. Handle successful response
      if (res.ok && data.success) {
        toast.success("Review and rating submitted successfully!");

        // Reset rating state only
        setRating(0);

        // 4. Refresh the current route to fetch updated server-side product details
        router.refresh();
      } else {
        // Handle server-side errors
        toast.error(data.message || "Failed to update review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  if (renderButtonsOnly) {
    return (
      <div className="flex flex-col gap-3 w-full mt-1">
        <Button
          className="w-full font-bold text-white shadow-lg rounded-lg py-6 bg-indigo-600 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-800 active:scale-95 transition-transform"
          onClick={handleBuyNow}
        >
          <FaShoppingBag />
          Buy Now
        </Button>

        <div className="flex gap-2 w-full">
          <Link href={`tel:${sellerNumber}`} className="flex-1">
            <Button className="w-full rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-white">
              <FaPhoneAlt />
              Call Seller
            </Button>
          </Link>

          {productVideoUrl && productVideoUrl.trim() !== "" && (
            <Link
              href={productVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-white">
                <FaVideo />
                Watch Video
              </Button>
            </Link>
          )}
        </div>
      </div>
    );
  }

  if (renderReviewSection) {
    if (!showReviewForm) return null;

    return (
      <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 w-full">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Leave a Review
        </h3>
        <form
          onSubmit={handleReviewSubmit}
          className="space-y-4 w-full flex flex-col items-start"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">
              Your Rating:
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-xl transition-transform active:scale-90"
                >
                  {star <= rating ? (
                    <FaStar className="text-amber-500" />
                  ) : (
                    <FaRegStar className="text-gray-300 dark:text-zinc-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <Button type="submit" className="font-semibold rounded-lg mt-2">
            Submit Review
          </Button>
        </form>
      </div>
    );
  }

  if (isErrorPage) {
    return (
      <Button variant="outline" onClick={() => router.back()}>
        <FaArrowLeft />
        Go Back
      </Button>
    );
  }

  return (
    <Button
      className="mb-8 font-semibold"
      variant="outline"
      onClick={() => router.back()}
    >
      <FaArrowLeft />
      Back to Products
    </Button>
  );
}
