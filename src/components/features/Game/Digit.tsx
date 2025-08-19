import type { FC } from "react";
import { AnimatePresence, motion } from "motion/react";

const Digit: FC<DigitProps> = ({ digit, rowNumber, activeRow }) => {
  return (
    <div className="w-10 h-10">
      <div
        className={`flex items-center justify-center text-white text-lg  border-3 rounded-full w-full h-full ${
          rowNumber === activeRow && digit
            ? "border-blue-900"
            : "border-slate-700"
        } `}
      >
        {" "}
        <AnimatePresence>
          {digit && (
            <motion.span
              initial={{ x: -12, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 12, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {digit}
            </motion.span>
          )}{" "}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Digit;
