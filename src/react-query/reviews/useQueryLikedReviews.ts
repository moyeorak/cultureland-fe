import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryLikedReviews(
  userId: number,
  page: number = 1,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ["reviews", userId],
    queryFn: () => api.reviews.getLikedReviews(userId, page),
    enabled,
  });
}
