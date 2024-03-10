import { create } from "zustand";

interface FollowState {
  //   following: []; // 팔로잉하는 사용자의 ID 배열
  //   followers: []; // 팔로워의 ID 배열
  fetchFollowing: () => Promise<void>;
  fetchFollowers: () => Promise<void>;
  followUser: (userId: string) => Promise<void>;
  unFollowUser: (userId: string) => Promise<void>;
}

const useFollowStore = create<FollowState>((set) => ({
  following: [],
  followers: [],
  fetchFollowing: async () => {
    // 팔로잉하는 사용자 목록 가져오기
  },
  fetchFollowers: async () => {
    // 팔로워 목록 가져오기
  },
  followUser: async (userId) => {
    // 사용자 팔로우하기
  },
  unFollowUser: async (userId) => {
    // 팔로우 취소하기
  },
}));

export default useFollowStore;
