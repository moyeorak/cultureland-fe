import { UsersSignUpDto } from "@/api/accounts/users/users.dto";
import api from "@/api/index.api";
import { UserInfo } from "@/types/User.type";
import { useFollowsStore, useProfile } from "@/zustand";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";

export default function useMutationUsersSignUp() {
  const { setProfile } = useProfile();
  const fetchFollowings = useFollowsStore((state) => state.fetchFollowings); // 팔로잉 목록을 가져오는 함수를 가져옵니다.

  return useMutation<unknown, unknown, UsersSignUpDto>({
    mutationFn: api.users.signUp,
    onSuccess: async (data) => {
      const { sub, nickname, profileImage }: UserInfo = jwtDecode(String(data));

      return setProfile({
        id: Number(sub),
        nickname,
        imageUrl: profileImage,
      });
      return await fetchFollowings(Number(userInfo.sub));
    },
  });
}
