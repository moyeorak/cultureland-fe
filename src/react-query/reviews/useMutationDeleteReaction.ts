import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationDeleteReaction(reviewId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.reviews.deleteReactionInReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["reviews"] });
    },
  });
}
