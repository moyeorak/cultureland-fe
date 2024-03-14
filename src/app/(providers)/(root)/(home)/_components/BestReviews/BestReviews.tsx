import api from "@/api/index.api";
import NewReviewCard from "@/components/NewReviewCard";

async function BestReviews() {
  const reviews = await api.reviews.getFamousReviews();

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-7">
      {reviews.map((review) => (
        <NewReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default BestReviews;
