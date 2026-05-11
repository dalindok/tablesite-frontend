import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1/";

// ✅ ADD THIS — attach token to every request
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // ← match your exact key
  console.log("🚀 INTERCEPTOR FIRED"); // ← does this appear?
  console.log("🔑 TOKEN:", token); // ← does it show the token?
  console.log("📋 HEADERS:", config.headers); // ← what headers exist?
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Response interceptor (your existing code)
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;

    if (
      data &&
      (data.error === true ||
        data.success === false ||
        (data.status && data.status >= 400))
    ) {
      return Promise.reject({
        status: data.status || response.status,
        message: data.message || "An unknown error occurred",
        data: data.data ?? null,
      });
    }

    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;
      const message =
        (data as any)?.message ||
        (typeof data === "string" ? data : JSON.stringify(data)) ||
        "An unknown error occurred";

      return Promise.reject({ status, message, data });
    }

    if (error.request) {
      return Promise.reject({
        status: 0,
        message: "No response from server. Please check your connection.",
      });
    }

    return Promise.reject({
      status: 0,
      message: error.message || "Unexpected error occurred.",
    });
  },
);

const http = axios;
export default http;
