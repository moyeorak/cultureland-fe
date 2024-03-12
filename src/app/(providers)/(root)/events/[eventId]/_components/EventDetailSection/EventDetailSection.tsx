// import EventInfoCard from "./EventInfoCard";
// import MapCard from "./MapCard";
import EventInfoCard from "./EventInfoCard/EventInfoCard";
import MapCard from "./MapCard";
import TicketLink from "./TicketLink";

//getEvent

function EventDetailSection() {
  return (
    <section className="flex w-[960px] gap-x-14 mx-auto pt-[93px] mb-[100px]">
      {/* <EventInfoCard /> */}
      <EventInfoCard />
      <div className="flex flex-col gap-y-2">
        <MapCard />
        <TicketLink />
      </div>
    </section>
  );
}

export default EventDetailSection;
