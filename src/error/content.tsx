import { ErrorContentProps } from "../defines/Error";

const CommonErrContent = (props: ErrorContentProps) => {
  const defaultTitle = "요청 중 문제가 발생했습니다.";
  return (
    <>
      <div className="err-content">
        <img
          className="err-img"
          src={import.meta.env.PUBLIC_URL + "/bnr_test.jpg"}
          alt="error-msg"
        />
        <div className="err-txt">{props.title || defaultTitle}</div>
        {props.desc && <div className="err-desc">{props.desc}</div>}
      </div>
    </>
  );
};

export default CommonErrContent;
