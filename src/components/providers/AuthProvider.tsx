import { useEffect, type FC } from "react";
import AuthContext from "../contexts/authContext";
import { useQuery } from "@tanstack/react-query";
import RegistrationEndpoints from "../../endpoints/RegistrationEndpoints";

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { data, isFetched } = useQuery({
    queryFn: RegistrationEndpoints.isLoggedIn,
    queryKey: ["auth-user"],
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!isFetched) return;

    if (data) {
      // user is logged in
      localStorage.removeItem("sessionId");
    } else {
      localStorage.removeItem("token");
    }
  }, [isFetched, data]);

  return (
    <AuthContext.Provider value={{ authUser: data }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
