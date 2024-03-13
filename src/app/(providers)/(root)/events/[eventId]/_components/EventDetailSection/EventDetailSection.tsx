import { Event } from "@/types/Event.type";
import EventInfoCard from "./EventInfoCard/EventInfoCard";

interface EventDetailSectionProps {
  event: Event;
  avgRating: string;
}

function EventDetailSection({ event, avgRating }: EventDetailSectionProps) {
  return (
    <section>
      <EventInfoCard event={event} avgRating={avgRating} />
    </section>
  );
}

export default EventDetailSection;
