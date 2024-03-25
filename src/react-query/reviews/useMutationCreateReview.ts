import api from "@/api/index.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function useMutationCreateReview(eventId: number) {
  const queryClient = useQueryClient();
  const mutationFn = api.reviews.createReview;

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", { eventId }],
      });
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.error?.message || "리뷰 등록에 실패하였습니다.";
        alert(errorMessage);
      }
    },
  });
}
