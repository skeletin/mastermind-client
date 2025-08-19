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
      <div>
        <CodeMaker game={data} />
        <GameDataProvider currentGame={data}>
          <div className="grid grid-cols-[20fr_1fr] max-w-[20rem]">
            <SlotContainer guesses={guesses} />
            <Pegs guesses={guesses} />
          </div>
        </GameDataProvider>
      </div>
    );
  }
};

export default Board;
