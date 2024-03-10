"use client";

import Image from "next/image";

interface DislikeButtonProps {
  onClickDislikeButton: () => void;
  isActive: boolean;
  hates: number;
}

function DisLikeButton({
  onClickDislikeButton,
  isActive,
  hates,
}: DislikeButtonProps) {
  const count = 5000;
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

      <span className="text-fs-14 text-neutral-70">{hates}</span>
    </button>
  );
}

export default DisLikeButton;
