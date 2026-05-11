import http from "@/utils/http-util";
import { API_ROUTE } from "@/utils/route-utils";

const PROFILE_API = {
  getProfile: async () => {
    const res = await http.get<IUser.Data>(API_ROUTE.profile);
    return res.data;
  },
};

export default PROFILE_API;
