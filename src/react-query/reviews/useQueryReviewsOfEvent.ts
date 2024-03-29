import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryReviewsOfEvent(
  eventId: number,
  enabled: boolean = true,
  page: number = 1,
  orderBy: "recent" | "likes" | "hates"
) {
  return useQuery({
    queryKey: ["reviews", { eventId, orderBy }],
    queryFn: () => api.reviews.getReviewsOfEvent(eventId, page, orderBy),
    enabled,
  });
}
