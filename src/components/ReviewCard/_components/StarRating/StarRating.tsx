import StarIcon from "@/app/(providers)/(root)/events/[eventId]/_components/StarIcon";

interface StarRatingProps {
  rate: number;
}

function StarRating({ rate }: StarRatingProps) {
  const totalStars = 5;
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 === 0 ? 0 : 1; // 반 별의 유무를 결정
  const emptyStars = totalStars - fullStars - halfStar; // 빈 별의 개수 계산

  return (
    <div className="flex gap-x-2">
      {Array.from({ length: fullStars }, (_, index) => (
        <StarIcon key={`full-${index}`} path="Star-fill" size="small" />
      ))}
      {halfStar > 0 && <StarIcon key="half-0" path="Star-half" size="small" />}{" "}
      {Array.from({ length: emptyStars }, (_, index) => (
        <StarIcon
          key={`empty-${index + fullStars + halfStar}`}
          path="star-empty"
          size="small"
        />
      ))}
    </div>
  );
}
export default StarRating;
