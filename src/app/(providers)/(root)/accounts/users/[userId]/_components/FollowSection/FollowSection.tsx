import { useTabStore } from "@/zustand";
import FollowList from "./FollowList";

const FollowSection = () => {
  const { showFollowing } = useTabStore();

  return (
    <div className="w-full">
      {showFollowing ? (
        <div className="w-full">
          <FollowList />
        </div>
      ) : (
        <div>
          <FollowList />
        </div>
      )}
    </div>
  );
};

export default FollowSection;
