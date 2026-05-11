declare namespace IBookingList {
  export interface Root {
    success: boolean;
    message: string;
    data: Data;
  }

  export interface IBookingListRes {
    data: IBookingListData[];
    pagination: Pagination;
  }

  export interface IBookingListData {
    id: number;
    reference_code: string;
    status: string;
    booking_date: string;
    booking_time: string;
    party_size: number;
    duration_minutes: number;
    special_requests: string;
    restaurant: Restaurant;
    tables: Table[];
    created_at: string;
  }

  export interface Restaurant {
    id: number;
    name: string;
    slug: string;
    cover_image_url: string;
  }

  export interface Table {
    id: number;
    table_number: string;
    capacity: number;
  }

  export interface Pagination {
    page: number;
    limit: number;
    total: number;
    pages: number;
  }
}
