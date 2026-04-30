"use client";

import { use } from "react";
import Restaurant_API from "@/app/api/Restaurant";
import BookingCard from "@/components/Card/BookingCard";
import AboutSection from "@/Features/Restaurants/AboutSection";
import DetailHeader from "@/Features/Restaurants/DetailHeader";
import RestaurantDetail from "@/Features/Restaurants/RestaurantDetail";
import { useRequest } from "ahooks";

const RestaurantDetailPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params); // ✅ unwrap here

  console.log("params.id:", id);

  const restaurantId = Number(id);

  const { data, loading, error } = useRequest(() =>
    Restaurant_API.getRestaurantDetails(restaurantId),
  );

  return (
    <div>
      <DetailHeader detail={data} />
      <div className="py-12 px-16 grid grid-cols-1 lg:grid-cols-3 gap-10 ">
        <div className="lg:col-span-2">
          <RestaurantDetail detail={data} />
        </div>

        <div className="lg:col-span-1">
          <BookingCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
