import type { FC } from "react";

const CodeMaker: FC<CodeMakerProps> = ({ game }) => {
  const { solution, status } = game;
  return (
    <div className="flex flex-col items-center">
      <div className="text-white h-10">
        {status == "in_progress" ? "" : status}
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full  hover:bg-slate-700">
          {solution ? solution[0] : ""}
        </div>
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full  hover:bg-slate-700">
          {solution ? solution[1] : ""}
        </div>
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full  hover:bg-slate-700">
          {solution ? solution[2] : ""}
        </div>
        <div className="flex items-center justify-center w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full  hover:bg-slate-700">
          {solution ? solution[3] : ""}
        </div>
      </div>
    </div>
  );
};

export default CodeMaker;
