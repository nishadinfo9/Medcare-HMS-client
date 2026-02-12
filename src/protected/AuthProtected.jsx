import React from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUserQuery } from "../api/apiSlice";

export const AuthProtected = ({ children }) => {
  const { data: currentUser, isLoading } = useCurrentUserQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!currentUser.success) return <Navigate to="/login" />;

  return children;
};
