import { ComponentProps } from "react";
import EventItem from "../EventItem";

interface EventListProps {
  events: Array<ComponentProps<typeof EventItem>["event"]>;
}

function EventList({ events }: EventListProps) {
  return (
    <ul className='grid grid-cols-4 gap-6'>
      {events.map((event) => (
        <li key={event.eventId}>
          <EventItem event={event} />
        </li>
      ))}
    </ul>
  );
}

export default EventList;
