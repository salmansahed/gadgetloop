import { Button, Table } from "@heroui/react";
import { serverUserSession } from "../../../lib/serverUserSession";
import Image from "next/image";
import { LuPackageOpen } from "react-icons/lu";
import DeleteProductModal from "../../../components/manage-products/DeleteProductModal";
import { FaRegEye } from "react-icons/fa6";
import Link from "next/link";

// 1. TypeScript Interface for strict type safety
interface IMyProduct {
  _id: string;
  productName: string;
  productPrice: string | number;
  productCategory: string;
  productImage: string;
  authorId: string;
}

const ManageProductPage = async () => {
  const { user } = await serverUserSession();

  // Dynamic fetch using current logged-in user's ID
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/my-products?userId=${user?.id}`,
    { cache: "no-store" },
  );

  // 2. Explicitly type the fetched JSON array
  const data: IMyProduct[] = await res.json();

  return (
    <div className="py-10 sm:py-20 px-4 container mx-auto space-y-8">
      {/* Dynamic Dashboard Title Section */}
      <div className="flex flex-col space-y-2 border-b border-slate-100 dark:border-zinc-800 pb-5">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-zinc-50">
          Manage Your Products
        </h1>
        <p className="text-sm text-slate-500 dark:text-zinc-400">
          View details or delete gadgets that you have listed on GadgetLoop.
        </p>
      </div>

      {/* Conditional Rendering: Show Empty State or Products Table */}
      {data.length === 0 ? (
        /* Premium Glassmorphic Empty State Fallback */
        <div className="w-full flex items-center justify-center py-10">
          <div className="relative w-full max-w-4xl p-8 sm:p-12 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 bg-linear-to-b from-slate-50/40 to-white/10 dark:from-zinc-900/40 dark:to-zinc-950/20 backdrop-blur-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute -top-20 -left-20 w-52 h-52 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Left Side: React Icon Container */}
            <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-2xl bg-linear-to-b from-slate-50 to-slate-100/60 dark:from-zinc-800/60 dark:to-zinc-900/30 border border-slate-200/50 dark:border-zinc-800/40 shadow-inner">
              <span className="absolute inset-0 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 animate-pulse" />
              <LuPackageOpen className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 dark:text-amber-400 relative z-10 animate-bounce animation-duration-[3s]" />
            </div>

            {/* Right Side: Typography & Status Alerts */}
            <div className="flex-1 text-center sm:text-left space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/40">
                Inventory Alert
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight bg-linear-to-r from-slate-800 via-amber-950 to-slate-800 dark:from-zinc-100 dark:via-amber-200 dark:to-zinc-100 bg-clip-text text-transparent">
                No Products Uploaded Yet
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
                You haven&apos;t added any tech items or gadgets to your list.
                Click on &quot;Add Gadget&quot; in the navigation bar to post
                your first product!
              </p>

              {/* Decorative Progress Accent */}
              <div className="flex justify-center sm:justify-start items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-amber-500/60 dark:bg-amber-400/60 animate-ping" />
                <span className="w-16 h-0.5 rounded-full bg-linear-to-r from-amber-500/50 to-transparent dark:from-amber-400/50" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Original Table UI (Completely Untouched Styles & Field Layout) */
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="">
              <Table.Header>
                <Table.Column isRowHeader>Product Image</Table.Column>
                <Table.Column>Product Name</Table.Column>
                <Table.Column>Product Category</Table.Column>
                <Table.Column>Price</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                {data.map((product: IMyProduct) => (
                  <Table.Row key={product._id}>
                    <Table.Cell>
                      <div className="relative w-16 h-16 overflow-hidden rounded-lg border dark:border-zinc-800">
                        <Image
                          src={product.productImage}
                          alt={product.productName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Table.Cell>
                    <Table.Cell>{product.productName}</Table.Cell>
                    <Table.Cell>{product.productCategory}</Table.Cell>
                    <Table.Cell>
                      <h2 className="font-bold">${product.productPrice}</h2>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-2 items-center">
                        <Link href={`/product/details/${product._id}`}>
                          <Button className="bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-100/50 dark:border-blue-500/20">
                            <FaRegEye className="text-blue-500 dark:text-blue-400" />
                          </Button>
                        </Link>
                        <DeleteProductModal productData={product} />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      )}
    </div>
  );
};

export default ManageProductPage;
