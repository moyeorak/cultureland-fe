import { Review } from "@/types/Review.type";
import { formatDate } from "@/utils/formatDate.utils";
import Image from "next/image";
import StarRating from "./_components/StarRating";

interface ReviewCardProps {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="h-[265px]flex items-center px-8 py-9 rounded-lg shadow-primary mb-10">
      <div className="flex gap-x-12 w-full">
        <div className="relative w-[208px] h-[200px] overflow-hidden rounded-lg">
          <Image
            src={"/images/poster.jpeg"}
            alt="event-poster"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-y-4 text-neutral-70 w-full">
          <div className="flex">
            <StarRating rate={2.2} />
            <span className="ml-auto text-fs-12">수정, 삭제</span>
          </div>

          <div className="flex gap-x-3 items-center">
            <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden text-neutral-70">
              <Image
                src={"/images/poster.jpeg"}
                alt="event-poster"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-fs-16 font-bold">{review.reviewerId}</p>
          </div>
          <p className="pt-4 text-neutral-70 text-fs-14">{review.content}</p>
          <p className="text-fs-12 ml-auto">{formatDate(review.createdAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;