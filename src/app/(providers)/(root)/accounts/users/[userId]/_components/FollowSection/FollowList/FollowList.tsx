import { useAuth } from "@/contexts/auth.context/auth.context";
import useQueryGetFollowers from "@/react-query/follows/useQueryGetFollowers";
import useQueryGetFollowings from "@/react-query/follows/useQueryGetFollowings";
import { profileImgPrifix } from "@/utils/profileImgPrifix";
import { useAuthStore } from "@/zustand";
import Image from "next/image";
import { useEffect } from "react";
import NoneFollow from "../NoneFollow";
import FollowButton from "./../FollowButton/FollowButton";

interface FollowListProps {
  followType: "followings" | "followers";
  userId: number;
}

function FollowList({ followType, userId }: FollowListProps) {
  const { userInfo } = useAuthStore();
  const loggedInUserId = userInfo!.userId;
  const { isLoggedIn } = useAuth();

  const { data: hostFollowers, isLoading: hostFollowersLoading } =
    useQueryGetFollowers(userId);
  const { data: hostFollowings, isLoading: hostFollowingsLoading } =
    useQueryGetFollowings(userId);
  const { data: myFollowings, isLoading: myFollowingsLoading } =
    useQueryGetFollowings(loggedInUserId, isLoggedIn);

  useEffect(() => {
    if (
      !myFollowingsLoading &&
      !hostFollowingsLoading &&
      myFollowings &&
      hostFollowings
    ) {
      // 페이지 주인이 팔로우하는 모든 사람에 대해 내가 팔로우하는 사람이 있는지 확인
      const isFollowing = hostFollowings.some((person) =>
        myFollowings.some(
          (myPerson) => myPerson.following.id === person.following.id
        )
      );

      return isFollowing;
    }
  }, [
    myFollowings,
    hostFollowings,
    myFollowingsLoading,
    hostFollowingsLoading,
  ]);

  if (hostFollowingsLoading || hostFollowersLoading)
    return <div>...is Loading</div>;

  const defaultProfileImg = `${profileImgPrifix}/cultureland/profile/default_profile.jpeg`;

  return (
    <>
      {followType === "followings" ? (
        hostFollowings?.length === 0 ? (
          <NoneFollow followType={followType} />
        ) : (
          hostFollowings?.map((list, index) => (
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
      ) : hostFollowers?.length === 0 ? (
        <NoneFollow followType={followType} />
      ) : (
        hostFollowers?.map((list, index) => (
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
