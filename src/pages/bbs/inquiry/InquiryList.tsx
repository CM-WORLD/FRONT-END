import { useEffect, useState } from "react";
import axios from "axios";

import { AUTH_ITC, getAtk, getRtk } from "../../../common/Request";
import MyCommonContent from "../../myPage/common";
import { HOST_URL } from "../../../libs/Const";

// import "./style.scss";

interface bbsItem {
  id: number;
  title: string;
  content: string;
  regDate: string;
}

const MyInquiryList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  //useMemo hook으로 감싸라는데 당체 무슨 소리인지...
  const params = {
    page: 0,
    size: 10,
  };

  useEffect(() => {
    AUTH_ITC.get(HOST_URL + "/validate/token").then((resp) => {
      if (resp.data.status === 200 || resp.data.staus === 205) {
        axios
          .get(HOST_URL + "/bbs/inquiry/member", {
            params,
            headers: {
              Authorization: `Bearer ${getAtk()}`,
              RefreshToken: getRtk(),
            },
          })
          .then((resp) => {
            if (resp.data.data) {
              setData(resp.data.data.content);
            }
          });
      }
    });
  }, []);

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
      </>
    );
  };

  return (
    <>
      <MyCommonContent
        title="1:1 문의"
        content={inquiryList()}
        btnLink="/inquiry/form"
        btnTxt="신규 문의하기"
      />
    </>
  );
};

export default MyInquiryList;
