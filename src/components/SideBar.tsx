"use client";

import { useState } from "react";

import { Dispatch, SetStateAction } from "react";

type Filters = {
  search: string;
  location: string;
  date: string;
  guests: number;
  cuisines: string[];
  neighborhoods: string[];
  priceRate: string;
  sortBy: string;
};

type SideBarProps = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
};

const cuisines = [
  { label: "Italian", count: 64 },
  { label: "Japanese", count: 48 },
  { label: "French", count: 39 },
  { label: "Steakhouse", count: 28 },
  { label: "Seafood", count: 35 },
  { label: "Healthy", count: 41 },
  { label: "Asian Fusion", count: 52 },
];

const neighborhoods = [
  { label: "Daun Penh", count: 45 },
  { label: "BKK1", count: 54 },
  { label: "Toul Kork", count: 38 },
  { label: "Riverside", count: 29 },
];

const priceLevels = ["$", "$$", "$$$", "$$$$"];

export default function SideBar({ filters, setFilters }: SideBarProps) {
  const selectedCuisines = filters.cuisines;
  const selectedNeighborhoods = filters.neighborhoods;
  const selectedPrice = filters.priceRate;

  const toggleCuisine = (value: string) => {
    const updated = selectedCuisines.includes(value)
      ? selectedCuisines.filter((v) => v !== value)
      : [...selectedCuisines, value];

    setFilters((prev) => ({ ...prev, cuisines: updated }));
  };

  const toggleNeighborhood = (value: string) => {
    const updated = selectedNeighborhoods.includes(value)
      ? selectedNeighborhoods.filter((v) => v !== value)
      : [...selectedNeighborhoods, value];

    setFilters((prev) => ({ ...prev, neighborhoods: updated }));
  };

  const togglePrice = (value: string) => {
    setFilters((prev) => ({ ...prev, priceRate: value }));
  };

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-100 px-5 py-6 space-y-8 font-sans">
      {/* Cuisine */}
      <section>
        <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
          Cuisine
        </h3>
        <ul className="space-y-2">
          {cuisines.map(({ label, count }) => {
            const checked = selectedCuisines.includes(label);
            return (
              <li key={label} className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div
                    onClick={() => toggleCuisine(label)}
                    className={`w-4 h-4 rounded flex items-center justify-center border transition-colors cursor-pointer ${
                      checked
                        ? "bg-orange-500 border-orange-500"
                        : "border-gray-300 bg-white group-hover:border-orange-400"
                    }`}
                  >
                    {checked && (
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        viewBox="0 0 10 8"
                        fill="none"
                      >
                        <path
                          d="M1 4l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-sm ${checked ? "text-gray-800 font-medium" : "text-gray-600"}`}
                  >
                    {label}
                  </span>
                </label>
                <span className="text-xs px-1 rounded-sm bg-gray-100 text-gray-400">
                  {count}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Price Range */}
      <section>
        <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
          Price Range
        </h3>
        <div className="flex gap-2">
          {priceLevels.map((price) => (
            <button
              key={price}
              onClick={() => togglePrice(price)}
              className={`flex-1 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                selectedPrice === price
                  ? "border-orange-500 text-orange-500 bg-orange-50"
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              {price}
            </button>
          ))}
        </div>
      </section>

      {/* Neighborhood */}
      <section>
        <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
          Neighborhood
        </h3>
        <ul className="space-y-2">
          {neighborhoods.map(({ label, count }) => {
            const checked = selectedNeighborhoods.includes(label);
            return (
              <li key={label} className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div
                    onClick={() => toggleNeighborhood(label)}
                    className={`w-4 h-4 rounded flex items-center justify-center border transition-colors cursor-pointer ${
                      checked
                        ? "bg-orange-500 border-orange-500"
                        : "border-gray-300 bg-white group-hover:border-orange-400"
                    }`}
                  >
                    {checked && (
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        viewBox="0 0 10 8"
                        fill="none"
                      >
                        <path
                          d="M1 4l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-sm ${checked ? "text-gray-800 font-medium" : "text-gray-600"}`}
                  >
                    {label}
                  </span>
                </label>
                <span className="text-xs px-1 rounded-sm bg-gray-100 text-gray-400">
                  {count}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </aside>
  );
}
