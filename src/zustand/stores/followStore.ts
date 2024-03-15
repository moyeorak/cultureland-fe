import api from "@/api/index.api";
import { Following } from "@/types/Follow.type";
import { create } from "zustand";

interface FollowsStore {
  followings: Array<Following>;
  fetchFollowings: (id: number) => Promise<void>;
}

const useFollowsStore = create<FollowsStore>((set) => ({
  followings: [],
  fetchFollowings: async (userId: number) => {
    try {
      const followingsData = await api.follows.getFollowings(userId);
      set({ followings: followingsData });
    } catch (e) {
      console.error("Failed to fetch:", e);
    }
  },
}));

export default useFollowsStore;
