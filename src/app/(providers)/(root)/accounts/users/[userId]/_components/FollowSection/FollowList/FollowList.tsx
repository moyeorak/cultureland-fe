import useQueryGetFollowers from "@/react-query/follows/useQueryGetFollowers";
import useQueryGetFollowings from "@/react-query/follows/useQueryGetFollowings";
import { profileImgPrifix } from "@/utils/profileImgPrifix";
import Image from "next/image";
import NoneFollow from "../NoneFollow";
import FollowButton from "./../FollowButton/FollowButton";

interface FollowListProps {
  followType: "followings" | "followers";
  userId: number;
}

function FollowList({ followType, userId }: FollowListProps) {
  const { data: followers, isLoading: followerIsLoading } =
    useQueryGetFollowers(userId);
  const { data: followings, isLoading: followingIsLoading } =
    useQueryGetFollowings(userId);

  if (followingIsLoading || followerIsLoading) return <div>...is Loading</div>;

  const defaultProfileImg = `${profileImgPrifix}/cultureland/profile/default_profile.jpeg`;

  return (
    <>
      {followType === "followings" ? (
        followings?.length === 0 ? (
          <NoneFollow followType={followType} />
        ) : (
          followings?.map((list, index) => (
            <div
              key={index}
              className="flex justify-between items-center b-7 border border-x-0 border-y-neutral-10 w-full"
            >
              <div className="flex items-center my-5">
                <Image
                  src={
                    list.following.userProfile.profileImage === undefined
                      ? `${profileImgPrifix}/${list.following.userProfile.profileImage}`
                      : defaultProfileImg
                  }
                  alt={list.following.userProfile.nickname}
                  height={60}
                  width={60}
                  className="rounded-full"
                  unoptimized
                />
                <div className="ml-3">
                  <div className="text-fs-16 font-medium">
                    {list.following.userProfile.nickname}
                  </div>
                  <div className="text-fs-14 font-normal mt-1">
                    {list.following.userProfile.description}
                  </div>
                </div>
              </div>
              <FollowButton userId={userId} />
            </div>
          ))
        )
      ) : followers?.length === 0 ? (
        <NoneFollow followType={followType} />
      ) : (
        followers?.map((list, index) => (
          <div
            key={index}
            className="flex justify-between items-center b-7 border border-x-0 border-y-neutral-10 w-full"
          >
            <div className="flex items-center my-5">
              <Image
                src={
                  list.follower.userProfile.profileImage === undefined
                    ? `${profileImgPrifix}/${list.follower.userProfile.profileImage}`
                    : defaultProfileImg
                }
                alt={list.follower.userProfile.nickname}
                height={60}
                width={60}
                className="rounded-full"
                unoptimized
              />
              <div className="ml-3">
                <div className="text-fs-16 font-medium">
                  {list.follower.userProfile.nickname}
                </div>
                <div className="text-fs-14 font-normal mt-1">
                  {list.follower.userProfile.description}
                </div>
              </div>
            </div>
            <FollowButton userId={userId} />
          </div>
        ))
      )}
    </>
  );
}

export default FollowList;
