import api from "@/api/index.api";
import EventsList from "@/components/EventsList";

async function RecentEvents() {
  const { events } = await api.events.getEvents({
    orderBy: "recent",
  });

  return <EventsList events={events.slice(0, 8)} />;
}

export default RecentEvents;
