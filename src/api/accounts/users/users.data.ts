export type GetUserData = {
  id: number;
  email: string;
  userProfile: {
    userId: number;
    nickname: string;
    profileImage: string | null;
    description: string;
  };
  _count: { followers: number; followings: number };
  isMe: boolean;
};

export type GetUserInfoToEditData = {
  userId: number;
  email: string;
  nickname: string;
  profileImage: string;
};

export type UpdateProfileData = GetUserInfoToEditData;
