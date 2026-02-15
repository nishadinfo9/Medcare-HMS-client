import { Link } from "react-router-dom";

import { AvatarComp } from "../Home/AvatarComp";
import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
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
