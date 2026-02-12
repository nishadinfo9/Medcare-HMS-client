import { createApi } from "@reduxjs/toolkit/query/react";
import axiosInstance from "./axiosInstance";

const axiosBaseQuery = () => async (config) => {
  try {
    const { data } = await axiosInstance(config);
    return { data };
  } catch (axiosError) {
    return {
      error: {
        status: axiosError.response?.status,
        data: axiosError.response?.data,
      },
    };
  }
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        data: credentials,
      }),
      providesTags: [{ type: "User", id: "CURRENT" }],
    }),

    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        data,
      }),
      providesTags: [{ type: "User", id: "CURRENT" }],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      providesTags: [{ type: "User", id: "CURRENT" }],
    }),

    currentUser: builder.query({
      query: () => ({
        url: "/current-user",
      }),
      providesTags: [{ type: "User", id: "CURRENT" }],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useCurrentUserQuery,
} = apiSlice;
