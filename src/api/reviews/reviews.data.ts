import { Review } from "@/types/Review.type";

export type GetReviewData = Review[];
export type GetFamousReviewData = Review[];
export type CreateReviewData = Review;
export type CreateReactionData = {
  userId: number;
  reviewId: number;
  reactionValue: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
export type DeleteReactionData = {
  reviewId: number;
};
