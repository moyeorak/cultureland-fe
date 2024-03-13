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

async function getReviewsOfEvent(
  eventId: number,
  page: number = 1,
  orderBy: "likes" | "hates" | "recent" = "likes"
) {
  const response = await client.get<Response<GetReviewData>>(
    `/reviews/events/${eventId}?page=${page}&orderBy=${orderBy}`
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

async function getLikedReviews(userId: number) {
  const response = await client.get(`/accounts/users/${userId}/reactions`);
}

async function getReviewsOfUser(userId: number, page: number = 1) {
  const response = await client.get(`/reviews/users/${userId}?page=${page}`);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const reviews = data.result;
  return reviews;
}

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
async function updateReview(reviewId: number, dto: any) {
  const response = await client.put(`/reviews/${reviewId}`, dto);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const review = data.result;

  return review;
}
async function deleteReview(reviewId: number) {
  const response = await client.delete(`/reviews/${reviewId}`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const review = data.result;

  return review;
}

const reviewsAPI = {
  createReview,
  getReviewsOfEvent,
  getFamousReviews,
  getLikedReviews,
  getReviewsOfUser,
  updateReview,
  deleteReview,
  createReactionInReview,
  deleteReactionInReview,
};

export default reviewsAPI;
