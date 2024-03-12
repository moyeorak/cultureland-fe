import { Review } from "@/types/Review.type";
import ReviewCard from "../ReviewCard";

interface ReviewCardListProps {
  reviews: Review[];
  eventId: number;
}

function ReviewCardList({ reviews, eventId }: ReviewCardListProps) {
  return (
    <div>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} eventId={eventId} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewCardList;
