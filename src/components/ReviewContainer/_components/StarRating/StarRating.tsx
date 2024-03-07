import { defaultFullIconPath } from "@/app/(providers)/(root)/events/[eventId]/_components/Rating/Rating";
import StarIcon from "@/app/(providers)/(root)/events/[eventId]/_components/StarIcon";

interface StarRatingProps {
  rate: number;
}

function StarRating({ rate }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      color={index < rate ? "#ffd700" : "#aaa"}
      size={20}
      path={defaultFullIconPath}
    />
  ));

  return <div className="flex">{stars}</div>;
}

export default StarRating;
