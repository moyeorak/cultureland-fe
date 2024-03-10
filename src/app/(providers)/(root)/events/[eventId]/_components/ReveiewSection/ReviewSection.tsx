import ReviewCardList from "@/components/ReviewCardList";
import ReviewForm from "../ReviewForm";

interface ReviewSectionProps {
  eventId: number;
}

//dummy
const reviews = [
  {
    id: 1,
    reviewerId: 3,
    eventId: 1,
    image: "cultureland/review/1709992190992-3TIzPREo4h6qrp2Bn0oIm.png",
    rating: 1.5,
    content: "리뷰 1! 작성자:example",
    createdAt: "2024-03-09T13:49:51.259Z",
    isVerified: true,
    reviewReactions: [
      {
        userId: 12,
        reviewId: 4,
        reactionValue: -1,
      },
      {
        userId: 6,
        reviewId: 4,
        reactionValue: -1,
      },
      {
        userId: 7,
        reviewId: 4,
        reactionValue: 1,
      },
      {
        userId: 10,
        reviewId: 4,
        reactionValue: -1,
      },
    ],
    likes: 4,
    hates: 0,
  },
  {
    id: 2,
    reviewerId: 12,
    eventId: 1,
    image: "cultureland/review/1709992296560-CXhreLIaa5lSCaPFScMNe.png",
    rating: 2.5,
    content: "리뷰 1! 작성자:example456",
    createdAt: "2024-03-09T13:51:36.691Z",
    isVerified: false,
    reviewReactions: [
      {
        userId: 5,
        reviewId: 4,
        reactionValue: 1,
      },
      {
        userId: 12,
        reviewId: 4,
        reactionValue: 1,
      },
    ],
    likes: 2,
    hates: 0,
  },
  {
    id: 3,
    reviewerId: 12,
    eventId: 1,
    image: "cultureland/review/1709992296560-CXhreLIaa5lSCaPFScMNe.png",
    rating: 2.5,
    content: "리뷰 1! 작성자:example456",
    createdAt: "2024-03-09T13:51:36.691Z",
    isVerified: false,
    reviewReactions: [
      {
        userId: 5,
        reviewId: 3,
        reactionValue: 1,
      },
      {
        userId: 3,
        reviewId: 3,
        reactionValue: -1,
      },
    ],
    likes: 1,
    hates: 1,
  },
  {
    id: 4,
    reviewerId: 19,
    eventId: 1,
    image: "cultureland/review/1709992296560-CXhreLIaa5lSCaPFScMNe.png",
    rating: 2.5,
    content: "리뷰 1! 작성자:example456",
    createdAt: "2024-03-09T13:51:36.691Z",
    isVerified: false,
    reviewReactions: [
      {
        userId: 12,
        reviewId: 3,
        reactionValue: 1,
      },
      {
        userId: 3,
        reviewId: 3,
        reactionValue: -1,
      },
    ],
    likes: 1,
    hates: 1,
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

  // const { data: reviews, isLoading } = useQueryReviewsOfEvent(eventId);

  return (
    <div>
      <ReviewCardList reviews={reviews} />
      <ReviewForm eventId={eventId} />
    </div>
  );
}

export default ReviewSection;
