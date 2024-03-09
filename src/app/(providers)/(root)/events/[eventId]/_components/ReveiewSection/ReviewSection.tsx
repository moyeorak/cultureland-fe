import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "../ReviewForm";

interface ReviewSectionProps {
  eventId: number;
}
function ReviewSection({ eventId }: ReviewSectionProps) {
  const count = 15;
  return (
    <div>
      {/* <ReviewCardList /> */}
      <ReviewCard />
      <ReviewForm eventId={eventId} />
    </div>
  );
}

export default ReviewSection;
