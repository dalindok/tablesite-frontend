import SideBar from "@/components/SideBar";
import RestaurantCard from "@/components/Card/RestaurantCard";
import Header from "@/Features/Restaurants/Header";
import React from "react";

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
const page = () => {
  return (
    <div className=" ">
      <div className="py-12 px-16 bg-dark">
        <Header />
      </div>
      <div className="flex min-h-screen h-screen overflow-hidden">
        <SideBar />
        <main className="flex-1 p-6 overflow-hidden overflow-y-auto">
          <div className="flex flex-row justify-between">
            <p>Showing 247 restaurants</p>
            <div>
              <select
                name=""
                id=""
                className="border border-gray-300 rounded-lg px-4 py-2.5 w-52 text-sm bg-gray-100 outline-none focus:border-primary focus:bg-white"
              >
                <option value="">Top Rated</option>
                <option value="">Most Popular</option>
                <option value="">Price: Low to High</option>
                <option value="">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 scroll-auto">
            {/* Restaurant Cards */}
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
        </main>
      </div>
    </div>
  );
};

export default page;
