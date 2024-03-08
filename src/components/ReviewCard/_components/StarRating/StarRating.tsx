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
        <div>
          <StarIcon path="/utils/icons/Star2.png"></StarIcon>
        </div>
      ))}
    </div>
  );
}

export default StarRating;
