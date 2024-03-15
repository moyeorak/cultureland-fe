"use client";

import ReviewCardList from "@/components/ReviewCardList";
import useQueryWrittenReviews from "@/react-query/reviews/useQueryWrittenReviews";
import { useState } from "react";
import NoneReviews from "../NoneReviews";

interface WrittenReviewsProps {
  userId: number;
}

function WrittenReviews({ userId }: WrittenReviewsProps) {
  const [page, setPage] = useState(1);

  const { data: reviews } = useQueryWrittenReviews(userId, page);

  if (reviews?.length === 0 || !reviews) {
    return <NoneReviews reviewsType="written" />;
  }

  return (
    <div>
      <ReviewCardList reviews={reviews} small></ReviewCardList>
    </div>
  );
}

export default WrittenReviews;
