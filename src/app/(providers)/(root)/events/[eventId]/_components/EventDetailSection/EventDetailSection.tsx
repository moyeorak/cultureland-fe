import EventInfoCard from "./EventInfoCard";
import MapCard from "./MapCard";
import TicketLink from "./TicketLink";

//getEvent

const actors = ["강동원", "덱스", "안보현", "우도환", "로운"];
function EventDetailSection() {
  return (
    <section className="flex w-[960px] gap-x-14 mx-auto pt-[93px] mb-[100px]">
      <EventInfoCard />
      <div className="flex flex-col gap-y-2">
        <MapCard />
        <div className="shadow-primary py-5 px-6 rounded-lg overflow-hidden flex flex-col gap-y-3 text-center">
          <p className="text-fs-14 font-medium text-font-primary-90">캐스팅</p>
          <ul className="flex gap-x-3 justify-center text-font-primary-90 text-fs-12">
            {actors.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>
        </div>
        <TicketLink />
      </div>
    </section>
  );
}

export default EventDetailSection;
