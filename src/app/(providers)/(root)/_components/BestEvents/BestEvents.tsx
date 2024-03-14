import api from "@/api/index.api";
import EventsSlide from "@/components/EventsSlide";
import "swiper/css";

async function BestEvents() {
  const { events } = await api.events.getEvents({
    orderBy: "popular",
  });

  return <EventsSlide events={events} />;
}

export default BestEvents;
