"use client";

import useMutationDeleteReaction from "@/react-query/reviews/useMutationDeleteReaction";
import { useState } from "react";
import DisLikeButton from "./DislikeButton/DislikeButton";
import LikeButton from "./LikeButton";

interface ReactionButtonsProps {
  likes: number;
  hates: number;
  reviewId: number;
  isAlreadyLiked: boolean;
  isAlreadyDisliked: boolean;
}

function ReactionButtons({
  likes,
  hates,
  reviewId,
  isAlreadyLiked,
  isAlreadyDisliked,
}: ReactionButtonsProps) {
  const [isLiked, setIsLiked] = useState(isAlreadyLiked);
  const [isDisliked, setIsDisliked] = useState(isAlreadyDisliked);
  //내가 좋아요를 누른 상태면, 불이 켜진다.
  //userId로

  const { mutateAsync: deleteReaction } = useMutationDeleteReaction(reviewId);
  // const {}=useMutationCreateReaction(reviewId);

  const onClickLikeButton = () => {
    if (!isDisliked) {
      setIsLiked((prev) => !prev);
    } else {
      alert("싫어요가 이미 선택되었습니다");
    }

    if (isLiked) {
      //좋아요가 눌린상태 -> 클릭시 취소해야함 (delete)

      console.log("delete 보내기");
    } else {
      //좋아요가 활성화되지않음-> 클릭시싫어요 post(-1)
      console.log("좋아요 post: body에 +1");
    }
  };

  const onClickDislikeButton = () => {
    if (!isLiked) {
      setIsDisliked((prev) => !prev);
    } else {
      alert("좋아요가 이미 선택되었습니다.");
    }

    if (isDisliked) {
      //싫어요가 눌린상태 -> 클릭시 취소해야함 (delete)
      console.log("delete");
    } else {
      //싫어요가 활성화되지않음-> 클릭시싫어요 post(-1)
      console.log("싫어요 post: body에 -1");
    }
  };

  return (
    <div className="flex gap-x-[10px] items-center">
      <LikeButton
        onClickLikeButton={onClickLikeButton}
        isActive={isLiked}
        likes={likes}
      ></LikeButton>
      <DisLikeButton
        onClickDislikeButton={onClickDislikeButton}
        isActive={isDisliked}
        hates={hates}
      ></DisLikeButton>
    </div>
  );
}

export default ReactionButtons;
