import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

// `eventId` 인자 추가
export default function useQueryReviewsOfEvent(
  eventId: number,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: () => api.reviews.getReviewsOfEvent(eventId),
    enabled,
  });
}
