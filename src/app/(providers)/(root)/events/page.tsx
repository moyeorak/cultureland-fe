import api from "@/api/index.api";
import CategoryList from "@/components/CategoryList";
import EventsList from "@/components/EventsList";
import Page from "@/components/Page";
import Pagination from "@/components/Pagination";

async function EventsPage({
  searchParams: { page = 1, category },
}: {
  searchParams: { page: number; category?: string };
}) {
  const { events, totalEventsCnt } = await api.events.getEvents({
    page,
    category,
  });

  return (
    <Page title="이벤트 둘러보기">
      <div className="grid gap-y-10">
        <CategoryList />
        <EventsList events={events} />
      </div>
      <div>
        <Pagination
          category={category}
          currentPage={page}
          eventsCnt={totalEventsCnt}
          eventsPerPage={10}
        />
      </div>
    </Page>
  );
}

export default EventsPage;
