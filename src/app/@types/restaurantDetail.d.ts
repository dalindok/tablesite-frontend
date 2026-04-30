declare namespace RestaurantDetail {
  export interface Root {
    success: boolean;
    message: string;
    data: RetaurantData;
  }

  export interface RetaurantData {
    id: number;
    name: string;
    slug: string;
    description: string;
    cuisine_type: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    phone: string;
    email: string;
    website: string;
    cover_image_url: string;
    latitude: string;
    longitude: string;
    average_rating: string;
    total_reviews: number;
    gallery_images: GalleryImage[];
    menus: Menu[];
    tables: Table[];
    tags: Tag[];
    amenities: any[];
    owner: Owner;
    operating_hours: OperatingHour[];
    special_closures: SpecialClosure[];
    policies: Policies;
    table_statistics: TableStatistics;
    recent_reviews: any[];
    is_favorited: boolean;
    created_at: string;
    updated_at: string;
    max_capacity: number;
    min_capacity: number;
  }

  export interface GalleryImage {
    id: number;
    restaurant_id: number;
    url: string;
    caption: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
  }

  export interface Menu {
    id: number;
    restaurant_id: number;
    name: string;
    description: string;
    price: any;
    image: any;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
    items: Item[];
  }

  export interface Item {
    id: number;
    menu_id: number;
    name: string;
    description: string;
    price: string;
    image_url: any;
    category: string;
    is_available: boolean;
    is_vegan: boolean;
    is_vegetarian: boolean;
    is_gluten_free: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
  }

  export interface Table {
    id: number;
    restaurant_id: number;
    table_number: string;
    capacity: number;
    floor: string;
    status: string;
    is_active: boolean;
    description: string;
    created_at: string;
    updated_at: string;
    booking_tables: any[];
  }

  export interface Tag {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }

  export interface Owner {
    id: number;
    user: User;
  }

  export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar_url: any;
  }

  export interface OperatingHour {
    id: number;
    restaurant_id: number;
    day_of_week: string;
    open_time: string;
    close_time: string;
    is_closed: boolean;
    created_at: string;
    updated_at: string;
  }

  export interface SpecialClosure {
    id: number;
    restaurant_id: number;
    date: string;
    reason: string;
    created_at: string;
    updated_at: string;
  }

  export interface Policies {
    min_booking_notice: number;
    max_booking_days: number;
    cancellation_hours: number;
    deposit_required: boolean;
    deposit_amount: string;
  }

  export interface TableStatistics {
    total_tables: number;
    available_tables: number;
  }
}
