import React from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUserQuery } from "../redux/apiSlice";

const ProtectedRoute = ({ children }) => {
  const { data: currentUser, isLoading } = useCurrentUserQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!currentUser) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
