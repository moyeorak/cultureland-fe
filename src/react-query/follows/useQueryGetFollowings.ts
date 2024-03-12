import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetFollowings(
  userId: number,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ["follows"],
    queryFn: () => api.follows.getFollowings(userId),
    enabled,
  });
}
