import CommonErrContent from "../content";
import "../style.scss";

interface NotFoundProps {
    desc?: string;
}

const NotFound = (props: NotFoundProps) => {
  const defaultDesc = "url을 다시 확인해 주세요";
  return (
    <CommonErrContent title="존재하지 않는 페이지입니다" desc={props.desc || defaultDesc}/>
  );
};

export default NotFound;
