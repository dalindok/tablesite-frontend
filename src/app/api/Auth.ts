import http from "@/utils/http-util";
import { API_ROUTE } from "@/utils/route-utils";
import { get } from "http";

const AUTH_API = {
  sendOtp: async (data: { phone: string; is_debug: boolean }) => {
    const res = await http.post<IAuth.ISentOPT>(API_ROUTE.sentSMS, data);
    return res.data;
  },
  verifyOtp: async (data: IAuth.IVerifyOTP) => {
    const res = await http.post<IAuth.Root>(API_ROUTE.verifySMS, data);
    console.log("📡 API Response:", res.data);

    // Extract the nested data property if it exists
    if (res.data) {
      console.log("✅ Extracted nested data:", res.data);
      return res.data;
    }

    console.log("⚠️  No nested data, returning response as-is");
    return res.data;
  },
  getUserProfile: async () => {
    const res = await http.get<IAuth.Data>(API_ROUTE.profile);
    return res.data;
  },

  updateUserProfile: async (data: IAuth.IUpdateProfile, token: string) => {
    const res = await http.put<IAuth.Root>(API_ROUTE.editProfile, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
};

export default AUTH_API;
