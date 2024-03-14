interface FollowButtonsProps {
  followersCount: number;
  followingsCount: number;
}

function FollowButtons({
  followersCount,
  followingsCount,
}: FollowButtonsProps) {
  return (
    <div className="flex items-center">
      <button className="grow">
        <span className="font-bold">{followersCount}</span>
        <span className="block text-xs font-normal text-user-theme-90">
          팔로워 수
        </span>
      </button>

      <div className="w-px bg-user-theme-30 h-6"></div>

      <button className="grow">
        <span className="font-bold">{followingsCount}</span>
        <span className="block text-xs font-normal text-user-theme-90">
          팔로잉 수
        </span>
      </button>
    </div>
  );
}

export default FollowButtons;
