import { UsersSignInDto } from "@/api/accounts/users/users.dto";
import api from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";

export default function useMutationUserSignIn() {
  return useMutation<unknown, unknown, UsersSignInDto>({
    mutationFn: api.users.signIn,
  });
}
