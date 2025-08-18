import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Board from "./Board";

const Game = () => {
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      localStorage.removeItem("sessionId");
    }
  }, [authUser]);

  return (
    <main className="flex flex-col h-full items-center justify-center">
      <Board />
    </main>
  );
};

export default Game;
