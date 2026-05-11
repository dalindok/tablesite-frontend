"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FilledButton from "./Button/FilledButton";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [priceRate, setPriceRate] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (location) params.set("location", location);
    if (date) params.set("date", date);
    if (priceRate) params.set("priceRate", priceRate); // "Any" is truthy! fix below

    console.log("params:", params.toString()); // ← check this in browser console
    router.push(`/restaurant?${params.toString()}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl px-6 py-6 gap-6 flex items-center">
      <div>
        <h2 className="text-lg font-bold mb-4">
          🔍 Search Available <span className="text-primary">Tables</span>
        </h2>
        <div className="flex flex-row gap-3">
          {/* Restaurant or Cuisine */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Restaurant or Cuisine
            </label>
            <input
              type="text"
              placeholder="Italian, Sushi, Burger..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-md border border-gray-300 bg-gray-100 rounded-lg px-6 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-primary focus:bg-white"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white"
            >
              <option value="">Anywhere</option>
              <option value="Phnom Penh">Phnom Penh</option>
              <option value="Siem Reap">Siem Reap</option>
              <option value="Battambang">Battambang</option>
              <option value="Sihanoukville">Sihanoukville</option>
              <option value="Kep">Kep</option>
              <option value="Kompot">Kompot</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]} // prevent past dates
              className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Price
            </label>
            <select
              value={priceRate}
              onChange={(e) => setPriceRate(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white"
            >
              <option value="">Any</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="mt-6">
            <button
              onClick={handleSearch}
              className="bg-primary text-white font-semibold px-6 py-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 whitespace-nowrap cursor-pointer"
            >
              Search →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
