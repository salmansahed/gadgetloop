"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

// 1. Interface for the product object data structure
interface IProductData {
  _id: string;
  productName: string;
}

// 2. Interface for the Component Props
interface DeleteProductModalProps {
  productData: IProductData;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  productData,
}) => {
  const { _id, productName } = productData;

  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // 3. Strictly typed async function returning Promise<void>
  const handleDelete = async (): Promise<void> => {
    setIsDeleting(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/delete/${_id}`,
        {
          method: "DELETE",
        },
      );

      // Typing the API JSON response structure dynamically
      const data: { deletedCount?: number; message?: string } =
        await res.json();

      if (data.deletedCount && data.deletedCount > 0) {
        toast.success("Product deleted successfully!", {
          position: "top-center",
        });
        setIsOpen(false);
        router.refresh();
      } else {
        toast.error(
          data.message || "Failed to delete the product. Please try again.",
          {
            position: "top-center",
          },
        );
      }
    } catch (error) {
      // Safely handling 'unknown' error type in TypeScript catch block
      console.error("Delete product error:", error);
      toast.error("Something went wrong! Please try again.", {
        position: "top-center",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <Button
        onPress={() => setIsOpen(true)}
        isIconOnly
        variant="danger"
        className="rounded-lg"
      >
        <HiOutlineTrash size={18} />
      </Button>

      <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-900">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header className="flex items-center gap-3">
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading className="text-base font-bold text-slate-800 dark:text-white">
                  Delete Product Permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body className="py-2">
                <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                  Are you sure you want to permanently delete{" "}
                  <strong className="text-slate-800 dark:text-white">
                    {productName}
                  </strong>
                  ? This action cannot be undone.
                </p>
              </AlertDialog.Body>

              <AlertDialog.Footer className="flex items-center gap-3 justify-end pt-4">
                {/* Cancel Button */}
                <Button
                  onPress={() => setIsOpen(false)}
                  className="bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-neutral-400 font-bold px-4 py-2 rounded-xl text-xs transition-all hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  Cancel
                </Button>

                {/* Delete Confirmation Button */}
                <Button
                  variant="danger"
                  onClick={handleDelete}
                  isDisabled={isDeleting}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isDeleting ? "Deleting..." : "Delete Product"}
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteProductModal;
