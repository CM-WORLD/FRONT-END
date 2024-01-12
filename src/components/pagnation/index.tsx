
interface PaginationProps {
  totalPage: number;
  currentPage: number;
  onClick: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {

  const renderPageList = () => {
    return Array.from({ length: props.totalPage }, (_, index) => (
      <li key={index + 1}>
        <a
          href="#"
          onClick={(e)=>{ e.preventDefault(); props.onClick(index)}}
          className={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        + ` ${props.currentPage === index ? "bg-blue-300 text-blue-800": ""} `}
        >
          {index + 1}
        </a>
      </li>
    ));
  };
  
  return (
    <div className="flex items-center justify-center space-x-2 my-8">
      <nav aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-md">
          {props.currentPage > 1 && (
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
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
          )}
          {renderPageList()}
          {props.currentPage ===  props.totalPage && (
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover.bg-gray-100 hover.text-gray-700 dark.bg-gray-800 dark.border-gray-700 dark.text-gray-400 dark.hover.bg-gray-700 dark.hover.text-white"
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
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
