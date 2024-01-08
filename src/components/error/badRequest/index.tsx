import "../style.scss";

const BadRequest = () => {
  return (
    <>
      <div className="err-content">
        <img className="err-img" src={process.env.PUBLIC_URL + "/bnr_test.jpg"} alt="대충 메세지...." />
        <div className="err-txt">잘못된 요청입니다.....</div>
      </div>
    </>
  );
};

export default BadRequest;
