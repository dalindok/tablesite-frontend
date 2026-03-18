"use client";

import CategoryFilter from "@/components/Card/CategoryFilter";
import MenuItemCard from "@/components/Card/MenuItemCard";
import { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import MenuItemCard from "./MenuItemCard";

const menuItems = [
  {
    img: "/image/pizza.png",
    name: "Margherita Pizza",
    category: "Pizza",
    description: "San Marzano tomato, buffalo mozzarella, fresh basil",
    price: "$12",
  },
  {
    img: "/image/pizza.png",
    name: "Spaghetti Carbonara",
    category: "Pasta",
    description: "Guanciale, egg yolk, Pecorino Romano",
    price: "$14",
  },
  {
    img: "/image/pizza.png",
    name: "Caprese Salad",
    category: "Starters",
    description: "Buffalo mozzarella, tomatoes, basil oil",
    price: "$10",
  },
];

export default function MenuSection() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  return (
    <div className="mt-6">
      <CategoryFilter category={category} setCategory={setCategory} />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {filtered.map((item, index) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
