export type GetUserData = {
  isLoggendUser: boolean;
  followingCnt: number;
  followerCnt: number;
  profileImage: string;
  nickname: string;
  attendedEvents?: {
    eventId: number;
    partnerId: number;
    title: string;
    poster: string;
    startDate: string;
    endDate: string;
    venueName: string;
    category: string;
    rating: number;
  };
};

export type GetUserInfoToEditData = {
  userId: number;
  email: string;
  nickname: string;
  profileImage: string;
};

export type UpdateProfileData = GetUserInfoToEditData;
