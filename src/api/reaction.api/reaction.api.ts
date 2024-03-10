import { client } from "../index.api";

async function createReaction(reviewId: number, reactionValue: number) {
  const response = await client.post(
    //type정의 필요
    `/reviews/${reviewId}/reactions`,
    reactionValue
  );
  const data = response.data;
  if (!data.success) throw new Error(data.message); //response 확인

  const reaction = data.result;
  return reaction;
}
async function deleteReaction(reviewId: number, reactionValue: number) {
  const response = await client.delete(`/reviews/${reviewId}/reactions`); //type 필요
  const data = response.data;

  if (!data.success) throw new Error(data.message); //response 확인

  const reaction = data.result;
  return reaction;
}

const reactionAPI = {
  createReaction,
  deleteReaction,
};
