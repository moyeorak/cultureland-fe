import api from "@/api/index.api";
import Heading from "@/components/Heading/Heading";
import ReviewCardList from "@/components/ReviewCardList";

async function BestReviews() {
  const bestReviews = await api.reviews.getFamousReviews();
  const reviews = bestReviews?.slice(0, 4);

  return (
    <div>
      <Heading label="베스트 리뷰" position="start" />
      <ReviewCardList
        reviews={reviews}
        isGrid
        eventId={reviews[0]?.eventId}
      ></ReviewCardList>
    </div>
  );
}

export default BestReviews;
