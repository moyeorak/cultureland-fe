import api from "@/api/index.api";
import Page from "@/components/Page";
import DetailTabSection from "./_components/DetailTab/DetailTab";
import EventDetailSection from "./_components/EventDetailSection";

async function EventDetailPage(props: { params: { eventId: string } }) {
  const eventId = Number(props.params.eventId);
  const event = await api.events.getEvent(eventId);
  // console.log(event);

  return (
    <Page>
      <EventDetailSection />
      <DetailTabSection eventId={eventId} />
    </Page>
  );
}

export default EventDetailPage;
