import { Response } from "@/types/Response.type";
import { client } from "../../index.api";
import {
  GetUserData,
  GetUserInfoToEditData,
  UpdateProfileData,
} from "./users.data";
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
  return await client.post<Response>("/accounts/users/sign-up", dto);
}

async function signIn(dto: UsersSignInDto) {
  return await client.post<Response>("/accounts/users/sign-in", dto);
}

async function signOut() {
  return await client.post<Response>("/accounts/users/sign-out");
}

async function refreshToken() {
  const response = await client.post<Response<boolean>>(
    `/accounts/users/refresh-token`
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const isAccessTokenRefreshed = data.result;

  return isAccessTokenRefreshed;
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

async function getUserInfoToEdit() {
  const response = await client.get<Response<GetUserInfoToEditData>>(
    "/accounts/users/edit"
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const userInfo = data.result;

  return userInfo;
}

async function updateProfile() {
  const response = await client.put<Response<UpdateProfileData>>(
    "/accounts/users"
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const updatedUserInfo = data.result;

  return updatedUserInfo;
}

const usersAPI = {
  emailDuplicationCheck,
  signUp,
  signIn,
  signOut,
  refreshToken,
  getUser,
  getUserInfoToEdit,
  updateProfile,
};

export default usersAPI;
