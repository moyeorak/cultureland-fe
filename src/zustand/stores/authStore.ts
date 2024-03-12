import { create } from "zustand";

type UserCommonInfo = {
  nickname: string;
  profileImage: string | null;
  userId: string;
};

interface AuthState {
  userInfo: UserCommonInfo | null;
  setUserInfo: (userInfo: UserCommonInfo) => void;
  clearUserInfo: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo: UserCommonInfo) => set({ userInfo }),
  clearUserInfo: () => set({ userInfo: null }),
}));

export default useAuthStore;
