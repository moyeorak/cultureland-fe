import { UsersSignUpDto } from "@/api/accounts/users/users.dto";
import api from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";

export default function useMutationUsersSignUp() {
  return useMutation<unknown, unknown, UsersSignUpDto>({
    mutationFn: api.users.signUp,
  });
}
