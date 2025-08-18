import { Navigate } from "react-router";
import { useContext } from "react";
import type { JSX } from "react";
import AuthContext from "../contexts/authContext";

interface GuestOnlyProps {
  children: JSX.Element;
}

const GuestOnly = ({ children }: GuestOnlyProps) => {
  const { authUser } = useContext(AuthContext);

  if (authUser) {
    return <Navigate to="/game" replace />;
  }

  return children; // user is not logged in → show login/signup page
};

export default GuestOnly;
