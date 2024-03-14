import { formatDate } from "@/utils/formatDate.utils";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    poster: string;
    avgRating: number;
    startDate: string;
    endDate: string;
    venue: {
      name: string;
    };
  };
}

function EventCard({ event }: EventCardProps) {
  const rating = Math.floor(event.avgRating) || 1;

  return (
    <Link
      href={`/events/${event.id}`}
      className="block hover:-translate-y-2 transition"
    >
      <article className="flex flex-col w-full">
        {/* 이미지 */}
        <section className="relative aspect-[3/4]">
          <Image
            src={event.poster}
            fill
            alt={event.title}
            className="object-cover rounded-xl"
            priority
            sizes="100%"
          />
        </section>

        {/* 콘텐츠 */}
        <section className="py-3 px-2.5">
          <div className="flex gap-x-1.5 items-center leading-none mb-2">
            <div className="text-[10px] flex gap-x-0.5 items-center">
              {Array(rating)
                .fill(true)
                .map((_, index) => (
                  <span key={index}>⭐️</span>
                ))}
            </div>
            <span className="text-xs text-neutral-70 font-medium">
              ({rating.toFixed(1)})
            </span>
          </div>

          <h6 className="text-[15px] leading-tight mb-2 overflow-hidden line-clamp-2 font-medium">
            {event.title}
          </h6>

          <address className="text-xs not-italic text-neutral-70 block">
            {event.venue.name}
          </address>

          <time className="text-xs block text-neutral-40">
            {formatDate(event.startDate)} ~ {formatDate(event.endDate)}
          </time>
        </section>
      </article>
    </Link>
  );
}

export default EventCard;
