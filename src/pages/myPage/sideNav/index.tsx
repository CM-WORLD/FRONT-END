import "./style.scss";

const SideNav = () => {
  return (
    <>
      <aside className="sticky-top hidden py-4 md:block m-5 sticky">
        <div className="flex flex-col gap-2 p-2 border rounded-xl p-4">
          <a
            href=""
            className="px-3 py-1 font-semibold hover:bg-indigo-50 rounded-md"
          >
            마이페이지
          </a>
          <hr />
          <a
            href=""
            className="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md"
          >
            1 : 1 문의
          </a>
          <div className="inline-flex items-center pl-1">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <a
              href=""
              className="py-1 font-semibold hover:bg-indigo-50 rounded-md"
            >
              커미션 신청 내역
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
