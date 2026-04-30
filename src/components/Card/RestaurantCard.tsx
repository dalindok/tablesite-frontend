"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

interface RestaurantCardProps {
  id: number;
  name: string;
  imgUrl: string;
  rating: number;
  reviewCount: string;
  location: string;
  priceRange: string;
  type: string;
  isTopPick?: boolean;
  availableTimes?: string[];
}

const RestaurantCard = ({
  id,
  name,
  imgUrl,
  rating,
  reviewCount,
  location,
  priceRange,
  type,
  isTopPick = false,
  availableTimes = ["6:00 PM", "7:30 PM", "9:00 PM"],
}: RestaurantCardProps) => {
  const [liked, setLiked] = useState(false);
  const [selectedTime, setSelectedTime] = useState(availableTimes[0]);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:shadow-light transition-transform duration-200 hover:-translate-y-1">
      <Link href={`/restaurant/${id}`}>
        {/* Image Section */}
        <div className="relative">
          {!imgError ? (
            <img
              src={imgUrl}
              alt={name}
              className="w-full h-50 object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-50 bg-gray-300 flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}

          {/* Top Pick Badge */}
          {isTopPick && (
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
              <FaStar className="text-yellow-300" size={10} />
              Top Pick
            </div>
          )}

          {/* Heart Button */}
          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
          >
            <FaHeart
              size={16}
              className={liked ? "text-primary" : "text-gray-300"}
            />
          </button>
        </div>

        {/* Info Section */}
        <div className="p-4">
          {/* Type */}
          <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
            {type}
          </p>

          {/* Name */}
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
            <IoLocationSharp className="text-primary" size={14} />
            <span>{location}</span>
          </div>

          {/* Rating & Price */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"
                  }
                />
              ))}
              <span className="text-sm font-semibold ml-1">{rating}</span>
              <span className="text-sm text-gray-400">({reviewCount})</span>
            </div>
            <span className="font-bold text-gray-800">{priceRange}</span>
          </div>

          {/* Time Slots */}
          {/* <div className="flex gap-2 mt-3">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`text-sm px-3 py-1.5 rounded-lg border font-medium transition ${
                  selectedTime === time
                    ? "border-primary text-primary"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {time}
              </button>
            ))}
          </div> */}

          {/* Reserve Button */}
          <button className="mt-4 w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-hover transition">
            Reserve a Table
          </button>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
