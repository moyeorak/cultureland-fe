import { Response } from "@/types/Response.type";
import { client } from "../index.api";

async function createReview(dto: any) {
  const response = await client.post<Response>("/reviews", dto);
  const data = response.data;
  if (!data.success) throw new Error(data.message);
}

async function getReviewsOfEvent(eventId: number) {
  const response = await client.get(`/reviews?eventId=${eventId}`);
  const data = response.data;

  if (!data.success) throw new Error(data.message);

  const reviews = data.result;
  return reviews;
}

async function getFamousReviews() {
  const response = await client.get("/reviews/famous");
  const data = response.data;

  if (!data.success) throw new Error(data.message);

  const famousReviews = data.result;
  return famousReviews;
}

const reviewsAPI = {
  createReview,
  getReviewsOfEvent,
  getFamousReviews,
};

export default reviewsAPI;
