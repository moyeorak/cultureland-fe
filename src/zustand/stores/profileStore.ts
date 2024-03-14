import { create } from "zustand";

type Profile = {
  id: number | null;
  nickname: string | null;
  imageUrl: string | null;
};

interface ProfileStore extends Profile {
  setProfile: (userInfo: Profile) => void;
  clearUserInfo: () => void;
}

const useProfile = create<ProfileStore>((set) => ({
  nickname: null,
  imageUrl: null,
  id: null,
  setProfile: (profile: Profile) => set({ ...profile }),
  clearUserInfo: () => set({ nickname: null, imageUrl: null, id: null }),
}));

export default useProfile;
