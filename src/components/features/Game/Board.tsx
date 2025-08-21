import SlotContainer from "./SlotContainer";
import Pegs from "./Pegs";
import CodeMaker from "./CodeMaker";
import { BarLoader } from "react-spinners";
import { useContext } from "react";
import GameDataContext from "../../contexts/gameDataContext";

const Board = () => {
  const { currentGame, isLoading } = useContext(GameDataContext);

  if (isLoading) return <BarLoader color="oklch(92.8% 0.006 264.531)" />;
  if (currentGame) {
    const guesses = currentGame.guesses;

    return (
      <>
        <CodeMaker game={currentGame} />
        <div className="grid grid-cols-[20fr_1fr] max-w-[20rem]">
          <SlotContainer guesses={guesses} />
          <Pegs guesses={guesses} />
        </div>
      </>
    );
  }
};

export default Board;
