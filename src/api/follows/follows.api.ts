import { Response } from "@/types/Response.type";
import { client } from "../index.api";
import {
  AddFollowData,
  GetFollowersData,
  GetFollowingsData,
} from "./follows.data";

async function getFollowers(userId: number) {
  const response = await client.get<Response<GetFollowersData>>(
    `/accounts/users/${userId}/follows/followers`
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const followers = data.result;

  return followers;
}

async function getFollowings(userId: number) {
  const response = await client.get<Response<GetFollowingsData>>(
    `/accounts/users/${userId}/follows/followings`
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const followings = data.result;

  return followings;
}

async function addFollow(userId: number) {
  const response = await client.post<Response<AddFollowData>>(
    `/accounts/users/${userId}/follows`
  );

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const result = data.result;

  return result;
}

async function deleteFollow(userId: number) {
  return await client.delete(`/accounts/users/${userId}/follows`);
}

const followsAPI = {
  getFollowers,
  getFollowings,
  addFollow,
  deleteFollow,
};

export default followsAPI;
