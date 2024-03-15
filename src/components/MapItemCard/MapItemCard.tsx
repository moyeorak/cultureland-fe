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
      className="block hover:-translate-y-2 transition shadow-md rounded"
    >
      <article className="flex flex-col w-full">
        {/* 콘텐츠 */}
        <section className="py-3 px-2.5">
          <div className="flex gap-x-1.5 items-center leading-none mb-[5px]">
            <h6 className="text-[17px] leading-tight overflow-hidden line-clamp-2 font-semibold">
              {event.title}
            </h6>
          </div>

          <div className="text-[10px] mb-[5px] flex gap-x-0.5 items-center">
            {Array(rating)
              .fill(true)
              .map((_, index) => (
                <span key={index}>⭐️</span>
              ))}
          </div>

          <address className="text-[15px] not-italic text-neutral-70 block">
            {event.venue?.name}
          </address>
        </section>
      </article>
    </Link>
  );
}

export default MapItemCard;
