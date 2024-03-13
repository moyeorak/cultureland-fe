"use client";

import api from "@/api/index.api";
import { UserInfo } from "@/types/User.type";
import { useAuthStore, useFollowsStore } from "@/zustand";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useAuth } from "./auth.context";

function Authenticated({ children }: { children: React.ReactNode }) {
  const { isAuthInitialized, setIsAuthInitialized, setIsLoggedIn } = useAuth();
  const { setUserInfo } = useAuthStore();
  const fetchFollowings = useFollowsStore((state) => state.fetchFollowings);

  const {
    data: accessToken,
    isFetched,
    isSuccess,
  } = useQuery({
    queryFn: api.users.refreshToken,
    queryKey: ["accessToken"],
    refetchInterval: 1000 * 60 * 29,
    staleTime: 1000 * 60 * 29.5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: true,
    retry: 0,
  });

  useEffect(() => {
    if (isFetched) {
      setIsAuthInitialized(true);
    }
  }, [isFetched, setIsAuthInitialized]);

  useEffect(() => {
    if (isSuccess && accessToken) {
      const { sub, nickname, profileImage }: UserInfo = jwtDecode(accessToken);
      const userId = Number(sub);
      setUserInfo({ userId, nickname, profileImage });
      fetchFollowings(userId);
    }
  }, [isSuccess, accessToken, setUserInfo, fetchFollowings]);

  useEffect(() => {
    if (accessToken !== undefined) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [accessToken, setIsLoggedIn]);

  if (!isAuthInitialized) return null;

  return children;
}

export default Authenticated;
