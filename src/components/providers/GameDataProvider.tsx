import { type FC } from "react";
import GameDataContext from "../contexts/gameDataContext";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import GameEndpoints from "../../endpoints/GameEndpoints";
import GuestGameEndpoints from "../../endpoints/GuestGameEndpoints";
import { useLocation } from "react-router";

const GameDataProvider: FC<GameDataProviderProps> = ({ children }) => {
  const { authUser } = useAuth();
  const { pathname } = useLocation();
  const { data, isLoading } = useQuery({
    queryKey: ["game", authUser?.id ?? "guest"],
    queryFn: () =>
      authUser
        ? GameEndpoints.getGame(authUser.id)
        : GuestGameEndpoints.getOrCreateGame(),
    enabled: authUser !== undefined && pathname === "/game", // don't run until we *know* authUser
  });

  const audio = new Audio(`/audio/${data?.status}.wav`);

  return (
    <GameDataContext.Provider value={{ currentGame: data, isLoading, audio }}>
      {children}
    </GameDataContext.Provider>
  );
};

export default GameDataProvider;
