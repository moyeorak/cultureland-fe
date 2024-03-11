export type GetFollowersData = {
  followers: Array<{
    userProfile: {
      nickname: string;
      profileImage: string | null;
    };
  }>;
};

export type GetFollowingsData = {
  following: Array<{
    id: number;
    userProfile: {
      nickname: string;
      profileImage: string | null;
    };
  }>;
};

export type AddFollowData = {
  followerId: number;
  followingId: number;
};
