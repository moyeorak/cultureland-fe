export type Follower = {
  follower: {
    id: number;
    userProfile: {
      nickname: string;
      profileImage: string | null;
      description: string;
    };
  };
};

export type Following = {
  following: {
    id: number;
    userProfile: {
      nickname: string;
      profileImage: string | null;
      description: string;
    };
  };
};
