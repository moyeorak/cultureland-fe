import { Review } from "@/types/Review.type";
import ReviewCard from "../ReviewCard";
import ReviewGridCard from "../ReviewCard/ReviewGridCard";

interface ReviewCardListProps {
  reviews: Review[];
  eventId?: number;
  isGrid?: boolean;
  small?: boolean;
}

function ReviewCardList({ reviews, eventId, isGrid }: ReviewCardListProps) {
  return (
    <div>
      <ul
        className="grid data-[grid=true]:grid-cols-2 gap-x-9 "
        data-grid={isGrid}
      >
        {reviews?.map((review) => (
          <li key={review.id}>
            {isGrid ? (
              <ReviewGridCard review={review} small />
            ) : (
              <ReviewCard review={review} eventId={eventId} small />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewCardList;
