import { useQuery } from "@tanstack/react-query";

export default function useQueryReviewsOfEvent(eventId: number) {
  return useQuery({
    queryKey: ["reviews", eventId],
    //queryFn: api.reviews.get,
    enabled: !!eventId, //test
  });
}
