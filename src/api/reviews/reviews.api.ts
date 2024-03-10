import { Response } from "@/types/Response.type";
import { client } from "../index.api";
import { GetFamousReviewData, GetReviewData } from "./reviews.data";

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

  const deletedReviewId = data.result;
  return deletedReviewId;
}

const reviewsAPI = {
  createReview,
  updateReview,
  deleteReview,
  getReviewsOfEvent,
  getFamousReviews,
};

export default reviewsAPI;
