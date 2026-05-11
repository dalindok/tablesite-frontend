import ReservationCard from "@/components/Card/ReservationCard";
import React from "react";
// interface HistoryReservationList {
//   historyList:IBookingList.IBookingListData[];
// }
const History = ({
  historyList,
}: {
  historyList: IBookingList.IBookingListData[];
}) => {
  return (
    <div>
      <p className="text-xl font-semibold mb-8">Past Reservations</p>
      {historyList.map((reservation) => (
        <ReservationCard
          key={reservation.id}
          image={reservation.restaurant.cover_image_url}
          name={reservation.restaurant.name}
          date={reservation.booking_date}
          time={reservation.booking_time}
          guest={reservation.party_size}
          status={reservation.status}
          isHistory={true}
        />
      ))}
    </div>
  );
};

export default History;
