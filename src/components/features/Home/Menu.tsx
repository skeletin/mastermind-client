import { Link, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import GameEndpoints from "../../../endpoints/GameEndpoints";
import GuestGameEndpoints from "../../../endpoints/GuestGameEndpoints";

const Menu = () => {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  const { mutate: newAuthGame } = useMutation({
    mutationFn: GameEndpoints.createGame,
    onSuccess: () => {
      navigate("/game");
    },
  });

  const { mutate: newGuestGame } = useMutation({
    mutationFn: GuestGameEndpoints.getOrCreateGame,
    onSuccess: () => {
      navigate("/game");
    },
  });

  const playGame = () => {
    if (authUser) newAuthGame({ userId: authUser.id });
    else newGuestGame();
  };

  return (
    <div className="flex flex-col space-y-2 magz items-center">
      <button
        onClick={playGame}
        className="border rounded-full p-1 w-60 text-gray-300 cursor-pointer hover:bg-gray-100 hover:text-[#10172a] hover:scale-110 transition duration-400"
      >
        Play Game
      </button>

      <Link
        to="/rules"
        className="mt-2 text-center border text-sm rounded-full p-1 text-gray-300 cursor-pointer hover:bg-gray-100 hover:text-[#10172a] hover:scale-110 transition duration-400 w-52"
      >
        How to Play
      </Link>
    </div>
  );
};

export default Menu;
