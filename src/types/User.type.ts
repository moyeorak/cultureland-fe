export type User = {
  email: string;
  password: string;
};

export type UserInfo = {
  nickname: string;
  profileImage: string | null;
  accountType: string;
  iat: number;
  exp: number;
  sub: string;
};
