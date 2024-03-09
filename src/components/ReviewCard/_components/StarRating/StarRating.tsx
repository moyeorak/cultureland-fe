import StarIcon from "@/app/(providers)/(root)/events/[eventId]/_components/StarIcon";

interface StarRatingProps {
  rate: number;
}

function StarRating({ rate }: StarRatingProps) {
  const totalStars = 5;
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 === 0 ? 0 : 1;
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <div className="flex">
      {Array.from({ length: fullStars }, (_, index) => (
        <StarIcon key={`full-${index}`} path="Star-fill" />
      ))}
      {halfStar > 0 && <StarIcon key="half-0" path="Star-half" />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <StarIcon
          key={`empty-${index + fullStars + halfStar}`}
          path="Star-empty"
        />
      ))}
    </div>
  );
}
export default StarRating;
