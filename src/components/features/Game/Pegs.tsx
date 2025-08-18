import { type FC } from "react";
import PegContainer from "./PegContainer";

const Pegs: FC<Pegs> = ({ guesses }) => {
  return (
    <div className="flex flex-col-reverse justify-around w-full border-l-4 rounded-xl border-gray-600">
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className="flex justify-center items-center w-full h-full text-white"
        >
          {guesses[i] ? <PegContainer key={i} guess={guesses[i]} /> : null}
        </div>
      ))}
    </div>
  );
};

export default Pegs;
