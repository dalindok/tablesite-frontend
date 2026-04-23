import http from "@/utils/http-util";

const PROFILE_API = {
  getProfile: async () => {
    const res = await http.get<IUser.Data>("/profile");
    return res.data;
  },
};

export default PROFILE_API;
