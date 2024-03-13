"use client";

import ReviewCardList from "@/components/ReviewCardList";
import useQueryWrittenReviews from "@/react-query/reviews/useQueryWrittenReviews";
import { useState } from "react";

interface WrittenReviewsProps {
  userId: number;
}

function WrittenReviews({ userId }: WrittenReviewsProps) {
  const [page, setPage] = useState(1);
  //api
  console.log("userId", userId);

  const { data: reviews } = useQueryWrittenReviews(userId, page);

  if (!reviews) {
    return <div>유저가 작성한 리뷰가 없습니다</div>;
  }

  return (
    <div>
      <ReviewCardList reviews={reviews} small></ReviewCardList>
    </div>
  );
}

export default WrittenReviews;