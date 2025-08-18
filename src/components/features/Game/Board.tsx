import { useQuery } from "@tanstack/react-query";
import SlotContainer from "./SlotContainer";
import Pegs from "./Pegs";
import CodeMaker from "./CodeMaker";
import useAuth from "../../../hooks/useAuth";
import GuestGameEndpoints from "../../../endpoints/GuestGameEndpoints";
import GameEndpoints from "../../../endpoints/GameEndpoints";
import GameDataProvider from "../../providers/GameDataProvider";

const Board = () => {
  const { authUser } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["game", authUser?.id ?? "guest"],
    queryFn: () =>
      authUser
        ? GameEndpoints.getGame(authUser.id)
        : GuestGameEndpoints.getOrCreateGame(),
    enabled: authUser !== undefined, // don't run until we *know* authUser
  });

  if (isLoading) return <div>"loading...</div>;

  if (data) {
    const guesses = data.guesses;

    return (
      <GameDataProvider currentGame={data}>
        <div className="flex flex-col space-y-4">
          <CodeMaker game={data} />
          <div className="grid grid-cols-[5fr_1fr] w-full">
            <SlotContainer guesses={guesses} />
            <Pegs guesses={guesses} />
          </div>
        </div>
      </GameDataProvider>
    );
  }
};

export default Board;
