"use client";
import React, { useState } from "react";
import BookingDetailCard from "./BookingDetailCard";

const RESTAURANT = {
  name: "La Trattoria Roma",
  description:
    "A beloved neighborhood Italian restaurant bringing the warmth and flavors of Rome to Phnom Penh. Our wood-fired oven produces authentic Neapolitan pizzas, while our handmade pasta dishes use only the finest imported Italian ingredients.",
  openingHours: {
    weekdays: "Mon–Fri: 11am – 10pm",
    weekends: "Sat–Sun: 10am – 11pm",
  },
  avgMealTime: "1 hour 30 minutes",
  minParty: "1 Guest",
  maxParty: "20 Guests",
  dressCode: "Smart Casual",
  parking: "Valet available",
  amenities: [
    { icon: "🌿", label: "Outdoor Seating" },
    { icon: "🍷", label: "Full Bar" },
    { icon: "🅿️", label: "Valet Parking" },
    { icon: "♿", label: "Accessible" },
    { icon: "📶", label: "Free WiFi" },
    { icon: "🎉", label: "Private Events" },
  ],
  rating: 4.9,
  reviewCount: 1247,
  ratingBreakdown: { 5: 80, 4: 14, 3: 4, 2: 2 },
  reviews: [
    {
      id: 1,
      name: "Sophea Lim",
      avatar: "🐱",
      avatarBg: "#FDDCB5",
      timeAgo: "2 weeks ago",
      rating: 5,
      text: "Absolutely amazing food and atmosphere. The carbonara was the best I've ever had. Booking through DinEasy was seamless. Will definitely be back!",
    },
    {
      id: 2,
      name: "Dara Chan",
      avatar: "🐯",
      avatarBg: "#B5E0D4",
      timeAgo: "1 month ago",
      rating: 5,
      text: "Great place for a date night. The pizza from the wood-fired oven is incredible. Staff is very friendly and attentive. Highly recommend!",
    },
  ],
  menu: {
    categories: ["All", "Starters", "Pasta", "Pizza", "Desserts"],
    items: [
      {
        id: 1,
        category: "Pizza",
        name: "Margherita Pizza",
        desc: "San Marzano tomato, buffalo mozzarella, fresh basil",
        price: "$12",
        icon: "🍕",
        bg: "#FFF3E8",
      },
      {
        id: 2,
        category: "Pasta",
        name: "Spaghetti Carbonara",
        desc: "Guanciale, egg yolk, Pecorino Romano, black pepper",
        price: "$14",
        icon: "🍝",
        bg: "#FFE8F0",
      },
      {
        id: 3,
        category: "Starters",
        name: "Caprese Salad",
        desc: "Buffalo mozzarella, heirloom tomatoes, basil oil",
        price: "$10",
        icon: "🥗",
        bg: "#E8F5E8",
      },
      {
        id: 4,
        category: "Desserts",
        name: "Limoncello Tiramisu",
        desc: "Savoiardi, mascarpone, espresso, limoncello",
        price: "$8",
        icon: "🍋",
        bg: "#FFFBE8",
      },
      {
        id: 5,
        category: "Starters",
        name: "Gamberi al Pomodoro",
        desc: "Tiger prawns, cherry tomatoes, white wine, garlic",
        price: "$18",
        icon: "🦐",
        bg: "#FFE8E8",
      },
      {
        id: 6,
        category: "Starters",
        name: "House Red Wine",
        desc: "Montepulciano D'Abruzzo, medium-bodied",
        price: "$9/glass",
        icon: "🍷",
        bg: "#F5E8F5",
      },
    ],
  },
  photos: [
    { icon: "🍕", label: "Pizza" },
    { icon: "🍝", label: "Pasta" },
    { icon: "🥗", label: "Salad" },
    { icon: "🍷", label: "Wine" },
    { icon: "🍰", label: "Dessert" },
    { icon: "🦐", label: "Seafood" },
  ],
};

const TIME_SLOTS = [
  { time: "12:00", available: true },
  { time: "12:30", available: true },
  { time: "1:00", available: true },
  { time: "1:30", available: false },
  { time: "6:00", available: true },
  { time: "6:30", available: true },
  { time: "7:00", available: true },
  { time: "7:30", available: false },
  { time: "8:00", available: true },
];

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const BookingCard = () => {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [guests, setGuests] = useState(3);
  const [selectedTime, setSelectedTime] = useState("6:00");
  const [isOpenBooking, setIsOpenBooking] = useState(false);
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6 w-full">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Reserve a Table
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Free cancellation up to 2 hours before
        </p>

        {/* Date */}
        <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Guests */}
        <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
          Guests
        </label>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {GUEST_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>

        {/* Time slots */}
        <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
          Available Times
        </label>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {TIME_SLOTS.map(({ time, available }) => {
            const selected = selectedTime === time;
            return (
              <button
                key={time}
                disabled={!available}
                onClick={() => available && setSelectedTime(time)}
                className={`rounded-lg py-2 text-sm font-medium transition-all
                ${
                  !available
                    ? "text-gray-300 cursor-not-allowed border border-gray-100 line-through"
                    : selected
                      ? "border-2 border-orange-500 text-orange-500 bg-orange-50"
                      : "border border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-500"
                }`}
              >
                {time}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setIsOpenBooking(true)}
          className="w-full py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, #E8440A, #FF6B35)" }}
        >
          Continue Booking →
        </button>

        <p className="text-center text-xs text-gray-400 mt-3">
          🔒 Free • Instant confirmation • No credit card needed
        </p>
      </div>
      {isOpenBooking && (
        <BookingDetailCard onClose={() => setIsOpenBooking(false)} />
      )}
    </>
  );
};

export default BookingCard;
