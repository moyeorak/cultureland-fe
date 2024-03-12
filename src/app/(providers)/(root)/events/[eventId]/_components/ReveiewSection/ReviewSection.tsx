"use client";

import ReviewCardList from "@/components/ReviewCardList";
import SelectOption from "@/components/SelectOption";
import useQueryReviewsOfEvent from "@/react-query/reviews/useQueryReviewsOfEvent";
import { useState } from "react";
import ReviewForm from "../ReviewForm";

interface ReviewSectionProps {
  eventId: number;
}

function ReviewSection({ eventId }: ReviewSectionProps) {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState<"likes" | "hates" | "recent">(
    "recent"
  );

  const { data: reviews } = useQueryReviewsOfEvent(
    eventId,
    true,
    page,
    orderBy
  );

  return (
    <div>
      <div className="flex justify-end">
        <SelectOption type="review" orderBy={orderBy} setOrderBy={setOrderBy} />
      </div>

      <ReviewCardList reviews={reviews || []} eventId={eventId} />
      <ReviewForm eventId={eventId} />
    </div>
  );
}

export default ReviewSection;
