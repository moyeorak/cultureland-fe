"use client";

import ReviewModifyModal from "@/app/(providers)/(root)/events/[eventId]/_components/ReviewModifyModal";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationDeleteReview from "@/react-query/reviews/useMutationDeleteReview";
import { Review } from "@/types/Review.type";
import { formatDate } from "@/utils/formatDate.utils";
import { useAuthStore } from "@/zustand";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import ReactionButtons from "./_components/ReactionButtons";
import StarRating from "./_components/StarRating";

interface ReviewCardProps {
  review: Review;
  eventId: number;
}

function ReviewCard({ review, eventId }: ReviewCardProps) {
  const modal = useModal();
  const { userInfo } = useAuthStore();
  const userId = userInfo ? Number(userInfo.userId) : "사용자 정보 없음";
  const { mutate: deleteReview } = useMutationDeleteReview();

  const userProfileImg = "";

  const isMyReview = review.reviewerId === Number(userId);

  //내가 좋아요한 상태인지
  //내가 싫어요한 상태인지 판단을 여기서 해서 내려주자

  const isAlreadyLiked = useMemo(
    () =>
      review.reviewReactions?.some(
        (reviewReaction) =>
          reviewReaction.userId === userId && reviewReaction.reactionValue === 1
      ) ?? false,
    [review.reviewReactions, userId]
  );

  const isAlreadyDisliked = useMemo(
    () =>
      review.reviewReactions?.some(
        (reviewReaction) =>
          reviewReaction.userId === userId &&
          reviewReaction.reactionValue === -1
      ) ?? false,
    [review.reviewReactions, userId]
  );

  useEffect(() => {
    if (isAlreadyLiked) {
    }
  }, [review, isAlreadyLiked]);

  const handleClickDeleteReview = () => {
    console.log("삭제");
    deleteReview(review.id);
  };
  const handleClickModifyReview = () => {
    modal.open(<ReviewModifyModal eventId={eventId} reviewId={review.id} />);
  };

  return (
    <div className="h-[265px]flex items-center px-8 py-9 rounded-lg shadow-primary mb-10">
      <div className="flex gap-x-12 w-full">
        <div className="flex flex-col gap-y-4 text-neutral-70 w-full">
          <div className="flex">
            {isMyReview && (
              <div className="ml-auto flex gap-x-2">
                <button
                  className="text-fs-12"
                  onClick={handleClickModifyReview}
                >
                  수정
                </button>
                <button
                  className="text-fs-12"
                  onClick={handleClickDeleteReview}
                >
                  삭제
                </button>
              </div>
            )}
          </div>
          <Link href={`/accounts/users/${userId}`}>
            <div className="flex gap-x-3 items-center">
              <div className="flex relative w-[40px] h-[40px] rounded-full overflow-hidden text-neutral-70">
                <Image
                  src={"/images/poster.jpeg"}
                  alt="user-picture"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="text-fs-16 font-bold">{review.reviewerId}</p>
            </div>
          </Link>
          <StarRating rate={review.rating} />
          <p className="pt-4 text-neutral-70 text-fs-14">{review.content}</p>
          <div className="flex items-center gap-x-[10px] justify-center">
            <p className="text-fs-12 ml-auto">{formatDate(review.createdAt)}</p>
            <ReactionButtons
              review={review}
              isAlreadyLiked={isAlreadyLiked}
              isAlreadyDisliked={isAlreadyDisliked}
            />
          </div>
        </div>
        <div className="relative w-[208px] h-[200px] overflow-hidden rounded-lg">
          <Image
            src={"/images/poster.jpeg"}
            alt="poster-img"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
