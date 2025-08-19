import { Link, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import NavMenu from "./NavMenu";

const Navigation = () => {
  const { authUser } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  if (pathname == "/rules") return;

  return (
    <nav className="flex flex-row-reverse items-center w-full h-20">
      {authUser ? (
        <div className="flex relative px-4">
          <button
            onClick={() => setShowMenu(true)}
            className="border border-gray-500 rounded-full p-2 cursor-pointer"
          >
            <FaUser className="text-xl text-gray-500" />
          </button>
          {showMenu && <NavMenu setShowMenu={setShowMenu} />}
        </div>
      ) : (
        <div className="space-x-4">
          <Link
            className="magz text-center border text-sm  rounded-full py-1 px-3  text-gray-300 cursor-pointer hover:bg-gray-100 hover:text-[#10172a] hover:scale-110 transition duration-400"
            to="/login"
          >
            Log in
          </Link>
          <Link
            className="border rounded-full text-gray-200 px-3 py-1 text-sm magz cursor-pointer hover:bg-gray-100 hover:text-[#10172a] hover:scale-110 transition duration-400"
            to="/register"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
