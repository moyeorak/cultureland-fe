import { KakaoMapEvent } from "@/types/Event.type";
import Link from "next/link";

interface MapItemCardProps {
  event: KakaoMapEvent;
}

function MapItemCard({ event }: MapItemCardProps) {
  const rating = Math.floor(Number(event.averagerating)) || 1;

  return (
    <Link
      href={`/events/${event.id}`}
      className="block hover:-translate-y-2 transition"
    >
      <article className="flex flex-col w-full">
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
          </div>

          <h6 className="text-[15px] leading-tight mb-2 overflow-hidden line-clamp-2 font-medium">
            {event.title}
          </h6>

          <address className="text-xs not-italic text-neutral-70 block">
            {event.venue?.name}
          </address>
        </section>
      </article>
    </Link>
  );
}

export default MapItemCard;
