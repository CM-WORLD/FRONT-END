import { useEffect, useState } from "react";
import { ApiClient } from "../../libs/ApiClient";
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

  useEffect(() => {
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
  }, []);

  const myReviews = () => {
    if (data.length < 1) return <>현재 작성하신 리뷰가 없습니다.</>;
    else {
      return data.map((item: any, idx) => (
        <div>
            <Button color="Primary">
                <Locale k="review"/>
                </Button>
          <div>{item.id}</div>
          <div>{item.content}</div>
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
