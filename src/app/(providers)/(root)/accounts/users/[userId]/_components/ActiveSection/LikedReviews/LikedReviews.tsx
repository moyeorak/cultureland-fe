"use client";

import ReviewCardList from "@/components/ReviewCardList";
import useQueryLikedReviews from "@/react-query/reviews/useQueryLikedReviews";
import { useState } from "react";
import NoneReviews from "../NoneReviews";

interface LikedReviewsProps {
  userId: number;
}

function LikedReviews({ userId }: LikedReviewsProps) {
  const [page, setPage] = useState(1);

  const { data: reviews } = useQueryLikedReviews(userId, page);

  if (reviews?.length === 0 || !reviews) {
    return <NoneReviews reviewsType="liked" />;
  }

  return (
    <div>
      <ReviewCardList reviews={reviews} small></ReviewCardList>
    </div>
  );
}

export default LikedReviews;
