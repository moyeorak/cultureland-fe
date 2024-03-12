"use client";
import { useTabStore } from "@/zustand";

interface FollowTabProps {
  follows: {
    followers: number;
    followings: number;
  };
}

function FollowTab({ follows }: FollowTabProps) {
  const { showFollowing, setShowFollowing } = useTabStore();

  return (
    <div className="mt-4 ml-[480px] mb-[46px] ">
      <div className="flex bg-neutral-5 rounded-full w-[213px] justify-around">
        <button
          className={`${
            showFollowing
              ? "bg-white text-user-theme-100 shadow-primary px-4"
              : "text-neutral-40"
          } text-fs-16 font-medium py-3 w-[112px] rounded-full transition-colors duration-300 mr-1 inline`}
          onClick={() => setShowFollowing(true)}
        >
          팔로잉 {follows.followings}
        </button>
        <button
          className={`${
            !showFollowing
              ? "bg-white text-user-theme-100 shadow-primary px-4"
              : "text-neutral-40"
          } text-fs-16 font-medium py-3 w-[112px] rounded-full transition-colors duration-300 inline`}
          onClick={() => setShowFollowing(false)}
        >
          팔로워 {follows.followers}
        </button>
      </div>
    </div>
  );
}

export default FollowTab;
