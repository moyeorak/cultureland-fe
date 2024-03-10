import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationCreateReview() {
  const queryClient = useQueryClient();
  const mutationFn = api.reviews.createReview;

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, queryKey: ["review"] });
    },
  });
}
