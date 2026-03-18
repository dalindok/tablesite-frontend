import FilledButton from "@/components/Button/FilledButton";
import React from "react";

// const mock = [
//   {
//     id: 1,
//     name: "La Piazza Romana",
//     imgUrl: "/image/hotels/restaurant.jpg",
//     rating: 4.9,
//     reviewCount: "1.2k",
//     location: "Daun Penh, Phnom Penh",
//     priceRange: "$$",
//     type: "Italian",
//     isTopPick: true,
//     availableTimes: ["6:00 PM", "7:30 PM", "9:00 PM"],
//   },
// ];
const DetailHeader = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:h-96"
      style={{ backgroundImage: "url('/image/hotels/restaurant.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/70" />

      {/* Content sits above the overlay */}
      <div className="relative z-0 left-10 flex flex-col justify-end h-full p-6">
        <div className="flex flex-row text-sm text-text-muted mb-6 gap-2">
          <p className="hover:text-primary">Home </p>
          <p>/</p>
          <p className="hover:text-primary">Restaurant</p>
          <p>/</p>
          <p className="hover:text-primary"> La Piazza Romana</p>
        </div>
        <h1 className="text-white text-5xl font-bold font-libre">
          La Piazza Romana
        </h1>
        <div className="flex flex-row gap-4 text-white text-sm mt-6">
          <p className="text-white text-sm">⭐ 4.9 (1.2k reviews)</p>
          🍽️ Italian
          <p>📍 Daun Penh, Phnom Penh</p>
          <p>💰 $$</p>
          {/* <FilledButton label="Open Now" /> */}
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
