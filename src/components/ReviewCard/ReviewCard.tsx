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
import { Authenticated } from '@/contexts/auth.context/auth.context';

interface ReviewCardProps {
  review: Review;
  eventId: number;
  type?: "detail" | "user" | "main";
}

function ReviewCard({ review, eventId }: ReviewCardProps) {
  const modal = useModal();
  const { userInfo } = useAuthStore();
  const userId = userInfo ? Number(userInfo.userId) : "사용자 정보 없음";
  const { mutate: deleteReview } = useMutationDeleteReview();

  const userProfileImg = "";

  const isMyReview = review.reviewerId === Number(userId);

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
    deleteReview(review.id);
  };
  const handleClickModifyReview = () => {
    modal.open(<ReviewModifyModal eventId={eventId} reviewId={review.id} />);
  };

  return (
    <div className="h-[265px] flex items-center px-9 py-7 rounded-lg shadow-primary mb-10   gap-x-12 overflow-hidden">
      {review.image && (
        <div className="w-[208px] h-[208px] min-w-[208px] max-h-[208px] overflow-hidden rounded-lg">
          <Image
            src={`https://yanastudys3.s3.ap-northeast-2.amazonaws.com/${review.image}`}
            alt="poster-img"
            width={208}
            height={208}
            className="object-cover overflow-hidden rounded-lg"
            unoptimized
          />
        </div>
      )}
      <div className="flex flex-col gap-y-4 text-neutral-70 w-full">
        <div className="flex gap-x-6 items-center ">
          <Link
            href={`/accounts/users/${userId}`}
            className="w-[180px] overflow-hidden"
          >
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
              <p className="text-fs-16 font-bold">
                {review.reviewerId.toString().slice(0, 10)}
              </p>
            </div>
          </Link>
          <div>
            <StarRating rate={review.rating} />
          </div>
          <div className="flex ml-auto">
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
        </div>

        <p className="pt-4 text-neutral-70 text-fs-14 h-[105px] overflow-hidden">
          {review.content}
        </p>
        <div className="flex items-center gap-x-[10px] justify-center">
          <p className="text-fs-12 ml-auto">{formatDate(review.createdAt)}</p>

          <Authenticated>
            <ReactionButtons
              review={review}
              isLiked={isAlreadyLiked}
              isDisliked={isAlreadyDisliked}
            />
          </Authenticated>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
