import "./style.scss";

interface LoadingProps {
  desc?: string;
}

const CommonLoading = (props: LoadingProps) => {
  return (
    <>
      <div className="loading-overlay">
        <div className="loading-wrapper">
          <div className="title">Loading</div>
          <div className="content">
            {props.desc && <div>{props.desc}</div>}
            <div>잠시만 기다려 주세요</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonLoading;
