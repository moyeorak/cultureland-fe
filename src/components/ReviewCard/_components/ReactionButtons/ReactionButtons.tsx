"use client";

import useMutationCreateReaction from "@/react-query/reviews/useMutationCreateReactoin";
import useMutationDeleteReaction from "@/react-query/reviews/useMutationDeleteReaction";
import { Review } from "@/types/Review.type";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import DisLikeButton from "./DislikeButton/DislikeButton";
import LikeButton from "./LikeButton";

interface ReactionButtonsProps {
  review: Review;
  isLiked: boolean;
  isDisliked: boolean;
}

function ReactionButtons({
  review,
  isLiked,
  isDisliked,
}: ReactionButtonsProps) {
  const queryClient = useQueryClient();
  const reviewId = review.id;
  const { eventId } = useParams();

  const { mutateAsync: createReaction } = useMutationCreateReaction();
  const { mutateAsync: deleteReaction } = useMutationDeleteReaction();

  const handleClickLike = async () => {
    try {
      if (isLiked) {
        await deleteReaction(review.id);
      } else if (isDisliked) {
        await deleteReaction(review.id);
        await createReaction({ reviewId: review.id, reactionValue: 1 });
      } else {
        await createReaction({ reviewId: review.id, reactionValue: 1 });
      }
    } finally {
      queryClient.invalidateQueries({
        queryKey: ["reviews", { eventId: Number(eventId) }],
      });
    }
  };

  const handleClickDislike = async () => {
    try {
      if (isDisliked) {
        await deleteReaction(review.id);
      } else if (isLiked) {
        await deleteReaction(review.id);
        await createReaction({ reviewId: review.id, reactionValue: -1 });
      } else {
        await createReaction({ reviewId: review.id, reactionValue: -1 });
      }
    } finally {
      queryClient.invalidateQueries({
        queryKey: ["reviews", { eventId: Number(eventId) }],
      });
    }
  };

  return (
    <div className="flex gap-x-[10px] items-center">
      <LikeButton
        onClickLikeButton={handleClickLike}
        isActive={isLiked}
        count={review.likes}
      />
      <DisLikeButton
        onClickDislikeButton={handleClickDislike}
        isActive={isDisliked}
        count={review.hates}
      />
    </div>
  );
}

export default ReactionButtons;
