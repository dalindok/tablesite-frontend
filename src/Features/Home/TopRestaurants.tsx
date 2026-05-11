"use client";
import Restaurant_API from "@/app/api/Restaurant";
import RestaurantCard from "@/components/Card/RestaurantCard";
import { useRequest } from "ahooks";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const TopRestaurants = () => {
  const { data, loading, error, refresh } = useRequest(() =>
    Restaurant_API.listRestaurants({
      page: 1,
      limit: 20,
      sortBy: "popular",
    }),
  );
  console.log("data:", data);
  return (
    <div className="">
      <p className="text-md font-semibold text-primary">Featured Picks</p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row font-semibold font-libre text-4xl gap-2 mt-6">
          <p>Top</p>
          <div></div>
          <p className="text-primary">Restaurants</p>
        </div>
        {/* <div className="flex flex-row text-primary items-center gap-1 text-md font-semibold hover:text-primary-hover cursor-pointer">
          <p>See All</p>
          <IoIosArrowRoundForward size={24} className="" />
        </div> */}
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {data?.data.map((item) => (
          <RestaurantCard
            key={item.id}
            id={item.id}
            name={item.name}
            imgUrl={item.cover_image_url}
            rating={item.average_rating}
            location={`${item.address}, ${item.city}, ${item.state}`}
            priceRange="$$"
            type={item.cuisine_type}
            // availableTimes={item.}
            // isTopPick={item.isTopPick}
            reviewCount={item.total_reviews.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;
