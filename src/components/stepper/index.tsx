interface TimeLine {
  id: number;
  status: string;
  statusNm: string;
  regDate: string;
  message: string;
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
  };

  /** 주문 금액이 필요하다.  */

  const steps = timeLineList.map((item, idx) => {
    return (
      <li className="mb-10 ms-4">
        <div
          className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white ${getColor(
            "WAIT"
          )}`}
        ></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {item.regDate}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {item.statusNm}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {item.message}
        </p>
      </li>
    );
  });

  return timeLineList.length > 0 ? (
    <>
      <div className="py-4">
        <div className="pt-3 pb-3 font-bold text-md">타임라인</div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {steps}
        </ol>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Stepper;
