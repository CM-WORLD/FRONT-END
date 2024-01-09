import { useEffect, useState } from "react";
import axios from "axios";

import "./style.scss";

interface ReviewItem {
  id: number;
  applyDto: {
    cmsType: string;
  };
  content: string;
  displayYn: string;
  nickName: string;
  regDate: string;
}

const ReviewPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/review/list").then(resp => {
      if(resp.data.status === 200) {
        console.log(resp.data.data);
        setData(resp.data.data);
      }
    })


  }, []);

  const reviewList = () => {
    if (data.length < 1) return <div className="empty-review">아직 작성된 후기가 없습니다.</div>;
    return data.map((item: ReviewItem, idx)=> <>
    
    <div key={`rvw-item-${idx}`}>
      <div>{item.id}</div>
      <div>{item.content}</div>
      <div>{item.nickName}</div>
      <div>{item.regDate}</div>
      <div>커미션 신청 타입: {item.applyDto.cmsType}</div>

    </div>
    </>
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
