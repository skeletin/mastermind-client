import { useQuery } from "@tanstack/react-query";
import GuestGameEndpoints from "../../../endpoints/GuestGameEndpoints";
import SlotContainer from "./SlotContainer";
import Pegs from "./Pegs";
import CodeMaker from "./CodeMaker";

const Board = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["game"],
    queryFn: GuestGameEndpoints.getOrCreateGame,
  });

  if (isLoading) return <div>"loading...</div>;

  if (data) {
    const guesses = data.guesses;

    return (
      <div className="flex flex-col space-y-4">
        <CodeMaker game={data} />
        <div className="grid grid-cols-[5fr_1fr] w-full border">
          <SlotContainer guesses={guesses} />
          <Pegs guesses={guesses} />
        </div>
      </div>
    );
  }
};

export default Board;
