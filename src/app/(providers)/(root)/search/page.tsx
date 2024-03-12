"use client";

import api from "@/api/index.api";
import EventList from "@/components/EventList";
import Page from "@/components/Page";
import Pagination from "@/components/Pagination";
import { Events } from "@/types/Event.type";
import { useEffect, useState } from "react";
import SearchBar from "../_components/Header/_components/SearchBar";

function SearchPage({
  searchParams: { keywords, page },
}: {
  searchParams: { keywords: string; page?: string };
}) {
  const [searchedEvents, setSearchedEvents] = useState<Events[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function fetchSearchedEvents(keywords: string, page?: string) {
      const { eventsData, totalEventsCnt } = await api.events.getSearchedEvents(
        keywords,
        page
      );

      setTotalCount(totalEventsCnt);
      setSearchedEvents(eventsData);
    }

    fetchSearchedEvents(keywords, page);
  }, [keywords, page]);

  return (
    <Page>
      <div className="text-center mb-[37px]">
        <div className="w-[360px] mx-auto">
          <SearchBar placeholder={keywords} />
        </div>
        <h2 className="mt-6 mb-2 text-fs-20">
          {`'`}
          <span className="text-user-theme-100">{`${keywords}`}</span>
          {`'`}에 대한 검색 결과
        </h2>
        <span>총 {totalCount.toLocaleString()}개의 결과를 발견하였습니다.</span>
      </div>

      <EventList events={searchedEvents} />

      <Pagination
        events={searchedEvents}
        eventsPerPage={12}
        totalEvents={totalCount}
        keywords={keywords}
      />
    </Page>
  );
}

export default SearchPage;
