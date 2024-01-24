import { useEffect, useState } from "react";
import axios from "axios";

import MyCommonContent from "../../myPage/common";
import { HOST_URL } from "../../../libs/Const";
import Locale from "../../../components/locale";
import { ApiClient } from "../../../libs/ApiClient";
import Pagination from "../../../components/pagnation";

// import "./style.scss";

interface bbsItem {
  id: number;
  title: string;
  content: string;
  regDate: string;
}

const MyInquiryList = () => {
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

  const bbsListCallback = (data: any) => {
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
  };


  useEffect(() => {
    ApiClient.getInstance().get(
      "/bbs/inquiry/member",
      {params: {page: pageObj.number, size: pageObj.size}},
      (data) => {bbsListCallback(data)},
      (data) => {console.log(data)}
    );
  }, [pageObj.number]);

  const updatePage = (page: number) => {
    setPageObj({ ...pageObj, number: page });
  };


  const content = (
    <div className="">
      {data.length < 1 ? (
        <div className="p-2 py-5 text-center">등록된 문의가 없습니다.</div>
      ) : (
        data.map((item: bbsItem, idx) => (
          <a href={`/mypage/inquiry/${item.id}`} className="block">
            <div
              key={`my-inquiry-${idx}`}
              className="flex justify-around px-4 py-4 border border-b-gray-200 border-x-0 border-t-0 border-collapse"
            >
              <p className="w-2/3 ">{item.title}</p>
              <p className="w-1/3 text-center">{item.regDate}</p>
            </div>
          </a>
        ))
      )}
    </div>
  );
  const inquiryList = () => {
    return (
      <>
        <div className="flex justify-around p-2 border-y border-t-2 border-black">
          <div className="text-md p-2 w-2/3 text-center">제목</div>
          <div className="p-2 w-1/3 text-center">작성일</div>
        </div>
        <div>{content}</div>
        <Pagination
        pageObj={pageObj}
        onClick={(page: number) => updatePage(page)}
      />
      </>
    );
  };

  return (
    <>
      <MyCommonContent
        title={<Locale k="inquiry" />}
        content={inquiryList()}
        btnLink="/mypage/inquiry/form"
        btnTxt={<Locale k="inquiry_write" />}
      />
    </>
  );
};

export default MyInquiryList;
