import { Events } from "@/types/Event.type";
import { formatDate } from "@/utils/formatDate.utils";
import Image from "next/image";

interface EventItemProps {
  event: Events;
}

function EventItem({ event }: EventItemProps) {
  return (
    <div className="shadow-primary rounded-lg overflow-hidden w-[220px] h-80 px-9 py-5">
      <div>
        <div className="relative w-full border h-[200px] rounded-lg overflow-hidden">
          <Image
            alt={event.title}
            src={event.poster}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            unoptimized
          />
        </div>
        <div className="mt-3 flex flex-col">
          <h4 className="text-base text-nowrap overflow-hidden">
            {event.title}
          </h4>
          <span className="text-xs">{event.venue.name}</span>
          <span className="text-xs">
            {formatDate(event.startDate)} ~ {formatDate(event.endDate)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
