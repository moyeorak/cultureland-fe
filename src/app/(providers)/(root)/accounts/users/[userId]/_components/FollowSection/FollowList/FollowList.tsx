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
import Link from "next/link";
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
              <Link href={`/accounts/users/${list.follower.id}`} passHref>
                <div className="overflow-hidden h-[60px] w-[60px] rounded-full cursor-pointer">
                  <Image
                    src={
                      list.follower.userProfile.profileImage === null
                        ? defaultProfileImg
                        : `${profileImgPrifix}/${list.follower.userProfile.profileImage}`
                    }
                    alt={list.follower.userProfile.nickname}
                    height={60}
                    width={60}
                    unoptimized
                  />
                </div>
              </Link>
              <div className="ml-3">
                <Link
                  href={`/accounts/users/${list.follower.id}`}
                  passHref
                  className="text-fs-16 font-medium cursor-pointer"
                >
                  {list.follower.userProfile.nickname}
                </Link>
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
              <Link href={`/accounts/users/${list.following.id}`} passHref>
                <div className="overflow-hidden h-[60px] w-[60px] rounded-full cursor-pointer">
                  <Image
                    src={
                      list.following.userProfile.profileImage === null
                        ? defaultProfileImg
                        : `${profileImgPrifix}/${list.following.userProfile.profileImage}`
                    }
                    alt={list.following.userProfile.nickname}
                    height={60}
                    width={60}
                    unoptimized
                  />
                </div>
              </Link>
              <div className="ml-3">
                <Link
                  href={`/accounts/users/${list.following.id}`}
                  passHref
                  className="text-fs-16 font-medium cursor-pointer"
                >
                  {list.following.userProfile.nickname}
                </Link>
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
