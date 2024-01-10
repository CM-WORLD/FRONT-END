import { useEffect, useState } from "react";
import axios from "axios";
import { CmsApplyDetail } from "../../../common/interface";
import { HOST_URL } from "../../../common/Request";
import "./style.scss";

interface ReviewItem {
  id: number;
  applyDto: CmsApplyDetail;
  content: string;
  displayYn: string;
  nickName: string;
  regDate: string;
}

const ReviewPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(HOST_URL + "/review/list").then((resp) => {
      if (resp.data.status === 200) {
        setData(resp.data.data);
      }
    });
  }, []);

  const reviewList = () => {
    if (data.length < 1)
      return <div className="empty-review">아직 작성된 후기가 없습니다.</div>;
    return data.map((item: ReviewItem, idx) => (
      <>
        <div key={`rvw-item-${idx}`} className="rvw-item">
          <img src={`${process.env.PUBLIC_URL + "/bnr_test.jpg"}`} alt="" />
          <h4 className="cms-type-info">
            <span>{item.applyDto.cmsDto.name}</span>
            <span> - {item.applyDto.cmsType}</span>
          </h4>
          <div className="rvw-item-content">{item.content}</div>
          <div className="wrt-info-box">
            <div className="nick">{item.nickName}</div> |
            <div>{item.regDate}</div>
          </div>
        </div>
      </>
    ));
  };

  return (
    <>
      {/* <WriteRvwModal display={true} onClick={() => {}} /> */}
      <div className="review-page">
        <h1 className="header">커미션 후기</h1>
        <div className="review-content">{reviewList()}</div>
      </div>
    </>
  );
};

export default ReviewPage;
