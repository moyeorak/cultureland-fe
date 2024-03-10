import { PartnersSignInDto } from "@/api/accounts/partners/partners.dto";
import api from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";

export default function useMutationPartnersSignIn() {
  return useMutation<unknown, unknown, PartnersSignInDto>({
    mutationFn: api.partners.signIn,
  });
}
