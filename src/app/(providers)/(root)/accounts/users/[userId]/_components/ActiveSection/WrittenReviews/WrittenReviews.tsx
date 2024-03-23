"use client";

import ReviewCardList from "@/components/ReviewCardList";
import useQueryWrittenReviews from "@/react-query/reviews/useQueryWrittenReviews";
import { useState } from "react";

interface WrittenReviewsProps {
  userId: number;
}

function WrittenReviews({ userId }: WrittenReviewsProps) {
  const [page, setPage] = useState(1);

  const { data: reviews } = useQueryWrittenReviews(userId, page);
  console.log(reviews);

  if (!reviews) {
    return (
      <div className="text-center text-font-70">
        유저가 작성한 리뷰가 없습니다
      </div>
    );
  }

  return (
    <div>
      <ReviewCardList reviews={reviews} userCard></ReviewCardList>
    </div>
  );
}

export default WrittenReviews;
