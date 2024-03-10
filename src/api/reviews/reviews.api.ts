import { Response } from "@/types/Response.type";
import { client } from "../index.api";
import {
  CreateReactionData,
  DeleteReactionData,
  GetFamousReviewData,
  GetReviewData,
} from "./reviews.data";

async function createReview(dto: any) {
  const response = await client.post<Response>("/reviews", dto);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
}

async function getReviewsOfEvent(eventId: number) {
  const response = await client.get<Response<GetReviewData>>(
    `/reviews?eventId=${eventId}`
  );
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const reviews = data.result;
  return reviews;
}

async function getFamousReviews() {
  const response = await client.get<Response<GetFamousReviewData>>(
    "/reviews/famous"
  );
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const famousReviews = data.result;
  return famousReviews;
}
async function updateReview() {}
async function deleteReview() {}

async function createReactionInReview(reviewId: number, reactionValue: number) {
  const response = await client.post<Response<CreateReactionData>>(
    `/reviews/${reviewId}/reactions`
  );

  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const reaction = data.result;
  return reaction;
}
async function deleteReactionInReview(reviewId: number) {
  const response = await client.delete<Response<DeleteReactionData>>(
    `/reviews/${reviewId}/reactions`
  );

  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const reaction = data.result;
  return reaction;
}

const reviewsAPI = {
  createReview,
  getReviewsOfEvent,
  getFamousReviews,
  updateReview,
  deleteReview,
  createReactionInReview,
  deleteReactionInReview,
};

export default reviewsAPI;
