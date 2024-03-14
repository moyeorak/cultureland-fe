import { UsersSignUpDto } from "@/api/accounts/users/users.dto";
import api from "@/api/index.api";
import { UserInfo } from "@/types/User.type";
import { useProfile } from "@/zustand";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";

export default function useMutationUsersSignUp() {
  const { setProfile } = useProfile();

  return useMutation<unknown, unknown, UsersSignUpDto>({
    mutationFn: api.users.signUp,
    onSuccess: (data) => {
      const { sub, nickname, profileImage }: UserInfo = jwtDecode(String(data));

      return setProfile({
        id: Number(sub),
        nickname,
        imageUrl: profileImage,
      });
    },
  });
}
