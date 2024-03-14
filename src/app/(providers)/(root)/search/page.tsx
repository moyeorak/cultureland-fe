import api from "@/api/index.api";
import EventsList from "@/components/EventsList";
import Page from "@/components/Page";
import SearchBar from "../_components/Header/_components/SearchBar";

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
    <Page>
      <div className="text-center mb-[37px]">
        <div className="w-[360px] mx-auto">
          <SearchBar placeholder={keyword} />
        </div>
        <h2 className="mt-6 mb-2 text-fs-20">
          {`'`}
          <span className="text-user-theme-100">{`${keyword}`}</span>
          {`'`}에 대한 검색 결과
        </h2>
        <span>
          총 {initialData.totalCount.toLocaleString()}개의 결과를
          발견하였습니다.
        </span>
      </div>

      <EventsList events={initialData.events} />

      {/* <Pagination
        eventsPerPage={12}
        totalEvents={totalCount}
        keywords={keywords}
      /> */}
    </Page>
  );
}

export default SearchPage;
