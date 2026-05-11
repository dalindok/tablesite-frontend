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
  const [page, setPage] = React.useState(1); // Start at 1
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
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
        page,
        limit: rowsPerPage, // Use rowsPerPage instead of fixed 20
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
      refreshDeps: [filters, page, rowsPerPage],
    },
  );

  const restaurants = data?.data ?? [];
  const pagination = data?.pagination;
  const totalPages = pagination?.pages ?? 1;
  return (
    <div>
      <div className="py-12 px-16 bg-dark">
        <Header
          initialSearch={filters.search}
          onSearch={(search) => {
            setPage(1); // ✅ reset to page 1 on new search
            setFilters((prev) => ({ ...prev, search }));
          }}
        />
      </div>
      <div className="flex min-h-screen  overflow-hidden">
        <SideBar filters={filters} setFilters={setFilters} />
        <main className="flex-1 p-6 overflow-hidden overflow-y-auto">
          <div className="flex flex-row justify-between items-center py-4">
            {/* Fix: use restaurants.length, not data?.length */}
            <p>Showing {loading ? "..." : restaurants.length} restaurants</p>
            {/* Pagination */}
            <div className="flex items-center gap-4">
              <button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="text-sm text-gray-500 px-2 py-1 border rounded border-gray-500 disabled:opacity-20"
              >
                Previous
              </button>

              <p className="text-sm text-gray-500">
                Page {page} of {totalPages}
              </p>

              <button
                disabled={page === totalPages}
                onClick={() => setPage((prev) => prev + 1)}
                className="text-sm text-gray-500 px-2 py-1 border rounded border-gray-500 disabled:opacity-20"
              >
                Next
              </button>
            </div>
          </div>

          {loading ? (
            <p className="mt-6 text-gray-400">Loading...</p>
          ) : (
            <div className="grid grid-cols-3 gap-6 mt-6">
              {restaurants.map((item: IRestaurant.RestaurantDataList) => (
                <RestaurantCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  imgUrl={item.cover_image_url}
                  rating={item.average_rating}
                  location={`${item.address}, ${item.city}, ${item.state}`}
                  priceRange={item.price_range}
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
