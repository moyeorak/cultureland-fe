import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryWrittenReviews(
  userId: number,
  page: number = 1,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ["reviews", userId],
    queryFn: () => api.reviews.getReviewsOfUser(userId, page),
    enabled,
  });
}
