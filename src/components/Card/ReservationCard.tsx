"use client";
import React, { useState } from "react";
import CancelBookingModal from "./CancelBookingModal";

const ReservationCard = ({
  id,
  image,
  name,
  date,
  time,
  guest,
  status,
  isHistory = false,
  cancelBooking,
}: {
  id: string;
  image: string;
  name: string;
  date: string;
  time: string;
  guest: number;
  status: string;
  isHistory?: boolean;
  cancelBooking?: (id: string, reason: string) => void;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className=" flex flex-row justify-between gap-4 border rounded-xl border-gray-200 p-4 mb-4">
      <div className="flex flex-row items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover rounded-xl"
        />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">{name}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Guests: {guest}</p>
          {status === "CONFIRMED" && (
            <span className="text-sm w-fit bg-text-muted text-white px-1 py-1 rounded-md">
              Confirmed
            </span>
          )}
          {status === "PENDING" && (
            <span className="text-sm w-fit bg-yellow-500 text-white px-2 py-1 rounded-md">
              Pending
            </span>
          )}
          {status === "CANCELLED" && (
            <span className="text-sm w-fit bg-red-500 text-white px-2 py-1 rounded-md">
              Canceled
            </span>
          )}
          {status === "COMPLETED" && (
            <span className="text-sm w-fit bg-success text-white px-2 py-1 rounded-md">
              Completed
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center ">
        <button
          disabled={status !== "PENDING" || isHistory}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={() => setModalOpen(true)}
        >
          Cancel
        </button>
      </div>
      <CancelBookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={(reason) => cancelBooking?.(id, reason)} // ✅ passes reason up
      />
    </div>
  );
};

export default ReservationCard;
