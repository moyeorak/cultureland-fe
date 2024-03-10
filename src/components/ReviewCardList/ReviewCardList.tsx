import { Review } from "@/types/Review.type";
import ReviewCard from "../ReviewCard";

interface ReviewCardListProps {
  reviews: Review[];
}

function ReviewCardList({ reviews }: ReviewCardListProps) {
  return (
    <div>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewCardList;
