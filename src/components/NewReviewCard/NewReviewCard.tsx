"use client";

import { Review } from "@/types/Review.type";
import { formatDate } from "@/utils/formatDate.utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

interface NewReviewCardProps {
  review: Review;
}

function NewReviewCard({ review }: NewReviewCardProps) {
  const router = useRouter();

  const handleClickUser: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    router.push(`/accounts/users/${review.reviewerId}`);
  };

  return (
    <Link
      href={`/events/${review.event.id}`}
      className="block hover:-translate-y-1 md:hover:-translate-y-2 transition"
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
        <div className="grid grid-cols-1 gap-y-4">
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

          <div className="grid grid-cols-1 gap-y-1.5">
            <div className="flex items-center justify-between gap-x-2">
              <button
                className="flex gap-x-2 items-center"
                onClick={handleClickUser}
              >
                {review.reviewer.userProfile.profileImage && (
                  <div className="w-6 h-6 relative">
                    <Image
                      fill
                      alt={review.reviewer.userProfile.nickname}
                      src={review.reviewer.userProfile.profileImage}
                      className="rounded-full"
                    />
                  </div>
                )}

                <div className="text-sm text-neutral-90 font-semibold">
                  {review.reviewer.userProfile.nickname}
                </div>
              </button>

              <div className="flex gap-x-1.5 items-center leading-none ml-auto">
                <div className="text-[10px] flex gap-x-0.5 items-center">
                  {Array(review.rating)
                    .fill(true)
                    .map((_, index) => (
                      <span key={index}>⭐️</span>
                    ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-90">{review.content}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default NewReviewCard;
