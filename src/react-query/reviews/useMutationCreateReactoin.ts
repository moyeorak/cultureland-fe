import api from "@/api/index.api";
import { useMutation } from "@tanstack/react-query";

export interface CreateReactionDto {
  reviewId: number;
  reactionValue: number;
}

export default function useMutationCreateReaction() {
  return useMutation({
    mutationFn: ({ reviewId, reactionValue }: CreateReactionDto) =>
      api.reviews.createReactionInReview(reviewId, reactionValue),
  });
}
