import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SERVER_URI,
  credentials: "include",
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    try {
      await baseQuery(
        { url: "/refresh-token", method: "POST" },
        api,
        extraOptions,
      );

      result = await baseQuery(args, api, extraOptions);
    } catch (err) {
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
      return err;
    }
  }
  return result;
};
