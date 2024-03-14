import Link from "next/link";

interface MapItemCardProps {
  event: {
    averagerating: string;
    category: {
      name: string;
    };
    id: number;
    distance: number;
    title: string;
    venue: {
      latitude: number;
      longitude: number;
      name: string;
    };
    venueId: number;
    _count: {
      reviews: number;
    };
  };
}

function MapItemCard({ event }: MapItemCardProps) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="block hover:-translate-y-2 transition"
    >
      <article className="flex flex-col w-full">
        {/* 콘텐츠 */}
        <section className="py-3 px-2.5">
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
