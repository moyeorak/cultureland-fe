import { Response } from "@/types/Response.type";
import { client } from "../../index.api";
import { GetUserData } from "./users.data";
import { UsersSignInDto, UsersSignUpDto } from "./users.dto";

async function emailDuplicationCheck(email: string) {
  const response = await client.get<Response<boolean>>(
    `/accounts/users/email-check?email=${email}`
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const result = data.result;

  return result;
}

async function signUp(dto: UsersSignUpDto) {
  const response = await client.post<Response>("/accounts/users/sign-up", dto);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const accessToken = data.result;
  return accessToken;
}

async function signIn(dto: UsersSignInDto) {
  const response = await client.post<Response>("/accounts/users/sign-in", dto);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const accessToken = data.result;
  return accessToken;
}

async function signOut() {
  return await client.post<Response>("/accounts/users/sign-out");
}

async function refreshToken() {
  const response = await client.post<Response<string>>(
    `/accounts/users/refresh-token`
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const refreshedAccessToken = data.result;

  return refreshedAccessToken;
}

async function getUser(userId: number) {
  const response = await client.get<Response<GetUserData>>(
    `/accounts/users/${userId}`
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const user = data.result;

  return user;
}

async function updateProfile(userId: number, formData: FormData) {
  const response = await client.put<Response>(
    `/accounts/users/${userId}`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const result = data.result;

  return result;
}

const usersAPI = {
  emailDuplicationCheck,
  signUp,
  signIn,
  signOut,
  refreshToken,
  getUser,
  updateProfile,
};

export default usersAPI;
