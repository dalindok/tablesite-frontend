declare namespace Restaurant {
  export interface IRestaurant {
    restaurant_id: number;
    owner_id: number;
    name: string;
    description: string;
    address: string;
    city: string;
    cuisine_type: string;
    price_range: PriceRange;
    cover_image: string | null;
    avg_rating: number | null;
    total_reviews: number;
    is_active: boolean;
    is_approved: boolean;
    documents_complete: boolean;
    features: string[];
    latitude: number;
    longitude: number;
    categories: ICategory[];
    created_at: string;
    updated_at: string;
  }
  interface ICategory {
    category_id: number;
    name: string;
    slug: string;
    icon: string;
    description: string;
    restaurant_count: number;
  }
}
