import { Response } from "@/types/Response.type";
import { client } from "../index.api";

async function createReview(dto: any) {
  const response = await client.post<Response>("/reviews", dto);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
}

async function getReviewsOfEvent(eventId: number) {
  const response = await client.get<Response>(`/reviews/events/${eventId}`);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const reviews = data.result;
  return reviews;
}

async function getReviewsOfUser(userId: number) {
  const response = await client.get(`/reviews/users/${userId}`);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const reviews = data.result;
  return reviews;
}

async function getFamousReviews() {
  const response = await client.get<Response>("/reviews/famous");
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const famousReviews = data.result;
  return famousReviews;
}

async function createReactionInReview(reviewId: number) {
  const response = await client.post(`/reviews/${reviewId}/reactions`);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const reaction = data.result;
  return reaction;
}
async function deleteReactionInReview(reviewId: number) {
  const response = await client.post(`/reviews/${reviewId}/reactions`);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const reaction = data.result;
  return reaction;
}

const reviewsAPI = {
  createReview,
  getReviewsOfEvent,
  getFamousReviews,
  createReactionInReview,
  deleteReactionInReview,
};

export default reviewsAPI;
