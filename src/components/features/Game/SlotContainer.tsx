import type { FC } from "react";
import Slot from "./Slot";
import { motion } from "motion/react";

const SlotContainer: FC<SlotContainerProps> = ({ guesses }) => {
  return (
    <motion.div className="relative flex flex-col-reverse select-none">
      {Array.from({ length: 10 }, (_, i) => (
        <Slot
          key={crypto.randomUUID()}
          guess={guesses[i]}
          currentGuess={guesses.length + 1}
          rowNumber={i + 1}
        />
      ))}
    </motion.div>
  );
};

export default SlotContainer;
