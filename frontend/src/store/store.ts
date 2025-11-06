import { createContext } from "react";

type AuthContextType = {
  isLogged: boolean;
  setAuth: (logged: boolean, token: string | null) => void;
  authToken: string | null;
};

const defaultAuthContext: AuthContextType = {
  isLogged: false,
  // Provide a placeholder function for the default context
  setAuth: () => {
    console.warn("setAuth function was called outside of an AuthProvider");
  },
  authToken: null,
};
const AuthenticationContext = createContext<AuthContextType>(defaultAuthContext);

export { AuthenticationContext, defaultAuthContext, type AuthContextType };
