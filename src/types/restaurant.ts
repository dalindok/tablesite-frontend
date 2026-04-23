declare namespace IRestaurant {
  interface IRestaurantData {
    id: number;
    owner_id: number;
    name: string;
    description: string;
    banner_image: string;
    image: string;
    cuisine_type: string;
    address: string;
    phone: string;
    email: string;
    operating_hours: string[];
    operating_days: string[];
    max_capacity: number;
    min_capacity: number;
    parking_available: boolean;
    dress_code: string;
    menu: IManu[];
    created_at: string;
    updated_at: string;
  }
  interface IManu {
    id: number;
    restaurant_id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    created_at: string;
    updated_at: string;
  }
}
