import { UsersSignInDto } from "@/api/accounts/users/users.dto";
import api from "@/api/index.api";
import { UserInfo } from "@/types/User.type";
import { useProfile } from "@/zustand";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";

export default function useMutationUserSignIn() {
  const { setProfile: setUserInfo } = useProfile();

  return useMutation<unknown, unknown, UsersSignInDto>({
    mutationFn: api.users.signIn,
    onSuccess: (data) => {
      const { sub, nickname, profileImage }: UserInfo = jwtDecode(String(data));

      return setUserInfo({
        id: Number(sub),
        nickname,
        imageUrl: profileImage,
      });
    },
  });
}
