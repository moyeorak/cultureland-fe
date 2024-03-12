import Link from "next/link";
import { ComponentProps } from "react";
import CategoryList from "../CategoryList";
import EventItem from "../EventItem";
import Heading from "../Heading/Heading";

interface EventListProps {
  events: Array<ComponentProps<typeof EventItem>["event"]>;
}

function EventList({ events }: EventListProps) {
  return (
    <section>
      <Heading label="이벤트 리스트" position="start" />
      <CategoryList categories={[]} />
      <ul className="flex flex-wrap justify-center gap-6">
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>
              <EventItem event={event} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EventList;
