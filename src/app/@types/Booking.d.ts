declare namespace IBooking {
  export interface BookingResponse {
    success: boolean;
    message: string;
    data: BookingData;
  }

  export interface IBookingData {
    id: number;
    reference_code: string;
    status: string;
    booking_date: string;
    booking_time: string;
    party_size: number;
    duration_minutes: number;
    special_requests: any;
    restaurant: Restaurant;
    tables: Table[];
    customer: Customer;
    created_at: string;
  }
  export interface Restaurant {
    id: number;
    name: string;
    slug: string;
  }

  export interface Table {
    id: number;
    table_number: string;
    capacity: number;
  }

  export interface Customer {
    name: string;
    email: string;
    phone: string;
  }

  interface IBookingForm {
    restaurant_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    booking_date: string;
    booking_time: string;
    party_size: number;
    special_requests?: string;
    duration_minutes?: number;
    table_id?: number[];
  }
}
