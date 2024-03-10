"use client";

import { Review } from "@/types/Review.type";
import { formatDate } from "@/utils/formatDate.utils";
import Image from "next/image";
import ReactionButtons from "../ReviewContainer/ReactionButtons";
import StarRating from "./_components/StarRating";

interface ReviewCardProps {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
  const myId = 12; //전역상태로 가지고 있기

  const isMyReview = review.reviewerId === myId;

  if (isMyReview) {
    //내글이면 전역으로 내가 쓴 리뷰에 저장하기
    console.log("저장");
  }

  console.log(review, "review");
  console.log(isMyReview, "isMyReview");

  //내가 좋아요한 상태인지
  //내가 싫어요한 상태인지 판단을 여기서 해서 내려주자
  const isAlreadyLiked =
    review.reviewReactions?.some(
      (reviewReaction) =>
        reviewReaction.userId === myId && reviewReaction.reactionValue === 1
    ) ?? false;

  const isAlreadyDisliked =
    review.reviewReactions?.some(
      (reviewReaction) =>
        reviewReaction.userId === myId && reviewReaction.reactionValue === -1
    ) ?? false;

  // console.log("isAlreadyLiked", isAlreadyLiked);
  // console.log("isAlreadyDisliked", isAlreadyDisliked);

  const handleClickDeleteReview = () => {
    console.log("삭제");
  };
  const handleClickModifyReview = () => {
    console.log("수정");
  };

  return (
    <div className="h-[265px]flex items-center px-8 py-9 rounded-lg shadow-primary mb-10">
      <div className="flex gap-x-12 w-full">
        <div className="relative w-[208px] h-[200px] overflow-hidden rounded-lg">
          <Image
            src={"/images/poster.jpeg"}
            alt="event-poster"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-y-4 text-neutral-70 w-full">
          <div className="flex">
            <StarRating rate={review.rating} />
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

          <div className="flex gap-x-3 items-center">
            <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden text-neutral-70">
              <Image
                src={"/images/poster.jpeg"}
                alt="event-poster"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-fs-16 font-bold">{review.reviewerId}</p>
          </div>
          <p className="pt-4 text-neutral-70 text-fs-14">{review.content}</p>
          <div className="flex items-center gap-x-[10px] justify-center">
            <p className="text-fs-12 ml-auto">{formatDate(review.createdAt)}</p>
            <ReactionButtons
              likes={review.likes}
              hates={review.hates}
              reviewId={review.id}
              isAlreadyLiked={isAlreadyLiked}
              isAlreadyDisliked={isAlreadyDisliked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
