import { type FC } from "react";
import PegContainer from "./PegContainer";

const Pegs: FC<Pegs> = ({ guesses }) => {
  return (
    <div className="flex flex-col-reverse justify-around  h-full border-l-4  border-gray-600 w-10">
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={crypto.randomUUID()}
          className="flex justify-center items-center w-full h-full border-gray-300 mb-1"
        >
          {guesses[i] ? (
            <PegContainer key={crypto.randomUUID()} guess={guesses[i]} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Pegs;
