import type { FC } from "react";
import { motion } from "motion/react";

const CodeMaker: FC<CodeMakerProps> = ({ game }) => {
  const { solution, status } = game;
  console.log(game);
  return (
    <motion.div className="flex flex-col items-center mb-4">
      <div className="text-white text-3xl h-10 mb-10">
        {status == "in_progress" ? "" : `You ${status}`}
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full ">
          {solution ? <span>{solution[0]}</span> : ""}
        </div>
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full ">
          {solution ? <span>{solution[1]}</span> : ""}
        </div>
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full ">
          {solution ? <span>{solution[2]}</span> : ""}
        </div>
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full ">
          {solution ? <span>{solution[3]}</span> : ""}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeMaker;
