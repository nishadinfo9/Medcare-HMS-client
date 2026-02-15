import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useCurrentUserQuery } from "@/api/apiSlice";
import { currentUser } from "@/redux/authSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useCurrentUserQuery();
  console.log("data", data);
  useEffect(() => {
    if (data) {
      dispatch(currentUser(data));
    }
    if (isError) {
      dispatch(currentUser(null));
    }
  }, [data, isError, dispatch]);

  if (isLoading) return <div>Loading...</div>;
};

export default ProtectedRoute;
