import { type FC } from "react";
import GameDataContext from "../contexts/gameDataContext";

const GameDataProvider: FC<GameDataProviderProps> = ({
  children,
  currentGame,
}) => {
  return (
    <GameDataContext.Provider value={{ currentGame }}>
      {children}
    </GameDataContext.Provider>
  );
};

export default GameDataProvider;
