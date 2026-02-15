import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Profile from "../pages/Dashboard/Profile";
import { AuthProtected } from "../protected/AuthProtected";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import { useDispatch } from "react-redux";
import { useCurrentUserQuery } from "../api/apiSlice";
import { currentUser } from "../redux/authSlice";

const route = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <AuthProtected>
            <Dashboard />
          </AuthProtected>
        ),
      },
      {
        path: "profile",
        element: (
          <AuthProtected>
            <Profile />
          </AuthProtected>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useCurrentUserQuery();

  useEffect(() => {
    if (data?.success) {
      dispatch(currentUser(data));
    } else if (isError) {
      dispatch(currentUser(null));
    }
  }, [data, isError, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <RouterProvider router={route} />;
};

export default AppRouter;
