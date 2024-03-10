import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationDeleteReaction() {
  const queryClient = useQueryClient();
  const mutationFn = api.reviews.deleteReactionInReview;

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["reviews"] });
    },
  });
}
