import { Navigate } from "react-router-dom";
import { useCurrentUserQuery } from "../api/apiSlice";

export const AuthProtected = ({ children }) => {
  const { data: user, isLoading } = useCurrentUserQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;

  //   if (roles && !roles.includes(user.role))
  //     return <Navigate to="/unauthorized" />;

  return children;
};
