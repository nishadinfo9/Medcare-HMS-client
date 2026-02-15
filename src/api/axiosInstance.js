import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axiosInstance.post("/refresh-token");

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
