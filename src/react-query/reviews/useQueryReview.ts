import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryReviewById(
  reviewId: number,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ["reviews", { reviewId }],
    queryFn: () => api.reviews.getReview(reviewId),
    enabled,
  });
}
