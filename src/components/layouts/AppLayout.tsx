import { Outlet } from "react-router";
import Navigation from "../partials/Navigation";
import GameDataProvider from "../providers/GameDataProvider";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-full bg-[#10172a]">
      <GameDataProvider>
        <Navigation />
        <Outlet />
      </GameDataProvider>
    </div>
  );
};

export default AppLayout;
