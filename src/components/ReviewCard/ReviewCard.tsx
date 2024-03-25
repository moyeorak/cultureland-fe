"use client";

import ReviewModifyModal from "@/app/(providers)/(root)/events/[eventId]/_components/ReviewModifyModal";

import { GetUserData } from "@/api/accounts/users/users.data";
import api from "@/api/index.api";
import AuthInitialized from "@/contexts/auth.context/Authenticated";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationDeleteReview from "@/react-query/reviews/useMutationDeleteReview";
import { Review } from "@/types/Review.type";
import { formatDate } from "@/utils/formatDate.utils";
import { profileImgPrifix } from "@/utils/profileImgPrifix";
import { useProfile } from "@/zustand";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ReactionButtons from "./_components/ReactionButtons";
import StarRating from "./_components/StarRating";

interface ReviewCardProps {
  review: Review;
  eventId?: number;
}

function ReviewCard({ review, eventId }: ReviewCardProps) {
  const modal = useModal();
  const { id } = useProfile();
  const { mutate: deleteReview } = useMutationDeleteReview(eventId || 0);
  const [user, setUser] = useState<GetUserData>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userInfo = await api.users.getUser(review.reviewerId);
        setUser(userInfo);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          return null;
        }
      }
    };
    fetchUser();
  }, [review.reviewerId]);

  let nickname = user?.userProfile.nickname;
  const profileImg = `${user?.userProfile.profileImage}`;
  const defaultProfileImg = `${profileImgPrifix}/cultureland/profile/default_profile.jpeg`;

  if (!nickname) {
    nickname = "탈퇴한 회원";
  }

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
    console.log("삭제");
    deleteReview(review.id);
  };
  const handleClickModifyReview = () => {
    if (!eventId) return null;
    modal.open(<ReviewModifyModal eventId={eventId} reviewId={review.id} />);
  };

  return (
    <div className="h-[265px] min-w-[650px] max-w-[960px] flex items-center px-9 py-7 rounded-lg shadow-primary mb-10  gap-x-12 overflow-hidden">
      {review.image && (
        <div className="w-[208px] h-[208px] min-w-[208px] max-h-[208px] overflow-hidden rounded-lg relative  ">
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
        <div className="flex gap-x-6 items-center">
          <Link
            href={`/accounts/users/${review.reviewerId}`}
            className="w-[160px] overflow-hidden"
          >
            <div className="flex items-center gap-x-3 ">
              <div className="flex relative w-[40px] h-[40px] rounded-full overflow-hidden bg-slate-200 text-neutral-70">
                <Image
                  src={
                    user?.userProfile.profileImage === null
                      ? defaultProfileImg
                      : profileImg
                  }
                  alt={nickname}
                  fill
                  sizes="40px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="font-bold text-fs-16">{nickname.slice(0, 10)}</p>
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
