import ReservationCard from "@/components/Card/ReservationCard";
import React from "react";

const mockData = [
  {
    id: 1,
    image: "/image/hotels/restaurant.jpg",
    name: "Hotel California",
    date: "2024-07-15",
    time: "14:00",
    guest: 2,
    status: "Completed",
  },
  {
    id: 2,
    image: "/image/hotels/restaurant2.jpg",
    name: "Grand Hotel",
    date: "2024-08-20",
    time: "16:00",
    guest: 4,
    status: "Canceled",
  },
  {
    id: 3,
    image: "/image/hotels/restaurant2.jpg",
    name: "Grand Hotel",
    date: "2024-08-20",
    time: "16:00",
    guest: 4,
    status: "Completed",
  },
];
const History = () => {
  return (
    <div>
      <p className="text-xl font-semibold mb-8">Past Reservations</p>
      {mockData.map((reservation) => (
        <ReservationCard
          key={reservation.id}
          image={reservation.image}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          guest={reservation.guest}
          status={reservation.status}
        />
      ))}
    </div>
  );
};

export default History;
