import type { FC } from "react";

const Digit: FC<DigitProps> = ({ digit, rowNumber, activeRow }) => {
  return (
    <div className="w-10 h-10">
      <div
        className={`flex items-center justify-center text-white text-lg  border-3 rounded-full w-full h-full ${
          rowNumber === activeRow ? "border-gray-500" : "border-slate-700"
        }`}
      >
        {digit}
      </div>
    </div>
  );
};

export default Digit;
