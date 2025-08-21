import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import NavMenu from "./NavMenu";
import GameDataContext from "../contexts/gameDataContext";
import { useMutation } from "@tanstack/react-query";
import GameEndpoints from "../../endpoints/GameEndpoints";
import GuestGameEndpoints from "../../endpoints/GuestGameEndpoints";

const Navigation = () => {
  const { authUser } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const { currentGame } = useContext(GameDataContext);
  const navigate = useNavigate();
  const { mutate: endAuthGame } = useMutation({
    mutationFn: GameEndpoints.quitGame,
    onSuccess: () => {
      navigate("/");
    },
  });

  const { mutate: endGuestGame } = useMutation({
    mutationFn: GuestGameEndpoints.endGame,
    onSuccess: () => {
      navigate("/");
    },
  });

  const quitGame = () => {
    if (authUser) {
      endAuthGame(currentGame?.id);
    } else {
      endGuestGame();
    }
  };

  if (pathname == "/rules") return;

  return (
    <nav className="flex flex-row justify-between items-center w-full h-20 px-4">
      {pathname === "/game" ? (
        <Link
          onClick={quitGame}
          tabIndex={-1}
          className="border rounded-full text-gray-200 px-3 py-1 text-sm magz cursor-pointer hover:bg-gray-redr-700  hover:scale-110 transition duration-400 hover:text-red-300 ba"
          to="/register"
        >
          Quit
        </Link>
      ) : (
        <div></div>
      )}
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
            tabIndex={-1}
            className="magz text-center border text-sm  rounded-full py-1 px-3  text-gray-300 cursor-pointer hover:bg-gray-100 hover:text-[#10172a] hover:scale-110 transition duration-400 "
            to="/login"
          >
            Log in
          </Link>
          <Link
            tabIndex={-1}
            className="border rounded-full text-gray-200 px-3 py-1 text-sm magz cursor-pointer hover:bg-gray-100 hover:text-[#10172a] hover:scale-110 transition duration-400 "
            to="/register"
          >
            Sign up
          </Link>
          <div></div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
