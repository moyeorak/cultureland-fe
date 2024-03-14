import {
  GetFollowersData,
  GetFollowingsData,
} from "@/api/follows/follows.data";
import { useAuth } from "@/contexts/auth.context/auth.context";
import useQueryGetFollowers from "@/react-query/follows/useQueryGetFollowers";
import useQueryGetFollowings from "@/react-query/follows/useQueryGetFollowings";
import { Follower, Following } from "@/types/Follow.type";
import { profileImgPrifix } from "@/utils/profileImgPrifix";
import { useFollowsStore, useProfile } from "@/zustand";
import Image from "next/image";
import NoneFollow from "../NoneFollow";
import FollowButton from "./../FollowButton/FollowButton";

interface FollowListProps {
  followType: "followings" | "followers";
  userId: number;
}

function FollowList({ followType, userId }: FollowListProps) {
  const { id } = useProfile();
  const { isLoggedIn } = useAuth();
  const { followings } = useFollowsStore();
  console.log("followings: ", followings);
  const { data: hostFollowers, isLoading: hostFollowersLoading } =
    useQueryGetFollowers(userId);
  const { data: hostFollowings, isLoading: hostFollowingsLoading } =
    useQueryGetFollowings(userId);
  const { data: myFollowings, isLoading: myFollowingsLoading } =
    useQueryGetFollowings(id!, isLoggedIn);

  // 현재 로그인한 유저가 상대방을 팔로우하고 있는지 확인
  const amIFollowing = (userIdToCheck: number) => {
    return myFollowings?.some(
      (myFollowing) => myFollowing.following.id === userIdToCheck
    );
  };

  if (hostFollowingsLoading || hostFollowersLoading)
    return <div>...is Loading</div>;

  const defaultProfileImg = `${profileImgPrifix}/cultureland/profile/default_profile.jpeg`;

  // 팔로잉 팔로우 목록이 없는 경우를 처리할 예정
  const renderNoneFollow = (followType: "followings" | "followers") => (
    <NoneFollow followType={followType} />
  );

  const renderFollowers = (hostFollowers: GetFollowersData) =>
    hostFollowers?.length > 0
      ? hostFollowers.map((list: Follower, index: number) => (
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
            <FollowButton
              userId={list.follower.id}
              amIFollowing={amIFollowing(list.follower.id)}
            />
          </div>
        ))
      : renderNoneFollow("followers");

  const renderFollowings = (hostFollowings: GetFollowingsData) =>
    hostFollowings?.length > 0
      ? hostFollowings.map((list: Following, index: number) => (
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
            <FollowButton
              key={index}
              userId={list.following.id}
              amIFollowing={amIFollowing(list.following.id)}
            />{" "}
          </div>
        ))
      : renderNoneFollow("followings");

  return (
    <>
      {followType === "followings" && hostFollowings
        ? renderFollowings(hostFollowings)
        : null}
      {followType === "followers" && hostFollowers
        ? renderFollowers(hostFollowers)
        : null}
    </>
  );
}

export default FollowList;
