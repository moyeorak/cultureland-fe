import CategoryList from "@/components/CategoryList";
import EventsList from "@/components/EventsList";
import Page from "@/components/Page";
import Pagination from "@/components/Pagination";

import { Event } from "@/types/Event.type";
import { Response } from "@/types/Response.type";
import axios from "axios";

async function getEvents(page: number, category?: string) {
  const url =
    "https://port-0-culture-land-am952nltdolcl9.sel5.cloudtype.app/events";
  const response = await axios.get<
    Response<{ data: { events: Event[]; totalEventsCnt: number } }>
  >(url, {
    params: { page, category },
  });
  const data = response.data;
  const result = data.result!.data;

  return result;
}

async function EventsPage({
  searchParams: { page = 1, category },
}: {
  searchParams: { page: number; category?: string };
}) {
  const { events, totalEventsCnt } = await getEvents(page, category);

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
