"use client";

import {
  Form,
  TextField,
  Label,
  Input,
  TextArea,
  Select,
  ListBox,
  Button,
  FieldError,
  Fieldset,
  Description,
  FieldGroup,
} from "@heroui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { MdDeleteForever, MdDriveFolderUpload } from "react-icons/md";
import useImageUpload from "../../../hooks/image-upload/userImageUpload";
import { toast } from "react-toastify";
import { useClientUserSession } from "../../../hooks/user-session/useClientUserSession";

const AddProductForm = () => {
  const [photoRequiredError, setPhotoRequiredError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { user } = useClientUserSession();

  const {
    previewUrl,
    serverUrl,
    isUploading,
    error: imageError,
    handleImageChange,
    handleRemoveImage,
  } = useImageUpload();

  const handleBtnPress = (): void => {
    fileInputRef.current?.click();
  };

  const categories = [
    { key: "smartphone", label: "Smartphone & Tablet" },
    { key: "laptop", label: "Laptop & Desktop" },
    { key: "accessories", label: "Accessories & Smartwatches" },
  ];

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const productData = Object.fromEntries(formData.entries()) as Record<
      string,
      unknown
    >;

    if (isUploading) {
      toast.warning("Please wait, photo is still uploading...");
      return;
    }

    if (!serverUrl) {
      setPhotoRequiredError(
        "Profile photo is required. Please upload an image.",
      );
      return;
    } else {
      setPhotoRequiredError("");
    }

    const finalAddProductData = {
      ...productData,
      authorId: user?.id,
      authorName: user?.name,
    };

    console.log("🚀 ~ onSubmit ~ finalAddProductData:", finalAddProductData);
  };

  return (
    <Form
      onSubmit={onSubmit}
      className="bg-white/80 dark:bg-neutral-900 shadow-sm border border-gray-200 dark:border-gray-700 px-6 py-8 rounded-3xl"
    >
      <Fieldset>
        <Fieldset.Legend className="text-2xl md:text-3xl font-extrabold tracking-tight bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Add New Product
        </Fieldset.Legend>
        <Description className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Fill in the details to list your gadget on the marketplace.
        </Description>
        <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 w-full">
          {/* 1. Product Name */}
          <TextField name="name" isRequired className="w-full">
            <Label>Product Name</Label>
            <Input
              placeholder="e.g. iPhone 15 Pro Max"
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>

          {/* Category */}
          <Select
            isRequired
            placeholder="Select one"
            name="category"
            className="w-full"
          >
            <Label>Category</Label>
            <Select.Trigger className="border border-gray-200 dark:border-gray-800">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {categories.map((category) => (
                  <ListBox.Item
                    id={category.key}
                    textValue={category.label}
                    key={category.key}
                  >
                    <Label>{category.label}</Label>
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
            <FieldError />
          </Select>

          {/* ৩. Brand */}
          <TextField name="brand" isRequired className="w-full">
            <Label>Brand</Label>
            <Input
              placeholder="e.g. Apple, Samsung"
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>

          {/* ৪. Model */}
          <TextField name="model" isRequired className="w-full">
            <Label>Model</Label>
            <Input
              placeholder="e.g. 15 Pro Max"
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>

          {/* ৬. Price */}
          <TextField name="price" type="number" isRequired className="w-full">
            <Label>Price (BDT)</Label>
            <Input
              placeholder="0.00"
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>

          {/* ৭. Quantity / Stock */}
          <TextField
            name="quantity"
            type="number"
            isRequired
            className="w-full"
          >
            <Label>Quantity</Label>
            <Input
              placeholder="e.g. 5"
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>

          {/* ৮. Color */}
          <TextField isRequired name="color" className="w-full">
            <Label>Color</Label>
            <Input
              placeholder="e.g. Natural Titanium"
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>

          {/* ৯. Warranty */}
          <TextField
            isRequired
            name="warranty"
            type="number"
            className="w-full"
          >
            <Label>Warranty (Month)</Label>
            <Input
              placeholder="e.g. 6"
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>

          {/* ১০. Location */}
          <TextField name="location" isRequired className="w-full">
            <Label>Location</Label>
            <Input
              placeholder="e.g. Bhaluka, Mymensingh"
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>

          {/* ১১. Seller Name */}
          <TextField name="seller" isRequired className="w-full">
            <Label>Seller Name/Shop</Label>
            <Input
              placeholder="Enter your name or shop name"
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>

          {/* ১২. Seller Number */}
          <TextField
            name="sellerNumber"
            type="tel"
            isRequired
            className="w-full"
          >
            <Label>Contact Number</Label>
            <Input
              placeholder="+880 1..."
              className="border border-gray-200 dark:border-gray-800"
            />
            <FieldError />
          </TextField>
          {/* Video Url */}
          <TextField name="videoUrl" type="url" className="w-full">
            <Label>Video URL (Optional)</Label>
            <Input
              placeholder="https://www.example.com"
              className="border border-gray-200 dark:border-gray-800"
            />
          </TextField>

          {/* ১৩. Description (TextArea) */}
          <TextField
            name="description"
            isRequired
            className="col-span-1 md:col-span-2 w-full"
          >
            <Label>Description</Label>
            <TextArea
              placeholder="Provide detailed specifications, battery health, and accessories info..."
              className="border border-gray-200 dark:border-gray-800 h-26"
            />
            <FieldError />
          </TextField>
          {/* Photo Field */}
          <TextField isRequired className="col-span-1 md:col-span-2 w-full">
            <Label>Product Photo</Label>

            <input
              ref={fileInputRef}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleImageChange(e);
                setPhotoRequiredError("");
              }}
              type="file"
              name="photo"
              className="hidden"
              accept="image/*"
            />

            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                type="button"
                className="w-full h-12 rounded-xl text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800"
                onPress={handleBtnPress}
              >
                {isUploading
                  ? "Uploading Image..."
                  : serverUrl
                    ? "Image Selected ✓"
                    : "Upload Photo"}
                <MdDriveFolderUpload />
              </Button>

              {/* Image Preview */}
              {previewUrl && (
                <div className="relative w-full h-40 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    height={160}
                    width={160}
                    unoptimized
                    className="h-full w-auto object-contain rounded-xl"
                  />
                  {/* Remove Image Button */}
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-rose-600 hover:bg-rose-700 text-white px-2.5 py-1 text-xs font-medium rounded-lg transition-colors shadow-lg cursor-pointer"
                  >
                    <MdDeleteForever className="text-xl" />
                  </button>
                </div>
              )}
            </div>

            {/* Image Error Messages */}
            {imageError && (
              <p className="text-xs font-medium text-rose-500 mt-0.5">
                {imageError}
              </p>
            )}
            {photoRequiredError && (
              <p className="text-xs font-medium text-rose-500 mt-0.5">
                {photoRequiredError}
              </p>
            )}
          </TextField>
          {/* Create Account Button */}
          <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
            <Button
              type="submit"
              isDisabled={isUploading}
              className="w-full md:w-auto px-8 h-12 text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-md transition-all active:scale-98"
            >
              <FiUploadCloud className="group-hover:scale-125 transition-all duration-300" />
              {isUploading ? "Uploading Photo..." : "Create Account"}
            </Button>
          </div>
        </FieldGroup>
      </Fieldset>
    </Form>
  );
};

export default AddProductForm;
