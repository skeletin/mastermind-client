import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-full bg-[#10172a]">
      <Outlet />
    </div>
  );
};

export default AppLayout;
