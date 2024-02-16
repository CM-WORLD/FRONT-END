interface TimeLine {
  id: number;
  status: string;
  statusNm: string;
  regDate: string;
}

interface StepperProps {
  timeLineList: TimeLine[];
}

const Stepper = (props: StepperProps) => {
  const { timeLineList } = props;

  /** 타임라인 단계별로 circle bg color 변경 */
  const getColor = (status: string) => {
    switch (status) {
      case "WAIT":
        return "bg-red-200";
      case "PROCEED":
        return "bg-yellow-500";
      case "COMPLETE":
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  }

  /** 주문 금액이 필요하다.  */


  return timeLineList.length > 0 ? (
    timeLineList.map((item, idx) => (
      <>
        <div className="py-4">
          <div className="pt-3 pb-3 font-bold text-md">타임라인</div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white ${getColor("WAIT")}`}></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.regDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            {/* <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li> */}
          </ol>
        </div>
      </>
    ))
  ) : (
    <>아직 타임라인이 존재하지 않습니다.</>
  );
};

export default Stepper;
