import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationDeleteFollow() {
  const queryClient = useQueryClient();
  const mutationFn = (userId: number) => api.follows.deleteFollow(userId);

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["followers", "followings"],
      });
    },
  });
}
