import http from "@/utils/http-util";
import { API_ROUTE } from "@/utils/route-utils";

const Booking_API = {
  createBooking: async (data: IBooking.IBookingForm) => {
    console.log("📦 SENDING:", data);

    const res = await http.post(API_ROUTE.createBooking, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.data.data;
  },
  listBookings: async (params: { booking_type?: string }) => {
    const res = await http.get<IBookingList.Root>(API_ROUTE.listBookings, {
      params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("token", localStorage.getItem("token"));
    console.log("Full res.data:", res.data); // see the whole shape
    console.log("res.data.data:", res.data.data); // see what .data is
    return res.data.data.data;
  },
  // bookingDetails: async (id: string) => {
  //   const res = await http.get(API_ROUTE.bookingDetails.replace(":id", id));
  //   return res.data.data;
  // },
  cancelBooking: async (id: string, reason: string) => {
    const res = await http.post(API_ROUTE.cancelBooking.replace(":id", id), {
      reason,
    });
    return res.data.data;
  },
};
export default Booking_API;
