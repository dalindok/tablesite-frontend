"use client";
import React, { useState } from "react";
import BookingDetailCard from "./BookingDetailCard";

// Generate 30-min time slots between open and close time
function generateTimeSlots(openTime: string, closeTime: string) {
  const slots = [];
  const [openH, openM] = openTime.split(":").map(Number);
  const [closeH, closeM] = closeTime.split(":").map(Number);

  let current = openH * 60 + openM;
  const end = closeH * 60 + closeM;

  while (current < end) {
    const h = Math.floor(current / 60);
    const m = current % 60;
    slots.push({
      time: `${h}:${m === 0 ? "00" : m}`,
      available: true, // you can cross-check with bookings later
    });
    current += 30;
  }
  return slots;
}

interface BookingCardProps {
  data: RestaurantDetail.RetaurantData | undefined;
}

const BookingCard = ({ data }: BookingCardProps) => {
  const today = new Date();

  // Generate time slots from API hours, fallback to defaults
  const TIME_SLOTS = data?.operating_hours
    ? generateTimeSlots(
        data.operating_hours?.[0]?.open_time,
        data.operating_hours?.[0]?.close_time,
      )
    : generateTimeSlots("09:00", "22:00"); // fallback defaults

  // Get max guest count from largest table capacity
  const maxCapacity = data?.tables
    ? Math.max(...data.tables.map((t) => t.capacity))
    : 10;
  const GUEST_OPTIONS = Array.from({ length: maxCapacity }, (_, i) => i + 1);

  const [date, setDate] = useState(today.toISOString().split("T")[0]);
  const [guests, setGuests] = useState(2);
  // Add this state near your other useState hooks:
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]?.time ?? "");
  const [isOpenBooking, setIsOpenBooking] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6 w-full">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Reserve a Table
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Free cancellation up to {data?.policies?.cancellation_hours ?? 2}{" "}
          hours before
        </p>

        {/* Date */}
        <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
          Date
        </label>
        <input
          type="date"
          value={date}
          min={today.toISOString().split("T")[0]}
          max={
            new Date(
              today.setDate(
                today.getDate() + (data?.policies?.max_booking_days ?? 30),
              ),
            )
              .toISOString()
              .split("T")[0]
          }
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
        {/* Time slots */}
        <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
          Times
        </label>
        <div className="relative">
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {TIME_SLOTS.map((t) => (
              <option key={t.time} value={t.time}>
                {t.time}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setIsOpenBooking(true)}
          // disabled={!selectedTime}
          className="w-full py-3.5 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, #E8440A, #FF6B35)" }}
        >
          Continue Booking →
        </button>

        <p className="text-center text-xs text-gray-400 mt-3">
          🔒 Free • Instant confirmation • No credit card needed
        </p>
      </div>

      {isOpenBooking && data && (
        <BookingDetailCard
          restaurantId={data.id}
          restaurantName={data.name}
          restaurantImg={data.cover_image_url}
          time_slot={TIME_SLOTS}
          initialDate={date}
          initialTime={selectedTime}
          initialGuests={guests}
          onClose={() => setIsOpenBooking(false)}
          onSuccess={() => {
            setIsOpenBooking(false);
            alert("Booking successful!");
          }}
        />
      )}
    </>
  );
};

export default BookingCard;
