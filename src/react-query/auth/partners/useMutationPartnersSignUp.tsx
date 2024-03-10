import { PartnersSignUpDto } from "@/api/accounts/partners/partners.dto";
import api from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";

export default function useMutationPartnersSignUp() {
  return useMutation<unknown, unknown, PartnersSignUpDto>({
    mutationFn: api.partners.signUp,
  });
}
