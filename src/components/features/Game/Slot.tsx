import { useContext, useEffect, useState, type FC } from "react";
import Digit from "./Digit";
import { useMutation } from "@tanstack/react-query";
import GuestGameEndpoints from "../../../endpoints/GuestGameEndpoints";
import { useQueryClient } from "@tanstack/react-query";
import GuessEndpoints from "../../../endpoints/GuessEndpoints";
import useAuth from "../../../hooks/useAuth";
import GameDataContext from "../../contexts/gameDataContext";
import { motion } from "motion/react";
import { GiSpottedArrowhead } from "react-icons/gi";

const Slot: FC<SlotProps> = ({ guess, currentGuess, rowNumber }) => {
  const { authUser } = useAuth();
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();
  const { currentGame, audio } = useContext(GameDataContext);
  const loggedIn = !!authUser;
  const { status } = currentGame ?? {};

  const { mutate: makeGuess } = useMutation({
    mutationFn: GuestGameEndpoints.makeGuess,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["game", authUser?.id ?? "guest"],
      });
    },
  });

  useEffect(() => {
    audio.play();
  }, [audio, status]);

  const { mutate: makeAuthGuess } = useMutation({
    mutationFn: GuessEndpoints.makeGuess,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["game", authUser?.id ?? "guest"],
      });
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/[0-7]/.test(e.key) && value.length < 4) {
      setValue((prev) => prev + e.key); // append digit
    } else if (e.key === "Backspace") {
      setValue((prev) => prev.slice(0, -1)); // remove last character
    } else if (e.key === "Enter" && value.length === 4) {
      if (loggedIn) makeAuthGuess({ value, gameId: currentGame?.id });
      else makeGuess({ value });
    } else {
      e.preventDefault(); // block other keys
    }
  };

  if (guess) {
    return (
      <motion.div className="relative flex justify-around w-full mb-1">
        {Array.from({ length: 4 }, (_, i) => (
          <Digit
            key={i}
            digit={guess.value[i]}
            rowNumber={rowNumber}
            activeRow={currentGuess}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <>
      {currentGuess == rowNumber ? (
        <input
          defaultValue={value}
          maxLength={4}
          className="absolute text-black -top-30 left-10  text-whit focus:outline-none border border-red-500 cursor-default opacity-0"
          max={4}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : null}
      <motion.div className="relative flex items-center justify-around w-full mb-1">
        {rowNumber == currentGuess && currentGame?.status == "in_progress" && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            className="absolute -left-7 top-2"
          >
            <GiSpottedArrowhead className="text-gray-200 [transform:rotate(-34deg)] text-3xl" />
          </motion.div>
        )}
        {Array.from({ length: 4 }, (_, i) => (
          <Digit
            key={i}
            digit={value[i]}
            rowNumber={rowNumber}
            activeRow={currentGuess}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Slot;
