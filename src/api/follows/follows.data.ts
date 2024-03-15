import { Follower, Following } from "@/types/Follow.type";

export type GetFollowersData = Follower[];

export type GetFollowingsData = Following[];

export type AddFollowData = {
  followerId: number;
  followingId: number;
};
