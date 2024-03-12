"use client";

import Image from "next/image";

interface DislikeButtonProps {
  onClickDislikeButton: () => void;
  isActive: boolean;
  count: number;
}

function DisLikeButton({
  onClickDislikeButton,
  isActive,
  count,
}: DislikeButtonProps) {
  return (
    <button
      onClick={onClickDislikeButton}
      className="flex gap-x-2 items-center"
    >
      {isActive ? (
        <Image
          src={"/utils/icons/heart-break-red.png"}
          alt="review-dislike-clicked"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src={"/utils/icons/heart-break.png"}
          alt="review-dislike"
          width={24}
          height={24}
        />
      )}

      <span className="text-fs-14 text-neutral-70">{count}</span>
    </button>
  );
}

export default DisLikeButton;
