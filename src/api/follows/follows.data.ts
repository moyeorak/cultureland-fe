import { Followers, Followings } from "@/types/Follow.type";

export type GetFollowersData = Followers;

export type GetFollowingsData = Followings;

export type AddFollowData = {
  followerId: number;
  followingId: number;
};
