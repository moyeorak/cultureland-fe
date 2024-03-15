import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetFollowers(
  userId: number,
  enabled: boolean = true
) {
  const queryFn = () => api.follows.getFollowers(userId);

  return useQuery({
    queryKey: ["followers", { userId }],
    queryFn,
    enabled,
  });
}
