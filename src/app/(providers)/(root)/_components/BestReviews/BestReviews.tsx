import Heading from "@/components/Heading/Heading";

async function BestReviews() {
  // const bestReviews = await api.reviews.getFamousReviews();
  // const reviews = bestReviews?.slice(0, 4);

  return (
    <div>
      <Heading label="베스트 리뷰" position="start" />
      {/* {bestReviews ? (
        <ReviewCardList
          reviews={reviews}
          isGrid
          eventId={reviews[0]?.eventId}
        ></ReviewCardList>
      ) : (
        <div>베스트 리뷰가 없습니다.</div>
      )} */}
    </div>
  );
}

export default BestReviews;
