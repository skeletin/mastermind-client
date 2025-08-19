import { type FC } from "react";
import { motion } from "motion/react";

const PegContainer: FC<PegContainerProps> = ({ guess }) => {
  const yellowPegs = Array.from({ length: guess.locationMatch }, (_, i) => (
    <div key={i} className="h-3/4 w-3/4  rounded-full bg-yellow-300 "></div>
  ));

  const whitePegs = Array.from({ length: guess.numberMatch }, (_, i) => (
    <div
      key={i}
      className="h-3/4 w-3/4  rounded-full bg-white border-black "
    ></div>
  ));

  return (
    <div className="grid grid-cols-2 grid-rows-2 place-items-center w-10 h-10 border-t border-gray-400 p-2">
      {[...yellowPegs, ...whitePegs]}
    </div>
  );
};

export default PegContainer;
