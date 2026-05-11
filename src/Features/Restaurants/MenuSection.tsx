"use client";

import CategoryFilter from "@/components/Card/CategoryFilter";
import MenuItemCard from "@/components/Card/MenuItemCard";
import { useState } from "react";

interface MenuItem {
  data: RestaurantDetail.RetaurantData | undefined;
}

export default function MenuSection({ data }: MenuItem) {
  const [category, setCategory] = useState("All");

  // ✅ Flatten ALL items from ALL menus
  const allMenuItems = data?.menus?.flatMap((menu) => menu.items) ?? [];

  // ✅ Get unique categories from items
  const categories = [
    "All",
    ...new Set(allMenuItems.map((item) => item.category)),
  ];

  // ✅ Filter by item.category, not item.name
  const filtered =
    category === "All"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === category);
  console.log("categories", categories);
  return (
    <div className="mt-6">
      <CategoryFilter
        categories={categories} // pass dynamic categories
        category={category}
        setCategory={setCategory}
      />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {filtered.map((item, index) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
