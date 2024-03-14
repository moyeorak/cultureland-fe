import { Review } from "@/types/Review.type";
import { formatDate } from "@/utils/formatDate.utils";
import Image from "next/image";
import Link from "next/link";

interface NewReviewCardProps {
  review: Review;
}

function NewReviewCard({ review }: NewReviewCardProps) {
  return (
    <Link
      href={`/events/${review.event.id}`}
      className="block hover:-translate-y-2 transition"
    >
      <article className="flex items-start gap-x-5">
        <div className="w-1/3 relative aspect-[3/4] shrink-0">
          <Image
            src={review.event.poster}
            fill
            alt={review.event.title}
            className="object-cover rounded-lg"
            sizes="100%"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-1 gap-y-1">
            <h6 className="font-medium line-clamp-2 leading-tight text-[15px]">
              {review.event.title}
            </h6>
            <address className="text-xs not-italic text-neutral-70 block">
              {review.event.venue.name}
            </address>
            <time className="text-xs block text-neutral-40">
              {formatDate(review.event.startDate)} ~{" "}
              {formatDate(review.event.endDate)}
            </time>
          </div>
          <p className="text-sm">{review.content}</p>
        </div>
      </article>
    </Link>
  );
}

export default NewReviewCard;
