import type { FC } from "react";
import { motion } from "motion/react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import GuestGameEndpoints from "../../../endpoints/GuestGameEndpoints";
import useAuth from "../../../hooks/useAuth";
import GameEndpoints from "../../../endpoints/GameEndpoints";

const CodeMaker: FC<CodeMakerProps> = ({ game }) => {
  const { solution, status } = game;
  const { authUser } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: newGuestGame } = useMutation({
    mutationFn: GuestGameEndpoints.getOrCreateGame,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["game", "guest"],
      });
    },
  });

  const { mutate: newAuthGame } = useMutation({
    mutationFn: GameEndpoints.createGame,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["game", authUser?.id],
      });
    },
  });

  const startNewGame = () => {
    if (authUser) newAuthGame({ userId: authUser.id });
    else newGuestGame();
  };

  console.log(authUser);

  return (
    <motion.div className="flex flex-col items-center mb-4 space-y-4">
      <div className="text-white text-3xl h-10">
        {status == "in_progress" ? "" : `You ${status}`}
      </div>
      {status != "in_progress" ? (
        <motion.button
          onClick={startNewGame}
          className="text-white rounded-full  shadow shadow-blue-600 bg-blue-600 px-8 magz tracking-wider text-sm h-10 cursor-pointer"
        >
          Play Again?
        </motion.button>
      ) : (
        <div className="h-10"></div>
      )}
      <div className="flex space-x-4 flex-10">
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full ">
          {solution ? (
            <motion.span initial={{ x: -12 }} animate={{ x: 0 }}>
              {solution[0]}
            </motion.span>
          ) : (
            "?"
          )}
        </div>
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full ">
          {solution ? (
            <motion.span initial={{ x: -12 }} animate={{ x: 0 }}>
              {solution[1]}
            </motion.span>
          ) : (
            "?"
          )}
        </div>
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full ">
          {solution ? (
            <motion.span initial={{ x: -12 }} animate={{ x: 0 }}>
              {solution[2]}
            </motion.span>
          ) : (
            "?"
          )}
        </div>
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full ">
          {solution ? (
            <motion.span initial={{ x: -12 }} animate={{ x: 0 }}>
              {solution[3]}
            </motion.span>
          ) : (
            "?"
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeMaker;
