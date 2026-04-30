import http from "@/utils/http-util";
import { API_ROUTE } from "@/utils/route-utils";

const Booking_API = {
  createBooking: async (data: IBooking.IBookingForm) => {
    console.log("📦 SENDING:", data);

    const res = await http.post(API_ROUTE.createBooking, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data.data;
  },
};
export default Booking_API;
