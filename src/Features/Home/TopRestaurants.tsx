import RestaurantCard from "@/components/Card/RestaurantCard";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const mock = [
  {
    id: 1,
    name: "La Piazza Romana",
    imgUrl: "/image/hotels/restaurant.jpg",
    rating: 4.9,
    reviewCount: "1.2k",
    location: "Daun Penh, Phnom Penh",
    priceRange: "$$",
    type: "Italian",
    isTopPick: true,
    availableTimes: ["6:00 PM", "7:30 PM", "9:00 PM"],
  },
  {
    id: 2,
    name: "La Piazza Romana",
    imgUrl: "/image/hotels/restaurant2.jpg",
    rating: 4.9,
    reviewCount: "1.2k",
    location: "Daun Penh, Phnom Penh",
    priceRange: "$$",
    type: "Italian",
    isTopPick: true,
    availableTimes: ["6:00 PM", "7:30 PM", "9:00 PM"],
  },
  {
    id: 3,
    name: "La Piazza Romana",
    imgUrl: "/image/hotels/restaurant.jpg",
    rating: 4.9,
    reviewCount: "1.2k",
    location: "Daun Penh, Phnom Penh",
    priceRange: "$$",
    type: "Italian",
    isTopPick: true,
    availableTimes: ["6:00 PM", "7:30 PM", "9:00 PM"],
  },
  {
    id: 4,
    name: "La Piazza Romana",
    imgUrl: "/image/hotels/restaurant2.jpg",
    rating: 4.9,
    reviewCount: "1.2k",
    location: "Daun Penh, Phnom Penh",
    priceRange: "$$",
    type: "Italian",
    isTopPick: true,
    availableTimes: ["6:00 PM", "7:30 PM", "9:00 PM"],
  },
  {
    id: 5,
    name: "La Piazza Romana",
    imgUrl: "/image/hotels/restaurant.jpg",
    rating: 4.9,
    reviewCount: "1.2k",
    location: "Daun Penh, Phnom Penh",
    priceRange: "$$",
    type: "Italian",
    isTopPick: true,
    availableTimes: ["6:00 PM", "7:30 PM", "9:00 PM"],
  },
  {
    id: 6,
    name: "La Piazza Romana",
    imgUrl: "/image/hotels/restaurant2.jpg",
    rating: 4.9,
    reviewCount: "1.2k",
    location: "Daun Penh, Phnom Penh",
    priceRange: "$$",
    type: "Italian",
    isTopPick: true,
    availableTimes: ["6:00 PM", "7:30 PM", "9:00 PM"],
  },
];
const TopRestaurants = () => {
  return (
    <div className="">
      <p className="text-md font-semibold text-primary">Featured Picks</p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row font-semibold font-libre text-4xl gap-2 mt-6">
          <p>Top</p>
          <div></div>
          <p className="text-primary">Restaurants</p>
        </div>
        <div className="flex flex-row text-primary items-center gap-1 text-md font-semibold hover:text-primary-hover cursor-pointer">
          <p>See All</p>
          <IoIosArrowRoundForward size={24} className="" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {mock.map((item) => (
          <RestaurantCard
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
            rating={item.rating}
            location={item.location}
            priceRange={item.priceRange}
            type={item.type}
            availableTimes={item.availableTimes}
            isTopPick={item.isTopPick}
            reviewCount={item.reviewCount}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;
