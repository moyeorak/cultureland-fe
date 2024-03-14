"use client";

import ReviewModifyModal from "@/app/(providers)/(root)/events/[eventId]/_components/ReviewModifyModal";

import Authenticated from "@/contexts/auth.context/Authenticated";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationDeleteReview from "@/react-query/reviews/useMutationDeleteReview";
import { Review } from "@/types/Review.type";
import { formatDate } from "@/utils/formatDate.utils";
import { useAuthStore } from "@/zustand";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import ReactionButtons from "../_components/ReactionButtons";
import StarRating from "../_components/StarRating";

interface ReviewCardProps {
  review: Review;
  eventId?: number;
  small?: boolean;
}

function ReviewGridCard({ review, eventId }: ReviewCardProps) {
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
    <div className=" flex items-start px-5 py-4 rounded-lg shadow-primary mb-10  overflow-hidden min-h-[232px] max-h-[232px]  data-[small=true]:w-[252px] data-[small=true]:max-h-[136px] ">
      <div className="flex flex-col gap-y-3 text-neutral-70 w-full top-0 h-full relative">
        <div className="flex gap-x-6 items-center bg-red-400">
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
            <div className="mt-3">
              <StarRating rate={review.rating} />
            </div>
          </Link>

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

        <div className="flex flex-col gap-y-4">
          <p className=" text-neutral-70 text-fs-14 min-h-[60px] h-[60px] overflow-hidden bg-red-200">
            {review.content.length > 200
              ? `${review.content.substring(0, 200)}...`
              : review.content}
          </p>
          <div className="flex items-center gap-x-[10px]  justify-center bg-red-500">
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
      {review.image && (
        <div className="relative w-[150px] min-w-[150px] min-h-[200px]">
          <Image
            src={`https://yanastudys3.s3.ap-northeast-2.amazonaws.com/${review.image}`}
            alt="poster-img"
            fill
            className="object-cover overflow-hidden rounded-lg"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}

export default ReviewGridCard;
