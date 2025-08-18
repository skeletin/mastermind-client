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
        className="border rounded-full p-1 w-60 text-gray-300 cursor-pointer"
      >
        Play Game
      </button>
      {!authUser && (
        <>
          <Link
            to="/register"
            className="text-center border text-sm rounded-full p-1 w-40 text-gray-300 cursor-pointer"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="text-center border text-sm  rounded-full p-1 w-40 text-gray-300 cursor-pointer"
          >
            Log in
          </Link>
        </>
      )}
    </div>
  );
};

export default Menu;
