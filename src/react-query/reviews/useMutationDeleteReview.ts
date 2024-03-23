import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationDeleteReview(eventId: number) {
  const queryClient = useQueryClient();
  const mutationFn = api.reviews.deleteReview;

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", { eventId }],
      });
    },
  });
}
