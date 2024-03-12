import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationDeleteReview() {
  const queryClient = useQueryClient();
  const mutationFn = api.reviews.deleteReview;

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["reviews"] });
    },
  });
}
