import { useTabStore } from "@/zustand";

interface FollowSelectorProps {
  follows: {
    followers: number;
    followings: number;
  };
}

function FollowSelector({ follows }: FollowSelectorProps) {
  const { setShowFollows, setShowFollowing } = useTabStore();

  return (
    <div className="flex items-center bg-white border border-user-theme-30 rounded-lg overflow-hidden">
      <button
        className="flex-1 text-sm px-6 py-2 focus:outline-none hover:bg-gray-100 transition-colors duration-300"
        onClick={() => {
          setShowFollows(true);
          setShowFollowing(true);
        }}
      >
        <span className="font-bold text-fs-16">{follows.followings}</span>
        <span className="block text-[10px] font-normal text-user-theme-90">
          팔로잉
        </span>
      </button>
      <div className="w-px bg-user-theme-30 h-6"></div>
      <button
        className="flex-1 text-sm px-6 py-2 focus:outline-none hover:bg-gray-100 transition-colors duration-300"
        onClick={() => {
          setShowFollows(true);
          setShowFollowing(false);
        }}
      >
        <span className="font-bold text-fs-16">{follows.followers}</span>
        <span className="block text-[10px] font-normal text-user-theme-90">
          팔로우
        </span>
      </button>
    </div>
  );
}

export default FollowSelector;
