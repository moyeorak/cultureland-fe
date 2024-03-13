// import EventInfoCard from "./EventInfoCard";
// import MapCard from "./MapCard";
import EventInfoCard from "./EventInfoCard/EventInfoCard";
import TicketLink from "./TicketLink";

//getEvent

function EventDetailSection() {
  return (
    <section className="">
      <EventInfoCard />

      <TicketLink />
    </section>
  );
}

export default EventDetailSection;
