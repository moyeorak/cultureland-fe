"use client";

import useMutationCreateReaction from "@/react-query/reviews/useMutationCreateReactoin";
import useMutationDeleteReaction from "@/react-query/reviews/useMutationDeleteReaction";
import { Review } from "@/types/Review.type";
import { useReviewsStore } from "@/zustand";
import { useState } from "react";
import DisLikeButton from "./DislikeButton/DislikeButton";
import LikeButton from "./LikeButton";

interface ReactionButtonsProps {
  review: Review;
  isAlreadyLiked: boolean;
  isAlreadyDisliked: boolean;
}

function ReactionButtons({
  review,
  isAlreadyLiked,
  isAlreadyDisliked,
}: ReactionButtonsProps) {
  const reviewId = review.id;

  const { mutateAsync: createReaction } = useMutationCreateReaction();
  const { mutateAsync: deleteReaction } = useMutationDeleteReaction();

  const { likedReviews, addLikeReview, removeLikeReview } = useReviewsStore(
    (state) => state
  );

  const [isLiked, setIsLiked] = useState(isAlreadyLiked);
  const [isDisliked, setIsDisliked] = useState(isAlreadyDisliked);

  //좋아요 수가 바로 바뀌는지 테스트해보기
  // const [likeCount, setLikeCount] = useState(likes);
  // const [dislikeCount, setDislikeCount] = useState(hates);

  const onClickLikeButton = async () => {
    if (!isDisliked) {
      setIsLiked((prev) => !prev);
    } else {
      alert("싫어요가 이미 선택되었습니다");
      return;
    }

    if (isLiked) {
      //좋아요가 눌린상태 -> 클릭시 취소해야함 (delete)
      console.log("좋아요 delete");
      removeLikeReview(review);
      // await deleteReaction(reviewId);
    } else {
      //좋아요가 활성화되지않음-> 클릭시싫어요 post(-1)
      console.log("좋아요 포스트: body에 +1");
      addLikeReview(review);
      // await createReaction({ reviewId, reactionValue: 1 });
    }
  };

  const onClickDislikeButton = async () => {
    if (!isLiked) {
      setIsDisliked((prev) => !prev);
    } else {
      alert("좋아요가 이미 선택되었습니다.");
    }

    if (isDisliked) {
      //싫어요가 눌린상태 -> 클릭시 취소해야함 (delete)
      console.log("싫어요 delete");
      await deleteReaction(reviewId);
    } else {
      //싫어요가 활성화되지않음-> 클릭시싫어요 post(-1)
      console.log("싫어요 post: body에 -1");
      await createReaction({ reviewId, reactionValue: -1 });
    }
  };
  console.log("likedReviews", likedReviews);

  return (
    <div className="flex gap-x-[10px] items-center">
      <LikeButton
        onClickLikeButton={onClickLikeButton}
        isActive={isLiked}
        likes={review.likes}
      ></LikeButton>
      <DisLikeButton
        onClickDislikeButton={onClickDislikeButton}
        isActive={isDisliked}
        hates={review.hates}
      ></DisLikeButton>
    </div>
  );
}

export default ReactionButtons;
