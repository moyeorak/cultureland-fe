import api from "@/api/index.api";
import ReviewCardList from "@/components/ReviewCardList";
import { Review } from "@/types/Review.type";
import { useEffect, useState } from "react";
import ReviewForm from "../ReviewForm";

interface ReviewSectionProps {
  eventId: number;
}

function ReviewSection({ eventId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await api.reviews.getFamousReviews(); //api 수정해야함
      console.log("response", response);
      setReviews(response);
    }

    fetchReviews();
  }, [eventId]);
  console.log("eventId", eventId);
  console.log("reviews", reviews);

  return (
    <div>
      <ReviewCardList reviews={reviews} />
      <ReviewForm eventId={eventId} />
    </div>
  );
}

export default ReviewSection;
