import ReviewForm from "../ReviewForm";

interface ReviewSectionProps {
  eventId: number;
}
function ReviewSection({ eventId }: ReviewSectionProps) {
  const count = 15;
  return (
    <div>
      <ReviewForm eventId={eventId} />
    </div>
  );
}

export default ReviewSection;
