import { useTabStore } from "@/zustand";

const FollowSection = () => {
  const { showFollowing } = useTabStore();

  return (
    <div>
      {showFollowing ? (
        <div>팔로잉 목록 컴포넌트</div>
      ) : (
        <div>팔로워 목록 컴포넌트</div>
      )}
    </div>
  );
};

export default FollowSection;
