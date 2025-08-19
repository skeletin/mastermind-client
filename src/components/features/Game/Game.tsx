import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Board from "./Board";
import { motion } from "motion/react";

const Game = () => {
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      localStorage.removeItem("sessionId");
    }
  }, [authUser]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-full items-center justify-center"
    >
      <Board />
    </motion.main>
  );
};

export default Game;
