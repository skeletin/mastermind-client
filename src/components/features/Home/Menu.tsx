import { useNavigate } from "react-router";

const Menu = () => {
  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate("/game");
  };
  return (
    <div className="flex flex-col space-y-2 magz items-center">
      <button
        onClick={navigateToGame}
        className="border rounded-full p-1 w-60 text-gray-300 cursor-pointer bg-"
      >
        Play Game
      </button>
      <button className="border text-sm rounded-full p-1 w-40 text-gray-300 cursor-pointer">
        Sign up
      </button>
      <button className="border text-sm  rounded-full p-1 w-40 text-gray-300 cursor-pointer">
        Log in
      </button>
    </div>
  );
};

export default Menu;
