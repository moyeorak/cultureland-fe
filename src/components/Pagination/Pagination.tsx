import Link from "next/link";

interface PaginationProps {
  category?: string;
  currentPage: number;
  eventsCnt: number;
  eventsPerPage: number;
}

async function Pagination({
  category,
  currentPage,
  eventsCnt,
  eventsPerPage,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(eventsCnt / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumberLimit = 10;
  const maxPageNumberLimit =
    Math.ceil(currentPage / pageNumberLimit) * pageNumberLimit;
  const minPageNumberLimit = maxPageNumberLimit - pageNumberLimit + 1;

  const lastPageNumber = Math.ceil(eventsCnt / eventsPerPage);

  return (
    <nav>
      <ul className="flex list-none gap-x-2 justify-center mt-10">
        {currentPage > 1 && (
          <li>
            <Link
              href={`/events${category ? `?category=${category}&` : "?"}page=${
                Number(currentPage) - 1
              }`}
            >
              {`<`}
            </Link>
          </li>
        )}

        {pageNumbers
          .filter(
            (number) =>
              number >= minPageNumberLimit && number <= maxPageNumberLimit
          )
          .map((number) => (
            <li key={number}>
              <Link
                href={`/events${
                  category ? `?category=${category}&` : "?"
                }page=${number}`}
              >
                {number}
              </Link>
            </li>
          ))}

        {currentPage < lastPageNumber && (
          <li>
            <Link
              href={`/events${category ? `?category=${category}&` : "?"}page=${
                Number(currentPage) + 1
              }`}
            >
              {`>`}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
