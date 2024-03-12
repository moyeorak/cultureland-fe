"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  signIn: () => void;
  signOut: () => void;
  isAuthInitialized: boolean;
  setIsAuthInitialized: Dispatch<SetStateAction<boolean>>;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  signIn: () => {},
  signOut: () => {},
  isAuthInitialized: false,
  setIsAuthInitialized: () => {},
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);

  const signIn = () => {
    setIsLoggedIn(true);
  };

  const signOut = () => {
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    signIn,
    signOut,
    isAuthInitialized,
    setIsAuthInitialized,
  };

  useEffect(() => {}, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
