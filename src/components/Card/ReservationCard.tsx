import React from "react";

const ReservationCard = ({
  image,
  name,
  date,
  time,
  guest,
  status,
}: {
  image: string;
  name: string;
  date: string;
  time: string;
  guest: number;
  status: string;
}) => {
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
          {status === "Confirmed" && (
            <span className="text-sm w-fit bg-text-muted text-white px-1 py-1 rounded-md">
              Confirmed
            </span>
          )}
          {status === "Pending" && (
            <span className="text-sm w-fit bg-yellow-500 text-white px-2 py-1 rounded-md">
              Pending
            </span>
          )}
          {status === "Canceled" && (
            <span className="text-sm w-fit bg-red-500 text-white px-2 py-1 rounded-md">
              Canceled
            </span>
          )}
          {status === "Completed" && (
            <span className="text-sm w-fit bg-success text-white px-2 py-1 rounded-md">
              Completed
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center ">
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;
