import type { FC } from "react";
import Slot from "./Slot";

const SlotContainer: FC<SlotContainerProps> = ({ guesses }) => {
  return (
    <div className="relative flex flex-col-reverse space-y-2 w-full">
      {Array.from({ length: 10 }, (_, i) => (
        <Slot
          key={i}
          guess={guesses[i]}
          currentGuess={guesses.length + 1}
          rowNumber={i + 1}
        />
      ))}
    </div>
  );
};

export default SlotContainer;
