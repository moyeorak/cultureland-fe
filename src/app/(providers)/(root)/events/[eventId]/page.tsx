import Page from "@/components/Page";
import DetailTabSection from "./_components/DetailTab/DetailTab";
import EventDetailSection from "./_components/EventDetailSection";

function EventDetailPage(props: { params: { eventId: string } }) {
  const eventId = Number(props.params.eventId);
  return (
    <Page>
      <EventDetailSection />
      <DetailTabSection eventId={eventId} />
    </Page>
  );
}

export default EventDetailPage;
