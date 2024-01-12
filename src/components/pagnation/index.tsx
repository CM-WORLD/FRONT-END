import { PageObj } from "../../common/interface";

interface PaginationProps {
  pageObj: PageObj;
  onClick: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const {
    number: pageNum,
    first,
    last,
    empty,
    size,
    totalPages,
    totalElements,
  } = props.pageObj;

  const renderPageList = () => {
    console.log(first);

    return Array.from({ length: totalPages }, (_, index) => (
      <li key={index + 1}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            props.onClick(index);
          }}
          className={
            "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" +
            ` ${pageNum === index ? "bg-blue-300 text-blue-800" : ""}`
          }
        >
          {index + 1}
        </a>
      </li>
    ));
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-8">
      <div className="mr-auto">Total count: {totalElements}</div>
      <nav aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-md">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (!first) props.onClick(pageNum - 1);
              }}
              className={
                "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" +
                ` ${
                  first
                    ? "pointer-events-none cursor-not-allowed bg-gray-200"
                    : ""
                }`
              }
            >
              <svg
                className={`w-3 h-3 rtl:rotate-180`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          {renderPageList()}
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (!last) props.onClick(pageNum + 1);
              }}
              className={
                "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover.bg-gray-100 hover.text-gray-700 dark.bg-gray-800 dark.border-gray-700 dark.text-gray-400 dark.hover.bg-gray-700 dark.hover.text-white" +
                ` ${
                  last
                    ? "pointer-events-none cursor-not-allowed bg-gray-200"
                    : ""
                }`
              }
            >
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
