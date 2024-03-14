import api from "@/api/index.api";
import NewReviewCard from "@/components/NewReviewCard";

async function BestReviews() {
  const reviews = await api.reviews.getFamousReviews();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
      {reviews.map((review) => (
        <NewReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default BestReviews;
