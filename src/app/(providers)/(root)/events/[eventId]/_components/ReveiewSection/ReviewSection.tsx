import ReviewCardList from "@/components/ReviewCardList";
import ReviewForm from "../ReviewForm";

interface ReviewSectionProps {
  eventId: number;
}

//dummy
const reviews = [
  {
    evnetId: 4,
    reviewerId: 3,
    eventId: 1,
    image: "cultureland/review/1709992190992-3TIzPREo4h6qrp2Bn0oIm.png",
    rating: 3,
    content: "리뷰 1! 작성자:example",
    createdAt: "2024-03-09T13:49:51.259Z",
    isVerified: true,
    reviewReactions: [
      {
        userId: 12,
        reviewId: 4,
        reactionValue: 1,
      },
      {
        userId: 6,
        reviewId: 4,
        reactionValue: 1,
      },
      {
        userId: 7,
        reviewId: 4,
        reactionValue: 1,
      },
      {
        userId: 10,
        reviewId: 4,
        reactionValue: 1,
      },
    ],
    likes: 4,
    hates: 0,
  },
  {
    id: 11,
    reviewerId: 12,
    eventId: 1,
    image: "cultureland/review/1709992296560-CXhreLIaa5lSCaPFScMNe.png",
    rating: 3,
    content: "리뷰 1! 작성자:example456",
    createdAt: "2024-03-09T13:51:36.691Z",
    isVerified: false,
    reviewReactions: [],
    likes: 0,
    hates: 0,
  },
];

function ReviewSection({ eventId }: ReviewSectionProps) {
  // const [reviews, setReviews] = useState<Review[]>([]);

  // useEffect(() => {
  //   async function fetchReviews() {
  //     const response = await api.reviews.getFamousReviews(); //api 수정해야함
  //     console.log("response", response);
  //     setReviews(response);
  //   }

  //   fetchReviews();
  // }, [eventId]);
  // console.log("eventId", eventId);
  // console.log("reviews", reviews);

  return (
    <div>
      <ReviewCardList reviews={reviews} />
      <ReviewForm eventId={eventId} />
    </div>
  );
}

export default ReviewSection;
