import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryReviewsOfEvent(
  eventId: number,
  enabled: boolean = true,
  page: number = 1,
  orderBy: string = "recent"
) {
  return useQuery({
    queryKey: ["reviews", { eventId }],
    queryFn: () => api.reviews.getReviewsOfEvent(eventId),
    enabled,
  });
}
