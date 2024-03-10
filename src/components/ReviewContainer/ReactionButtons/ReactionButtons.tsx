"use client";

import { useState } from "react";
import DisLikeButton from "./DislikeButton/DislikeButton";
import LikeButton from "./LikeButton";

function ReactionButtons() {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  // const { mutateAsync: deleteReaction } = useMutationDeleteReaction(reviewId);
  // const {}=useMutationCreateReaction(reviewId)

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
    <div className="flex gap-x-[10px]">
      <LikeButton
        onClickLikeButton={onClickLikeButton}
        isActive={isLiked}
      ></LikeButton>
      <DisLikeButton
        onClickDislikeButton={onClickDislikeButton}
        isActive={isDisliked}
      ></DisLikeButton>
    </div>
  );
}

export default ReactionButtons;
