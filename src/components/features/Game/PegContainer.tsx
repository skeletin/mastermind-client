import { createElement, type FC } from "react";

const PegContainer: FC<PegContainerProps> = ({ guess }) => {
  const blackPegs = Array.from({ length: guess.locationMatch }, (_, i) =>
    createElement("div", {
      key: i,
      className:
        "h-3/4 w-3/4 rounded-full bg-yellow-300 border border-green-200",
    })
  );

  const whitePegs = Array.from({ length: guess.numberMatch }, (_, i) =>
    createElement("div", {
      key: i,
      className: "h-3/4 w-3/4  rounded-full bg-white border-black ",
    })
  );

  return (
    <div className="grid grid-cols-2 grid-rows-2 place-items-center w-10 h-10 border-t p-2">
      {[...blackPegs, ...whitePegs]}
    </div>
  );
};

export default PegContainer;
