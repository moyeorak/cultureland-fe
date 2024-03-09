import { ReactionsCount, Review, ReviewReaction } from "@/types/Review.type";

export type GetReviewData = Review[] & {
  reviewReactions: ReviewReaction[];
} & ReactionsCount;
export type GetFamousReviewData = GetReviewData; //확인 필요
export type CreateReviewData = Review;
