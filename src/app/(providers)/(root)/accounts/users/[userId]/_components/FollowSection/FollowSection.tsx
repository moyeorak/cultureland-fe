import { useAuth } from "@/contexts/auth.context/auth.context";
import useQueryGetFollowers from "@/react-query/follows/useQueryGetFollowers";
import useQueryGetFollowings from "@/react-query/follows/useQueryGetFollowings";
import { useTabStore } from "@/zustand";
import FollowList from "./FollowList";

interface FollowSectionProps {
  userId: number;
}

function FollowSection({ userId }: FollowSectionProps) {
  const { showFollowing } = useTabStore();
  const { isLoggedIn } = useAuth();
  const { data: followers } = useQueryGetFollowers(userId, isLoggedIn);
  const { data: followings } = useQueryGetFollowings(userId, isLoggedIn);

  if (
    followers?.followers === undefined ||
    followings?.following === undefined
  ) {
    return <div>asd</div>;
  }

  return (
    <div className="w-full">
      {showFollowing ? (
        <FollowList followType="followings" followsData={followings} />
      ) : (
        <FollowList followType="followers" followsData={followers} />
      )}
    </div>
  );
}

export default FollowSection;
