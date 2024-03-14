import api from "@/api/index.api";
import EventsList from "@/components/EventsList";
import Page from "@/components/Page";
import SearchBar from "../../../../components/SearchInput";

async function SearchPage({
  searchParams: { keyword = "", page = "1", category = "전체" },
}: {
  searchParams: { keyword?: string; page?: string; category?: string };
}) {
  const initialData = await api.events.searchEvents({
    keywords: keyword,
    page: +page,
    category,
  });

  return (
    <Page title="이벤트 검색하기">
      <div className="grid gap-y-20">
        <section className="flex flex-col items-center gap-y-10">
          <SearchBar initialKeyword={keyword} autoFocus />

          <p>
            <strong className="text-user-theme-90">{keyword}</strong>으로 검색한
            결과, 총{" "}
            <strong className="text-user-theme-90">
              {initialData.totalCount.toLocaleString()}
            </strong>
            개의 이벤트를 찾았어요
          </p>
        </section>

        <section>
          <EventsList events={initialData.events} />
        </section>
      </div>

      {/* <Pagination
        eventsPerPage={12}
        totalEvents={totalCount}
        keywords={keywords}
      /> */}
    </Page>
  );
}

export default SearchPage;
