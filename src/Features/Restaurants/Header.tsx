"use client";
import React, { useState } from "react";

const Header = ({
  initialSearch = "",
  onSearch,
}: {
  initialSearch?: string;
  onSearch: (search: string) => void;
}) => {
  const [search, setSearch] = useState(initialSearch);
  return (
    <div>
      <div className="text-3xl flex flex-row gap-2 mb-2 font-semibold">
        <p className="text-white">Restaurants in </p>
        <p className="font-libre text-primary">Cambodia</p>
      </div>
      <p className="text-text-muted">
        Discover and reserve tables at 400+ partner restaurants
      </p>
      <div className="mt-16 flex flex-row gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(search)} // ✅ search on Enter
          placeholder="Search Restaurant or cuisine..."
          className="w-md border border-gray-300 rounded-lg px-6 py-2.5 text-sm bg-gray-100 focus:border-primary"
        />
        <button
          onClick={() => onSearch(search)} // ✅ search on click
          className="bg-primary text-white font-semibold px-6 py-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 whitespace-nowrap cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
