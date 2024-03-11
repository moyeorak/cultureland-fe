import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationAddFollow(userId: number) {
  const queryClient = useQueryClient();
  const mutationFn = () => api.follows.addFollow(userId);

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["follows"] }),
  });
}
