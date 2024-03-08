"use client";

import Image from "next/image";

interface LikeButtonProps {
  onClickLikeButton: () => void;
  isActive: boolean;
}

function LikeButton({ onClickLikeButton, isActive }: LikeButtonProps) {
  const count = 5;

  return (
    <button onClick={onClickLikeButton} className="flex gap-x-2">
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
      <span className="text-fs-14 text-neutral-70">{count}</span>
    </button>
  );
}

export default LikeButton;
