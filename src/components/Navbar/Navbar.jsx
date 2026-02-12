import { Link } from "react-router-dom";

import { AvatarComp } from "../Home/AvatarComp";
import { useCurrentUserQuery } from "../../api/apiSlice";

const Navbar = () => {
  const { data: user, isLoading } = useCurrentUserQuery();
  if (isLoading) return <div>loading...</div>;

  return (
    <nav className="bg-blue-600 text-white py-3 px-6  shadow-md rounded-xl my-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hospital Management System</h1>
        <nav className="space-x-4">
          {user ? (
            <AvatarComp />
          ) : (
            <Link
              to="/login"
              className="hover:bg-green-500 transition-all ease-in border px-6 py-2 rounded-xl font-medium"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
