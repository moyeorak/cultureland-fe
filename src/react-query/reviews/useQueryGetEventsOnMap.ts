import api from "@/api/index.api";
import { Coordinate } from "@/types/index.types";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetEventsOnMap(
  coordinate: Coordinate,
  category?: string
) {
  return useQuery({
    queryKey: [
      "events",
      {
        map: true,
        center: { lat: coordinate.lat, lng: coordinate.lng },
        category,
      },
    ],
    queryFn: () => api.events.getEventsOnMap(coordinate, category),
  });
}
