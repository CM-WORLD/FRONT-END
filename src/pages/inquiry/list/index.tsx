import { useEffect, useState } from "react";
import axios from "axios";

import { HOST_URL } from "../../../apis/Request";
import MyCommonContent from "../../myPage/common";

import "./style.scss";

interface bbsItem {
  id: number;
  title: string;
  regDate: string;
}

const MyInquiryList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  //useMemo hook으로 감싸라는데 당체 무슨 소리인지...
  const params = {
    page: page,
    size: size,
  };
  //게시판의 경우 page, size 값 전달 필요
  useEffect(() => {
    axios.get(HOST_URL + "/bbs/inquiry", { params }).then((resp) => {
      if (resp.data) {
        setData(resp.data.content);
      }
    });
  }, []);
  //params 넣으니 무한 호출..

  const inquiryList = () => {
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan={4}>등록된 문의가 없습니다.</td>
        </tr>
      );
    }

    return data.map((item: bbsItem, idx) => (
      <tr key={idx}>
        <td>{item.id}</td>
        <td className="contents">{item.title}</td>
        <td>{item.regDate}</td>
      </tr>
    ));
  };
  const content = (
    <table className="bbs-table">
      <colgroup>
        <col width="15%" />
        <col width="*" />
        <col width="15%" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">등록 날짜</th>
        </tr>
      </thead>
      <tbody>{inquiryList()}</tbody>
    </table>
  );

  return (
    <>
      <MyCommonContent
        title="1:1 문의"
        content={content}
        btnLink="/inquiry/form"
        btnTxt="신규 문의하기"
      />
    </>
  );
};

export default MyInquiryList;
