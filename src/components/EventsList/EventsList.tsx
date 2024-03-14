import { ComponentProps } from "react";
import EventCard from "../EventCard";
import EventItem from "../EventItem";

interface EventsListProps {
  events: Array<ComponentProps<typeof EventItem>["event"]>;
}

function EventsList({ events }: EventsListProps) {
  return (
    <ul className="grid grid-cols-4 gap-x-5 gap-y-8">
      {events.map((event) => (
        <li key={event.id} className="block">
          <EventCard event={event} />
        </li>
      ))}
    </ul>
  );
}

export default EventsList;
