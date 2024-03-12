import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationDeleteFollow(userId: number) {
  const queryClient = useQueryClient();
  const mutationFn = () => api.follows.deleteFollow(userId);

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["followings, follows"],
      }),
  });
}
