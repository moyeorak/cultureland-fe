import ReviewContainer from "../ReviewCard";

interface ReviewCardListProps {
  reviews: any; //type정의
}

function ReviewCardList({ reviews }: ReviewCardListProps) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <ReviewContainer review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewCardList;
