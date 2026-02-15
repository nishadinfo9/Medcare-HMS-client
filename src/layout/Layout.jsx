import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { useCurrentUserQuery } from "../api/apiSlice";
import { currentUser } from "../redux/authSlice";

const Layout = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useCurrentUserQuery(undefined, {});

  useEffect(() => {
    if (data?.success) {
      dispatch(currentUser(data));
    }
    if (isError) {
      dispatch(currentUser(null));
    }
  }, [data, isError, dispatch]);

  if (isLoading)
    return (
      <div className="flec items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="md:w-6xl mx-auto">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
