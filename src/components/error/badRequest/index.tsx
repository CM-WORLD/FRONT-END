import CommonErrContent from "../content";
import "../style.scss";

interface BadRequestProps {
  desc?: string;
}

const BadRequest = (props: BadRequestProps) => {
  return <CommonErrContent title="잘못된 요청입니다" desc={props.desc} />;
};

export default BadRequest;
