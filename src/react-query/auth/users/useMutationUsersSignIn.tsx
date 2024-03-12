import { UsersSignInDto } from "@/api/accounts/users/users.dto";
import api from "@/api/index.api";
import { UserInfo } from "@/types/User.type";
import { useAuthStore } from "@/zustand";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";

export default function useMutationUserSignIn() {
  const { setUserInfo } = useAuthStore();
  return useMutation<unknown, unknown, UsersSignInDto>({
    mutationFn: api.users.signIn,
    onSuccess: (data) => {
      const userInfo: UserInfo = jwtDecode(String(data));

      return setUserInfo({
        userId: userInfo.sub,
        nickname: userInfo.nickname,
        profileImage: userInfo.profileImage,
      });
    },
  });
}
