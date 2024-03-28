import api from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetUser(userId: number) {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => api.users.getUser(userId),
  });
}
