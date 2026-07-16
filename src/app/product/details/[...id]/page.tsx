import Image from "next/image";
import { Card, Chip } from "@heroui/react";
import {
  FaStar,
  FaStore,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaTags,
  FaBoxOpen,
} from "react-icons/fa";
import ProductActions from "./ProductActions";
import { serverUserSession } from "../../../../lib/serverUserSession";

interface IProductDetail {
  _id: string;
  productName: string;
  productCategory: string;
  productBrand: string;
  productModel: string;
  productPrice: string;
  productQuantity: string;
  productColor: string;
  productWarranty: string;
  productLocation: string;
  seller: string;
  sellerNumber: string;
  productVideoUrl?: string;
  productDescription: string;
  authorId: string;
  authorName: string;
  productImage: string;
  authorRole: string;
  totalStars: number;
  reviewCount: number;
  createdDate: string;
  createdTime: string;
  averageRating: number;
}

async function getProductDetails(id: string): Promise<IProductDetail | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/details/${id}`,
      { cache: "no-store" },
    );

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const product = await getProductDetails(id);
  const { user } = (await serverUserSession()) || {};

  if (!product) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-50 dark:bg-zinc-950 text-center px-4">
        <h2 className="text-2xl font-bold text-red-500">
          Oops! Product not found.
        </h2>
        <p className="text-gray-500">
          The product you are looking for does not exist or an unexpected error
          occurred.
        </p>
        <ProductActions isErrorPage={true} sellerNumber="" productVideoUrl="" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <ProductActions
          isErrorPage={false}
          sellerNumber=""
          productVideoUrl=""
        />

        {/* Main Grid Layout - Align items to start to prevent image container stretching */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
          {/* Left Column: Image Container with height fit properties */}
          <Card className="border border-gray-200 dark:border-gray-700 bg-white/70 shadow-lg backdrop-blur-md dark:bg-neutral-800 overflow-hidden h-fit">
            <div className="relative flex items-center justify-center p-6 aspect-square">
              <Image
                src={product.productImage}
                alt={product.productName}
                fill
                priority
                className="object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Card>

          {/* Right Column: Information Section */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Chip size="sm">
                  <FaTags className="mx-1" />
                  {product.productCategory}
                </Chip>
                <Chip size="sm" color="success">
                  <FaBoxOpen className="mx-1" />
                  {product.productBrand}
                </Chip>
              </div>

              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                {product.productName}
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">
                Model:{" "}
                <span className="font-semibold text-gray-700 dark:text-zinc-200">
                  {product.productModel}
                </span>
              </p>

              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center text-amber-500 gap-1">
                  <FaStar />
                  <span className="font-bold text-gray-900 dark:text-white">
                    {product.averageRating}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  ({product.reviewCount} Reviews)
                </span>
              </div>

              <hr className="my-6" />

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-primary">
                  ${product.productPrice}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    Number(product.productQuantity) > 3
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {Number(product.productQuantity) > 0
                    ? `In Stock (${product.productQuantity} units)`
                    : "Out of Stock"}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Description
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-zinc-300 leading-relaxed">
                  {product.productDescription}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                  <FaShieldAlt className="text-indigo-600 dark:text-indigo-500" />
                  <div>
                    <p className="text-xs text-gray-400">Warranty</p>
                    <p className="text-sm font-bold text-gray-700 dark:text-zinc-200">
                      {product.productWarranty} Years
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                  <FaMapMarkerAlt className="text-danger text-lg" />
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p
                      className="text-sm font-bold text-gray-700 dark:text-zinc-200 truncate max-w-30"
                      title={product.productLocation}
                    >
                      {product.productLocation}
                    </p>
                  </div>
                </div>
              </div>

              <Card className="border border-gray-100 dark:border-zinc-800 bg-linear-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-950 shadow-sm">
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg text-primary">
                      <FaStore className="text-purple-600 dark:text-purple-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 dark:text-zinc-100">
                        Seller Info
                      </h4>
                      <p className="text-xs text-gray-500">{product.seller}</p>
                    </div>
                  </div>

                  <ProductActions
                    isErrorPage={false}
                    sellerNumber={product.sellerNumber}
                    productVideoUrl={product.productVideoUrl}
                    renderButtonsOnly={true}
                    productName={product.productName}
                    user={user}
                    productId={product._id}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Conditional review visibility handled strictly based on authentication status */}
        <ProductActions
          isErrorPage={false}
          sellerNumber=""
          renderReviewSection={true}
          productName={product.productName}
          showReviewForm={!!user}
          productId={product._id}
        />
      </div>
    </div>
  );
}
