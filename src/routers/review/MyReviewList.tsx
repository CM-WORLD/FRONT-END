import { useEffect, useState } from "react";

import { ApiClient } from "../../libs/ApiClient";
import { ReviewDetail } from "../../defines/api";

import Button from "../../components/button";
import Locale from "../../components/locale";

const MyReviewList = () => {
  const [data, setData] = useState([]);

  const [pageObj, setPageObj] = useState({
    number: 0,
    first: true,
    last: true,
    size: 10,
    totalPages: 1,
    totalElements: 1,
    empty: true,
  });

  const fetchReviews = () => {
    ApiClient.getInstance().get(
      "/review/member/list",
      { params: { page: pageObj.number, size: pageObj.size } },
      (data) => {
        const respData = data.data;
        if (respData) {
          setData(respData.content);
          setPageObj({
            first: respData.first,
            last: respData.last,
            number: respData.number,
            size: respData.size,
            totalPages: respData.totalPages,
            totalElements: respData.totalElements,
            empty: respData.empty,
          });
        }
      },
      (data) => {
        console.log("error", data);
      }
    );
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  const toggleReviewStatus = (id: number) => {
    ApiClient.getInstance().put(
      "/review/toggle/" + id,
      {},
      (data) => {
        alert("리뷰 상태가 변경되었습니다.");
        fetchReviews();
      },
      (data) => {}
    );
  };

  const myReviews = () => {
    if (data.length < 1) return <><Locale k="review_not_found" /></>;
    else {
      return data.map((item: ReviewDetail, idx) => (
        <div className="border border-gray-400">
          {item.displayYn === "Y" ? (
            <Button
              color="Blue"
              data-idx={idx}
              onClick={() => toggleReviewStatus(item.id)}
            >
              <Locale k="public" />
            </Button>
          ) : (
            <Button color="Rose" onClick={() => toggleReviewStatus(item.id)}>
              <Locale k="private" />
            </Button>
          )}
          <div>{item.id}</div>
          <div>{item.content}</div>
          <div>{item.regDate}</div>
        </div>
      ));
    }
  };

  return (
    <>
      <div>{myReviews()}</div>
    </>
  );
};

export default MyReviewList;
