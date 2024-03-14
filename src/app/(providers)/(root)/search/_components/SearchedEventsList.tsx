"use client";

import api from "@/api/index.api";
import EventsList from "@/components/EventsList";
import useQueryGetEvents from "@/react-query/events/useQuery.getEvents";

interface SearchedEventsListProps {
  initialData: Awaited<ReturnType<typeof api.events.getEvents>>;
}

function SearchedEventsList({ initialData }: SearchedEventsListProps) {
  const { data } = useQueryGetEvents({ initialData });
  const events = data?.events || initialData.events;

  return <EventsList events={events} />;
}

export default SearchedEventsList;
