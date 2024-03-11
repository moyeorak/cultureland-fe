import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetFollowers(
  userId: number,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: ["follows", userId],
    queryFn: () => api.follows.getFollowers(userId),
    enabled,
  });
}
