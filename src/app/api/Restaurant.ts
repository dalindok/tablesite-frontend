import http from "@/utils/http-util";
import { API_ROUTE } from "@/utils/route-utils";

// Map $ symbols to API price rate values
const priceRateMap: Record<string, string> = {
  $: "low",
  $$: "medium",
  $$$: "high",
  $$$$: "high", // API max is 'high', map accordingly
};

const Restaurant_API = {
  listRestaurants: async (params: {
    page: number;
    limit: number;
    search?: string;
    cuisine?: string; // singular, matches API
    location?: string;
    date?: string;
    sortBy?: string;
    priceRate?: string;
    minPrice?: number;
    maxPrice?: number;
  }) => {
    const res = await http.get<IRestaurant.Root>(API_ROUTE.listRestaurants, {
      params,
    });
    return res.data.data; // return { data: [], pagination: {} }
  },

  getRestaurantDetails: async (id: number) => {
    const res = await http.get<IRestaurant.Root>(
      API_ROUTE.restaurantDetails.replace(":id", id.toString()),
    );
    return res.data.data;
  },
};

export { priceRateMap };
export default Restaurant_API;
