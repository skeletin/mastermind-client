import { useState, type ChangeEvent, type FC } from "react";
import Digit from "./Digit";
import { useMutation } from "@tanstack/react-query";
import GuestGameEndpoints from "../../../endpoints/GuestGameEndpoints";
import { useQueryClient } from "@tanstack/react-query";

const Slot: FC<SlotProps> = ({ guess, currentGuess, rowNumber }) => {
  const [value, setState] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: GuestGameEndpoints.makeGuess,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["game"] });
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value.length === 4 && e.key === "Enter") {
      console.log("guess");
      mutate({ value });
    }
  };

  if (guess) {
    return (
      <div className="flex justify-around w-full">
        {Array.from({ length: 4 }, (_, i) => (
          <Digit
            key={i}
            digit={guess.value[i]}
            rowNumber={rowNumber}
            activeRow={currentGuess}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      {currentGuess == rowNumber ? (
        <input
          maxLength={4}
          className="text-white"
          max={4}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
        />
      ) : null}
      <div className="flex justify-around w-full">
        {Array.from({ length: 4 }, (_, i) => (
          <Digit
            key={i}
            digit={value[i]}
            rowNumber={rowNumber}
            activeRow={currentGuess}
          />
        ))}
      </div>
    </div>
  );
};

export default Slot;
