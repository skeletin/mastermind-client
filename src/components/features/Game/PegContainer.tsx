import { type FC } from "react";
import { motion } from "motion/react";

const PegContainer: FC<PegContainerProps> = ({ guess }) => {
  const yellowPegs = Array.from({ length: guess.locationMatch }, () => (
    <div
      key={crypto.randomUUID()}
      className="h-3/4 w-3/4  rounded-full bg-yellow-300 "
    ></div>
  ));

  const whitePegs = Array.from({ length: guess.numberMatch }, () => (
    <div
      key={crypto.randomUUID()}
      className="h-3/4 w-3/4  rounded-full bg-white border-black"
    ></div>
  ));

  return (
    <motion.div className="grid grid-cols-2 grid-rows-2 place-items-center w-10 h-10 border-t border-gray-400 p-2">
      {[...yellowPegs, ...whitePegs]}
    </motion.div>
  );
};

export default PegContainer;
