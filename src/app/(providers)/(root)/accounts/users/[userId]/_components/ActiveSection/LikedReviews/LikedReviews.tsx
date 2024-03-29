"use client";

import ReviewCardList from "@/components/ReviewCardList";
import useQueryLikedReviews from "@/react-query/reviews/useQueryLikedReviews";
import { useState } from "react";

interface LikedReviewsProps {
  userId: number;
}

function LikedReviews({ userId }: LikedReviewsProps) {
  const [page, setPage] = useState(1);

  const { data: reviews } = useQueryLikedReviews(userId, page);

  if (!reviews) {
    return (
      <div className="text-center text-font-70">
        유저가 좋아요한 리뷰가 없습니다
      </div>
    );
  }

  return (
    <div>
      <ReviewCardList reviews={reviews}></ReviewCardList>
    </div>
  );
}

export default LikedReviews;
