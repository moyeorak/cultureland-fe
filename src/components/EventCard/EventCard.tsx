import { Event } from "@/types/Event.type";
import { formatDate } from "@/utils/formatDate.utils";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  const rating = Math.floor(event.avgRating) || 1;

  return (
    <Link href={`/events/${event.id}`} className="block">
      <article className="border flex flex-col w-full rounded">
        {/* 이미지 */}
        <section className="relative aspect-[3/4]">
          <Image
            src={event.poster}
            fill
            alt={event.title}
            className="object-cover rounded-t"
            priority={false}
            sizes="100%"
          />
        </section>

        {/* 콘텐츠 */}
        <section className="py-3 px-2.5 border-t">
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

          <h6 className="text-[15px] leading-tight mb-2 h-9 overflow-hidden line-clamp-2">
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
