import { create } from "zustand";

interface TabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;

  showFollows: boolean;
  setShowFollows: (show: boolean) => void;

  showFollowing: boolean;
  setShowFollowing: (showFollowing: boolean) => void;
}

const useTabStore = create<TabState>((set) => ({
  activeTab: "작성한 리뷰", // 기본값
  setActiveTab: (tab) => set({ activeTab: tab }),

  showFollows: false,
  setShowFollows: (show) => set({ showFollows: show }),

  showFollowing: true,
  setShowFollowing: (showFollowing) => set({ showFollowing }),
}));

export default useTabStore;
