import { Review } from "@/types/Review.type";
import ReviewCard from "../ReviewCard";
import UserReviewCard from "../ReviewCard/UserReviewCard";

interface ReviewCardListProps {
  reviews: Review[];
  eventId?: number;
  userCard?: boolean;
}

function ReviewCardList({ reviews, eventId, userCard }: ReviewCardListProps) {
  return (
    <div>
      <ul className="grid data-[grid=true]:grid-cols-2 gap-x-9 ">
        {reviews?.map((review) => (
          <li key={review.id}>
            {userCard ? (
              <UserReviewCard review={review} />
            ) : (
              <ReviewCard review={review} eventId={eventId} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewCardList;
