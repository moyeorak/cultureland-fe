import { useTabStore } from "@/zustand";
import FollowList from "./FollowList";

interface FollowSectionProps {
  userId: number;
}

function FollowSection({ userId }: FollowSectionProps) {
  const { showFollowing } = useTabStore();

  return (
    <div className="w-full">
      {showFollowing ? (
        <FollowList followType="followings" userId={userId} />
      ) : (
        <FollowList followType="followers" userId={userId} />
      )}
    </div>
  );
}

export default FollowSection;
