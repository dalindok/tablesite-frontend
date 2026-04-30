"use client";
import SideBar from "@/components/SideBar";
import RestaurantCard from "@/components/Card/RestaurantCard";
import Header from "@/Features/Restaurants/Header";
import React, { useState } from "react";
import Restaurant_API, { priceRateMap } from "../api/Restaurant";
import { useRequest } from "ahooks";
import { useSearchParams } from "next/navigation"; // ← add this

const RestaurantListPage = () => {
  const searchParams = useSearchParams(); // ← reads ?search=...&priceRate=...

  const [filters, setFilters] = useState({
    search: searchParams.get("search") ?? "", // ← pre-filled from URL
    location: searchParams.get("location") ?? "", // ← pre-filled from URL
    date: searchParams.get("date") ?? "", // ← pre-filled from URL
    guests: 1,
    cuisines: [] as string[],
    neighborhoods: [] as string[],
    priceRate: searchParams.get("priceRate") ?? "", // ← pre-filled from URL
    sortBy: "",
  });

  const { data, loading } = useRequest(
    () =>
      Restaurant_API.listRestaurants({
        page: 1,
        limit: 20,
        search: filters.search || undefined,
        location: filters.location || undefined,
        date: filters.date ? new Date(filters.date).toISOString() : undefined,
        // API accepts a single cuisine string — send the first selected
        cuisine: filters.cuisines.length > 0 ? filters.cuisines[0] : undefined,
        // Map "$" → "low", "$$" → "medium", etc.
        priceRate: filters.priceRate
          ? priceRateMap[filters.priceRate]
          : undefined,
        sortBy: filters.sortBy || undefined,
      }),
    {
      refreshDeps: [filters],
    },
  );

  const restaurants = data ?? [];

  return (
    <div>
      <div className="py-12 px-16 bg-dark">
        <Header />
      </div>
      <div className="flex min-h-screen h-screen overflow-hidden">
        <SideBar filters={filters} setFilters={setFilters} />
        <main className="flex-1 p-6 overflow-hidden overflow-y-auto">
          <div className="flex flex-row justify-between items-center">
            {/* Fix: use restaurants.length, not data?.length */}
            <p>Showing {loading ? "..." : restaurants.length} restaurants</p>
            {/* <div>
              <select
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                }
                className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white"
              >
                <option value="">All</option>
                <option value="rated">Top Rated</option>
                <option value="popular">Most Popular</option>
              </select>
            </div> */}
          </div>

          {loading ? (
            <p className="mt-6 text-gray-400">Loading...</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 mt-6">
              {restaurants.map((item: Restaurant.RestaurantDataList) => (
                <RestaurantCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  imgUrl={item.cover_image_url}
                  rating={parseFloat(item.average_rating)}
                  location={`${item.address}, ${item.city}, ${item.state}`}
                  priceRange="$$"
                  type={item.cuisine_type}
                  isTopPick={false}
                  reviewCount={item.total_reviews.toString()}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default RestaurantListPage;
