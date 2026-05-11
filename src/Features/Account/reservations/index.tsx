import ReservationCard from "@/components/Card/ReservationCard";
import React from "react";

const Reservations = ({
  listReservation,
  cancelBooking,
}: {
  listReservation: IBookingList.IBookingListData[];
  cancelBooking: (id: string, reason: string) => void;
}) => {
  return (
    <div>
      <p className="text-xl font-semibold mb-8">Upcoming Reservations</p>
      {listReservation?.map((reservation) => (
        <ReservationCard
          key={reservation.id}
          id={reservation.id.toString()}
          image={reservation.restaurant.cover_image_url}
          name={reservation.restaurant.name}
          date={reservation.booking_date}
          time={reservation.booking_time}
          guest={reservation.party_size}
          status={reservation.status}
          cancelBooking={cancelBooking}
          // onCancel={() => cancelBooking(reservation.id)}
        />
      ))}
    </div>
  );
};

export default Reservations;
