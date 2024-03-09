import { Response } from "@/types/Response.type";
import { client } from "../../index.api";
import { PartnersSignInDto, PartnersSignUpDto } from "./partners.dto";

async function emailDuplicationCheck(email: string) {
  const response = await client.get<Response<boolean>>(
    "/accounts/partners/email-check",
    {
      params: { email },
    }
  );

  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const result = data.result;

  return result;
}

async function signUp(dto: PartnersSignUpDto) {
  return await client.post<Response>("/accounts/partners/sign-up", dto);
}

async function signIn(dto: PartnersSignInDto) {
  return await client.post<Response>("/accounts/partners/sign-in", dto);
}

async function signOut() {
  return await client.post<Response>("/accounts/partners/sign-out");
}

const partnersAPI = {
  emailDuplicationCheck,
  signUp,
  signIn,
  signOut,
};

export default partnersAPI;
