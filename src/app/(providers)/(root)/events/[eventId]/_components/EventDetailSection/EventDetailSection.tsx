import { Event } from "@/types/Event.type";
import EventInfoCard from "./EventInfoCard/EventInfoCard";
import TicketLink from "./TicketLink";

interface EventDetailSectionProps {
  event: Event;
  avgRating: string;
}

function EventDetailSection({ event, avgRating }: EventDetailSectionProps) {
  const bookingLinks = event.eventDetail.bookingLinks;

  return (
    <section className="xs:w-[325px] xs:max-w-[325px] xs:min-w-[325px] mx-auto">
      <EventInfoCard event={event} avgRating={avgRating} />
      {bookingLinks && bookingLinks.length > 0 && (
        <TicketLink bookingLinks={bookingLinks} />
      )}
    </section>
  );
}

export default EventDetailSection;
