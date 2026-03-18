import BookingCard from "@/components/Card/BookingCard";
import AboutSection from "@/Features/Restaurants/AboutSection";
import DetailHeader from "@/Features/Restaurants/DetailHeader";
import RestaurantDetail from "@/Features/Restaurants/RestaurantDetail";
import React from "react";

const page = () => {
  return (
    <div>
      <DetailHeader />
      <div className="py-12 px-16 grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        <div className="lg:col-span-2">
          <RestaurantDetail />
        </div>

        <div className="lg:col-span-1">
          <BookingCard />
        </div>
      </div>
    </div>
  );
};

export default page;
