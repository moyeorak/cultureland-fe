"use client";

import api from "@/api/index.api";
import CategoryList from "@/components/CategoryList";
import EventList from "@/components/EventList";
import Page from "@/components/Page";
import Pagination from "@/components/Pagination";
import { Category } from "@/types/Category.type";
import { Events } from "@/types/Event.type";
import { useEffect, useState } from "react";

const dummyCategory: Array<Category> = [
  {
    code: 1,
    value: "전체",
  },
  {
    code: 2,
    value: "연극",
  },
  {
    code: 3,
    value: "무용",
  },
  {
    code: 4,
    value: "대중무용",
  },
  {
    code: 5,
    value: "클래식",
  },
  {
    code: 6,
    value: "국악",
  },
  {
    code: 7,
    value: "치킨",
  },
  {
    code: 8,
    value: "피자",
  },
  {
    code: 9,
    value: "햄버거",
  },
  {
    code: 10,
    value: "이종환",
  },
];

function EventsPage({
  searchParams: { page },
}: {
  searchParams: { page: number };
}) {
  let totalCount: number;
  const [pageNum, setPageNum] = useState(1);
  const [events, setEvents] = useState<Events[]>([]);
  const [totalCnt, setTotalCnt] = useState(0);

  useEffect(() => {
    async function fetchEvents(pageNum: number) {
      setPageNum(pageNum);
      const { eventsData, totalEventsCnt } = await api.events.getAllEvents(
        pageNum
      );
      setTotalCnt(totalEventsCnt);
      setEvents(eventsData);
    }

    fetchEvents(page);
  }, [page]);

  useEffect(() => {
    async function fetchInitialEvents() {
      const response = await api.events.getAllEvents();
      setEvents(response.eventsData);
    }

    fetchInitialEvents();
  }, []);

  return (
    <Page>
      <CategoryList categories={dummyCategory} />
      <EventList events={events} />
      <Pagination events={events} eventsPerPage={12} totalEvents={totalCnt} />
    </Page>
  );
}

export default EventsPage;
