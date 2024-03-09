"use client";

import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function Authenticated({ children }: { children: React.ReactNode }) {
  const { isAuthInitialized, setIsAuthInitialized, setIsLoggedIn } = useAuth();

  const { data: isAccessTokenRefreshed, isFetched } = useQuery({
    queryFn: api.users.refreshToken,
    queryKey: ["authentication"],
    refetchInterval: 1000 * 60 * 29,
    staleTime: 1000 * 60 * 29.5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isFetched) {
      setIsAuthInitialized(true);
    }
  }, [isFetched, setIsAuthInitialized]);

  useEffect(() => {
    if (isAccessTokenRefreshed) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isAccessTokenRefreshed, setIsLoggedIn]);

  if (!isAuthInitialized) return null;

  return children;
}
