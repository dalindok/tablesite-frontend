declare namespace Restaurant {
  interface Root {
    success: boolean;
    message: string;
    data: Data;
  }
  interface RestaurantDataListResponse {
    data: RestaurantDataList[];
    pagination: Pagination;
  }

  interface RestaurantDataList {
    id: number;
    name: string;
    slug: string;
    description: string;
    cuisine_type: string;
    address: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    email: string;
    website: string;
    cover_image_url: string;
    average_rating: string;
    total_reviews: number;
    gallery_images: GalleryImage[];
    tags: Tag[];
    amenities: any[];
    owner: Owner;
    stats: Stats;
    created_at: string;
  }

  interface GalleryImage {
    id: number;
    restaurant_id: number;
    url: string;
    caption: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
  }

  interface Tag {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }

  interface Owner {
    id: number;
    user: User;
  }

  interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar_url: any;
  }

  interface Stats {
    total_bookings: number;
    total_reviews: number;
  }

  interface Pagination {
    page: number;
    limit: number;
    total: number;
    pages: number;
  }
}
