"use client";

import { Events } from "@/types/Event.type";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PaginationProps {
  events: Array<Events>;
  eventsPerPage: number;
  totalEvents: number;
}

function Pagination({
  events: eventsData,
  eventsPerPage: eventNumber,
  totalEvents,
}: PaginationProps) {
  const [events, setEvents] = useState<Array<Events>>([]);
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
  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }
  // 페이징 버튼을 10개씩 끊어서 보여주는 기능 추가
  const [pageNumberLimit, setPageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
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
        <Link onClick={handleNextButton} href="#!" className="page-link">
          &hellip;
        </Link>
      </li>
    );
  }

  let pageDecrementButton = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementButton = (
      <li className="page-item">
        <Link onClick={handlePrevButton} href="#!" className="page-link">
          &hellip;
        </Link>
      </li>
    );
  }

  return (
    <>
      <nav className="mt-8">
        <ul className="pagination flex gap-[17px] justify-center text-center">
          <li className="page-item w-[21px] h-[21px]  rounded-md">
            <Link
              onClick={handlePrevButton}
              href={`?page=${currentPage - 1}`}
              className={`page-link ${
                currentPage === 1 && "disabled"
              } text-neutral-30 w-full h-full inline-block border-red-500 active:border-user-theme-100 visited:border-user-theme-100`}
            >
              {`<`}
            </Link>
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
                  <Link
                    onClick={() => paginate(number)}
                    href={`?page=${number}`}
                    className="page-link"
                  >
                    {number}
                  </Link>
                </li>
              );
            } else {
              return null;
            }
          })}
          {pageIncrementButton}
          <li className="page-item page-item w-[21px] h-[21px] hover:bg-user-theme-100 rounded-md">
            <Link
              onClick={handleNextButton}
              href={`?page=${currentPage + 1}`}
              className={`page-link ${
                currentPage === pageNumbers.length && "disabled"
              } text-neutral-30`}
            >
              {`>`}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
