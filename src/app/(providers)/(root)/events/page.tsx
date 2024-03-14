import CategoryList from "@/components/CategoryList";
import EventsList from "@/components/EventsList";
import Page from "@/components/Page";
import { Event } from "@/types/Event.type";
import { Response } from "@/types/Response.type";
import axios from "axios";

async function getEvents(page: number = 1, category?: string) {
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
  searchParams: { page, category },
}: {
  searchParams: { page: number; category?: string };
}) {
  const { events, totalEventsCnt } = await getEvents(page, category);

  return (
    <Page title="이벤트 둘러보기">
      <div className="grid gap-y-10">
        <CategoryList />
        <EventsList events={events} />
        {/* <Pagination events={events} e/ventsPerPage={12} totalEvents={totalCnt} /> */}
      </div>
    </Page>
  );
}

export default EventsPage;
