"use client";

import Image from "next/image";

interface LikeButtonProps {
  onClickLikeButton: () => void;
  isActive: boolean;
  likes: number;
}

function LikeButton({ onClickLikeButton, isActive, likes }: LikeButtonProps) {
  return (
    <button onClick={onClickLikeButton} className="flex gap-x-2 items-center">
      {isActive ? (
        <Image
          src={"/utils/icons/heart-purple.png"}
          alt="review-like-clicked"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src={"/utils/icons/heart-basic.png"}
          alt="review-like"
          width={24}
          height={24}
        />
      )}
      <span className="text-fs-14 text-neutral-70">{likes}</span>
    </button>
  );
}

export default LikeButton;
