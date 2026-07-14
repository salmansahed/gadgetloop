"use client";

import { Input, ListBox, SearchField, Select } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ExploreFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Pure function to update query strings without resetting state
  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    // Clean up parameters: remove key if value is empty or explicitly set to reset option 'all'
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const category = [
    { id: "all", name: "All Categories" },
    { id: "accessories-smartwatches", name: "Accessories & Smartwatches" },
    { id: "laptop-desktop", name: "Laptop & Desktop" },
    { id: "smartphone-tablet", name: "Smartphone & Tablet" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 bg-white dark:bg-neutral-900 dark:border dark:border-gray-600 p-8 rounded-3xl shadow-md items-center">
      {/* Search Field Control */}
      <SearchField
        name="search"
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e: any) => {
          const searchText = typeof e === "string" ? e : e?.target?.value;
          handleFilterChange("search", searchText || "");
        }}
      >
        <SearchField.Group className="customShadow h-11">
          <SearchField.SearchIcon />
          <SearchField.Input
            placeholder="Search..."
            onChange={(e: any) => {
              const searchText = typeof e === "string" ? e : e?.target?.value;
              handleFilterChange("search", searchText || "");
            }}
          />
          <SearchField.ClearButton
            onClick={() => handleFilterChange("search", "")}
          />
        </SearchField.Group>
      </SearchField>

      {/* Dynamic Category Selector - Fixed: Defaults to 'all' if no parameter is active */}
      <Select
        placeholder="Select Category"
        selectedKey={searchParams.get("category") || "all"}
        onSelectionChange={(key) =>
          handleFilterChange("category", key.toString())
        }
      >
        <Select.Trigger className="customShadow py-3">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {category.map((cat) => (
              <ListBox.Item key={cat.id} id={cat.id} textValue={cat.name}>
                {cat.name}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      {/* Numeric Min & Max Price Ranges */}
      <div className="flex items-center gap-2 border p-2 rounded-lg customShadow">
        <Input
          type="number"
          placeholder="Min Price"
          className="customShadow w-1/2 min-w-0"
          defaultValue={searchParams.get("minPrice")?.toString()}
          onChange={(e) => handleFilterChange("minPrice", e.target.value)}
        />
        <Input
          type="number"
          placeholder="Max Price"
          className="customShadow w-1/2 min-w-0"
          defaultValue={searchParams.get("maxPrice")?.toString()}
          onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
        />
      </div>

      {/* Sorting Strategy Selector - Fixed: Clean URL management using fallback key mapping */}
      <Select
        placeholder="Sort by Price"
        selectedKey={searchParams.get("sort") || "all"}
        onSelectionChange={(key) => handleFilterChange("sort", key.toString())}
      >
        <Select.Trigger className="customShadow py-3">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="all" textValue="Price: Default">
              Price: Default
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="price_asc" textValue="Price: Low to High">
              Price: Low to High
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="price_desc" textValue="Price: High to Low">
              Price: High to Low
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default ExploreFilters;
