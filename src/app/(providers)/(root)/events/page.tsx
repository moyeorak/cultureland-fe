import api from "@/api/index.api";
import CategoryList from "@/components/CategorySelector";
import Page from "@/components/Page";
import AllEventsList from "./_components/AllEventsList";

export const revalidate = 60;

async function EventsPage({
  searchParams: { page = "1", category = "전체" },
}: {
  searchParams: { page?: string; category?: string };
}) {
  const initialData = await api.events.getEvents({
    page: +page,
    category,
  });

  return (
    <Page
      title="이벤트 찾아보기"
      description="컬처랜드가 준비해 둔 다양한 이벤트를 둘러 보세요!"
    >
      <div className="grid gap-y-10">
        <CategoryList />
        <AllEventsList initialData={initialData} />
      </div>
      <div>
        {/* <Pagination
          category={category}
          currentPage={page}
          eventsCnt={totalEventsCnt}
          eventsPerPage={10}
        /> */}
      </div>
    </Page>
  );
}

export default EventsPage;
