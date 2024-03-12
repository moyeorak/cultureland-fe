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

  const handleSelectOption = (selectedOption: string) => {
    switch (selectedOption) {
      case "좋아요순":
        setOrderBy("likes");
        break;
      case "싫어요순":
        setOrderBy("hates");
        break;
      case "최신순":
        setOrderBy("recent");
        break;
      default:
        setOrderBy("recent");
    }
    setPage(1);
  };

  console.log("eventId", eventId);
  console.log("orderBy", orderBy);
  console.log("page", page);

  const { data: reviews, isLoading } = useQueryReviewsOfEvent(
    eventId,
    true,
    page,
    orderBy
  );
  console.log("reviews", reviews);

  return (
    <div>
      <div className="ml-auto">
        <SelectOption type="review" orderBy={orderBy} setOrderBy={setOrderBy} />
      </div>

      <ReviewCardList reviews={reviews || []} />
      <ReviewForm eventId={eventId} />
    </div>
  );
}

export default ReviewSection;
