import { ComponentProps } from "react";
import EventItem from "../EventItem";

interface EventListProps {
  events: Array<ComponentProps<typeof EventItem>["event"]>;
}

function EventList({ events }: EventListProps) {
  return (
    <ul className='flex flex-wrap justify-center gap-6'>
      {events.map((event) => (
        <li key={event.eventId}>
          <EventItem event={event} />
        </li>
      ))}
    </ul>
  );
}

export default EventList;
