import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface UpdateReviewDto {
  reviewId: number;
  formData: any;
}

export default function useMutationUpdateReview(eventId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reviewId, formData }: UpdateReviewDto) =>
      api.reviews.updateReview(reviewId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", { eventId }],
      });
    },
  });
}
