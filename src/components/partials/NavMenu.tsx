import { useQueryClient } from "@tanstack/react-query";
import type { FC } from "react";

const NavMenu: FC<NavMenuProps> = ({ setShowMenu }) => {
  const queryClient = useQueryClient();

  const logOut = () => {
    localStorage.removeItem("token");
    queryClient.invalidateQueries({ queryKey: ["auth-user"] });
  };

  return (
    <div>
      <button
        onClick={() => setShowMenu(false)}
        className="fixed inset-0"
      ></button>
      <div className="flex flex-col items-start absolute bg-[#10172a] border border-gray-700 shadow shadow-gray-700 rounded text-sm right-8 top-11 w-46">
        <button className="text-gray-200 border-b border-gray-700 p-3 w-full text-left cursor-pointer hover:bg-gray-800">
          View Game History
        </button>
        <button
          onClick={logOut}
          className="text-red-300 border-b border-gray-700 p-3 w-full text-left cursor-pointer hover:bg-gray-800"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
