import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryFamousReview(enabled: boolean = true) {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: () => api.reviews.getFamousReviews,
    enabled,
  });
}
