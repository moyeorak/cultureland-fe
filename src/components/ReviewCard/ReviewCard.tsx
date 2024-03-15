"use client";

import ReviewModifyModal from "@/app/(providers)/(root)/events/[eventId]/_components/ReviewModifyModal";

import AuthInitialized from "@/contexts/auth.context/Authenticated";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationDeleteReview from "@/react-query/reviews/useMutationDeleteReview";
import { Review } from "@/types/Review.type";
import { formatDate } from "@/utils/formatDate.utils";
import { useProfile } from "@/zustand";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import ReactionButtons from "./_components/ReactionButtons";
import StarRating from "./_components/StarRating";

interface ReviewCardProps {
  review: Review;
  eventId?: number;
  small?: boolean;
}

function ReviewCard({ review, eventId }: ReviewCardProps) {
  const modal = useModal();
  const { id } = useProfile();
  const { mutate: deleteReview } = useMutationDeleteReview();

  const isMyReview = review.reviewerId === Number(id);

  const isAlreadyLiked = useMemo(
    () =>
      review.reviewReactions?.some(
        (reviewReaction) =>
          reviewReaction.userId === id && reviewReaction.reactionValue === 1
      ) ?? false,
    [review.reviewReactions, id]
  );

  const isAlreadyDisliked = useMemo(
    () =>
      review.reviewReactions?.some(
        (reviewReaction) =>
          reviewReaction.userId === id && reviewReaction.reactionValue === -1
      ) ?? false,
    [review.reviewReactions, id]
  );

  useEffect(() => {
    if (isAlreadyLiked) {
    }
  }, [review, isAlreadyLiked]);

  const handleClickDeleteReview = () => {
    deleteReview(review.id);
  };
  const handleClickModifyReview = () => {
    if (!eventId) return null;
    modal.open(<ReviewModifyModal eventId={eventId} reviewId={review.id} />);
  };

  return (
    <div
      className="h-[265px] min-w-[650px] max-w-[960px] data-[small=true]:h-[240px] data-[small=true]:mb-9 flex items-center px-9 py-7 rounded-lg shadow-primary mb-10 data-[small=true]:gap-x-6  gap-x-12 overflow-hidden"
      data-small
    >
      {review.image && (
        <div
          className="w-[208px] h-[208px] min-w-[208px] max-h-[208px] overflow-hidden rounded-lg relative  data-[small=true]:min-w-[180px] data-[small=true]:max-h-[180px]"
          data-small
        >
          <Image
            src={`https://yanastudys3.s3.ap-northeast-2.amazonaws.com/${review.image}`}
            alt="poster-img"
            fill
            className="object-cover overflow-hidden rounded-lg"
            unoptimized
          />
        </div>
      )}
      <div className="flex flex-col w-full gap-y-4 text-neutral-70">
        <div
          className="flex gap-x-6 items-center data-[small=true]:gap-x-3"
          data-small
        >
          <Link
            href={`/accounts/users/${id}`}
            className="w-[160px] overflow-hidden"
          >
            <div className="flex items-center gap-x-3 ">
              <div className="flex relative w-[40px] h-[40px] rounded-full overflow-hidden bg-slate-200 text-neutral-70">
                {/* <Image
                  src={`https://yanastudys3.s3.ap-northeast-2.amazonaws.com/${userProfileImg}`}
                  alt="user-picture"
                  fill
                  className="object-cover"
                  unoptimized
                /> */}
              </div>
              <p className="font-bold text-fs-16">
                {/* {user.nickname?.toString().slice(0, 10)} */}
                유저 123
              </p>
            </div>
          </Link>
          <div>
            <StarRating rate={review.rating} />
          </div>
          <div className="flex ml-auto">
            {isMyReview && (
              <div className="flex ml-auto gap-x-2">
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

        <p className="pt-4 text-neutral-70 text-fs-14 h-[105px] w-9/12 overflow-hidden ">
          {review.content}
        </p>
        <div className="flex items-center gap-x-[10px] justify-center">
          <p className="text-fs-12 ml-auto">{formatDate(review.createdAt)}</p>
          <AuthInitialized>
            <ReactionButtons
              review={review}
              isLiked={isAlreadyLiked}
              isDisliked={isAlreadyDisliked}
            />
          </AuthInitialized>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
