import { useEffect, useState } from "react";
import WriteRvwModal from "../modal";
import "./style.scss";

const ReviewPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {}, []);

  const reviewList = () => {
    if (data.length < 1) return <div className="empty-review">아직 작성된 후기가 없습니다.</div>;
    return data.map((item, idx)=> <></>
    );
  };

  return (
    <>
      {/* <WriteRvwModal display={true} onClick={() => {}} /> */}
      <div className="review-page">
        <h1 className="header">커미션 후기</h1>
        <div className="review-content">
          {reviewList()}
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
