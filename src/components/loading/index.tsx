import "./style.scss";

const CommonLoading = () => {
  return (
    <>
      <div className="loading-overlay">
        <div className="loading-wrapper">
          {/* img 로딩 속도가 맞지 않음 */}
          {/* <img
            className="loading-img"
            src={process.env.PUBLIC_URL + "/bnr_test.jpg"}
            alt="test"
          /> */}
          <div className="title">Loading</div>
          <div className="content">잠시만 기다려 주세요</div>
        </div>
      </div>
    </>
  );
};

export default CommonLoading;
