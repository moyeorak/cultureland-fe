import Link from "next/link";
import { ComponentProps } from "react";
import EventCard from "../EventCard";
import EventItem from "../EventItem";

interface EventListProps {
  events: Array<ComponentProps<typeof EventItem>["event"]>;
}

function EventList({ events }: EventListProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-6">
      {events.map((event) => (
        <li key={event.id} className="block">
          <Link href={`/events/${event.id}`} className="block">
            <EventCard event={event} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
