import type { Dispatch, ReactNode, SetStateAction } from "react";

declare global {
  interface AuthUser {
    id: string;
    username: string;
    email: string;
  }

  interface NewUser {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }

  interface AuthContext {
    authUser: AuthUser | null;
    setAuthUser: SetStateAction<Dispatch<AuthUser | null>>;
  }

  interface AuthProviderProps {
    children: ReactNode;
  }
}

export {};
