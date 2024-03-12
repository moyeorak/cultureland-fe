import useQueryGetFollowers from "@/react-query/follows/useQueryGetFollowers";
import useQueryGetFollowings from "@/react-query/follows/useQueryGetFollowings";
import { profileImgPrifix } from "@/utils/profileImgPrifix";
import Image from "next/image";
import FollowButton from "./../FollowButton/FollowButton";

interface FollowListProps {
  followType: "followings" | "followers";
  userId: number;
}

function FollowList({ followType, userId }: FollowListProps) {
  console.log("followType: ", followType);
  const { data: followers, isLoading: followerIsLoading } =
    useQueryGetFollowers(userId);
  const { data: followings, isLoading: followingIsLoading } =
    useQueryGetFollowings(userId);

  if (followingIsLoading || followerIsLoading) return <div>...is Loading</div>;

  const defaultProfileImg = `${profileImgPrifix}/cultureland/profile/default_profile.jpeg`;

  return (
    <>
      {followType === "followings"
        ? followings?.map((followings, index) => (
            <div
              key={index}
              className="flex justify-between items-center b-7 border border-x-0 border-y-neutral-10 w-full"
            >
              <div className="flex items-center my-5">
                <Image
                  src={
                    followings.following.userProfile.profileImage === undefined
                      ? `${profileImgPrifix}/${followings.following.userProfile.profileImage}`
                      : defaultProfileImg
                  }
                  alt={followings.following.userProfile.nickname}
                  height={60}
                  width={60}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <div className="text-fs-16 font-medium">
                    {followings.following.userProfile.nickname}
                  </div>
                  <div className="text-fs-14 font-normal mt-1">
                    {followings.following.userProfile.description}
                  </div>
                </div>
              </div>
              <FollowButton />
            </div>
          ))
        : followers?.map((followers, index) => (
            <div
              key={index}
              className="flex justify-between items-center b-7 border border-x-0 border-y-neutral-10 w-full"
            >
              <div className="flex items-center my-5">
                <Image
                  src={
                    followers.follower.userProfile.profileImage === undefined
                      ? `${profileImgPrifix}/${followers.follower.userProfile.profileImage}`
                      : defaultProfileImg
                  }
                  alt={followers.follower.userProfile.nickname}
                  height={60}
                  width={60}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <div className="text-fs-16 font-medium">
                    {followers.follower.userProfile.nickname}
                  </div>
                  <div className="text-fs-14 font-normal mt-1">
                    {followers.follower.userProfile.description}
                  </div>
                </div>
              </div>
              <FollowButton />
            </div>
          ))}
    </>
  );
}

export default FollowList;
