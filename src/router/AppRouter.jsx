import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Profile from "../pages/Dashboard/Profile";

const AppRouter = () => {
  const route = createBrowserRouter([
    { path: "/login", Component: Login },
    { path: "/register", Component: Register },
    { path: "/forgot-password", Component: ForgotPassword },
    {
      path: "/",
      Component: Layout,
      children: [
        { path: "/", Component: Home },
        { path: "/dashboard/profile", Component: Profile },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default AppRouter;
