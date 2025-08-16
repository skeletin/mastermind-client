import { type FC } from "react";
import PegContainer from "./PegContainer";

const Pegs: FC<Pegs> = ({ guesses }) => {
  return (
    <div className="flex flex-col-reverse justify-around w-full border">
      {Array.from({ length: 10 }, (_, i) => (
        <div className="flex justify-center items-center w-full h-full text-white">
          {guesses[i] ? <PegContainer guess={guesses[i]} /> : null}
        </div>
      ))}
    </div>
  );
};

export default Pegs;
