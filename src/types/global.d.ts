import type { Dispatch, ReactNode, SetStateAction } from "react";

declare global {
  interface AuthUser {
    id: string;
    username: string;
    email: string;
  }

  interface NewUser {
    username: string;
    password: string;
    confirmPassword: string;
  }

  interface Credentials {
    username: string;
    password: string;
  }

  interface AuthContext {
    authUser: AuthUser | undefined | null;
  }

  interface AuthProviderProps {
    children: ReactNode;
  }

  interface NewGame {
    userId: string;
  }

  interface GameDataContext {
    currentGame: Game;
  }

  interface GameDataProviderProps {
    children: ReactNode;
    currentGame: Game;
  }

  interface Game {
    id: string;
    status: "in_progress" | "win" | "loss";
    userId: "";
    solution: string | null;
    guesses: Guess[];
  }

  interface Guess {
    id: string;
    locationMatch: 0 | 1 | 2 | 3 | 4;
    numberMatch: 0 | 1 | 2 | 3 | 4;
    value: string;
  }

  interface SlotContainerProps {
    guesses: Guess[];
  }

  interface SlotProps {
    guess: Guess;
    currentGuess: number;
    rowNumber: number;
  }

  interface DigitProps {
    digit: string;
    rowNumber: number;
    activeRow?: number;
  }

  interface Pegs {
    guesses: Guess[];
  }

  interface PegContainerProps {
    guess: Guess;
  }

  interface NewGuess {
    value: string;
    gameId?: string;
  }

  interface CodeMakerProps {
    game: Game;
  }

  interface NavMenuProps {
    setShowMenu: Dispatch<SetStateAction<boolean>>;
  }
}

export {};
