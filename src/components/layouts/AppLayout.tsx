import { Outlet } from "react-router";
import Navigation from "../partials/Navigation";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-full bg-[#10172a] overflow-hidden">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default AppLayout;
