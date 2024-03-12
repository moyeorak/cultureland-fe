"use client";

import { EventData } from "@/types/Event.type";
import { useEffect, useState } from "react";
import EventList from "../EventList";

interface PaginationProps {
  events: Array<EventData>;
  eventsPerPage: number;
}

function Pagination({
  events: eventsData,
  eventsPerPage: eventNumber,
}: PaginationProps) {
  const [events, setEvents] = useState<Array<EventData>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(eventNumber);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  // 현재 페이지에 표시될 이벤트 계산합니다.
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // 페이지 번호를 클릭했을 때 실행될 함수입니다.
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // 전체 페이지 수를 계산합니다.
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(events.length / eventsPerPage); i++) {
    pageNumbers.push(i);
  }
  // 페이징 버튼을 10개씩 끊어서 보여주는 기능 추가
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleNextButton = () => {
    if (currentPage !== pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  const handlePrevButton = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  let pageIncrementButton = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementButton = (
      <li className="page-item">
        <a onClick={handleNextButton} href="#!" className="page-link">
          &hellip;
        </a>
      </li>
    );
  }

  let pageDecrementButton = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementButton = (
      <li className="page-item">
        <a onClick={handlePrevButton} href="#!" className="page-link">
          &hellip;
        </a>
      </li>
    );
  }

  return (
    <>
      <EventList events={currentEvents} />
      <nav className="mt-8">
        <ul className="pagination flex gap-[17px] justify-center text-center">
          <li className="page-item w-[21px] h-[21px]  rounded-md">
            <a
              onClick={handlePrevButton}
              href="#!"
              className={`page-link ${
                currentPage === 1 && "disabled"
              } text-neutral-30 w-full h-full inline-block border-red-500 active:border-user-theme-100 visited:border-user-theme-100`}
            >
              {`<`}
            </a>
          </li>
          {pageDecrementButton}
          {pageNumbers.map((number) => {
            if (number <= maxPageNumberLimit && number > minPageNumberLimit) {
              return (
                <li
                  key={number}
                  className={`page-item ${
                    currentPage === number ? "active" : null
                  } page-item w-[21px] h-[21px] hover:bg-user-theme-100 rounded-md`}
                >
                  <a
                    onClick={() => paginate(number)}
                    href="#!"
                    className="page-link"
                  >
                    {number}
                  </a>
                </li>
              );
            } else {
              return null;
            }
          })}
          {pageIncrementButton}
          <li className="page-item page-item w-[21px] h-[21px] hover:bg-user-theme-100 rounded-md">
            <a
              onClick={handleNextButton}
              href="#!"
              className={`page-link ${
                currentPage === pageNumbers.length && "disabled"
              } text-neutral-30`}
            >
              {`>`}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
