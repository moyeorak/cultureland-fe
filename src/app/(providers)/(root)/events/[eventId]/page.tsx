import api from "@/api/index.api";
import Page from "@/components/Page";
import DetailTabSection from "./_components/DetailTab/DetailTab";
import EventDetailSection from "./_components/EventDetailSection";

async function EventDetailPage(props: { params: { eventId: string } }) {
  const eventId = Number(props.params.eventId);
  const eventData = await api.events.getEvent(eventId);
  const { event, avgRating } = eventData;
  const description_images = event.eventDetail.description_images;
  const reviewCount = event._count.reviews;

  console.log(description_images);

  return (
    <Page>
      <EventDetailSection event={event} avgRating={avgRating} />
      <DetailTabSection
        eventId={eventId}
        description_images={description_images}
        reviewCount={reviewCount}
      />
    </Page>
  );
}

export default EventDetailPage;
