import { useEffect, useState } from "react";
import axios from "axios";

import { HOST_URL } from "../../../../apis/Request";
import "./style.scss";

interface bbsItem {
  id: number;
  title: string;
  regDate: string;
  viewCnt: number;
}
const ApplyNoticeBbs = () => {
  const [data, setData] = useState([]);
  // 페이징 처리
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const params = { page: page, size: size };

  useEffect(() => {
    axios.get(HOST_URL + "/bbs/aply/cms", { params }).then((resp) => {
      if (resp.data) {
        setData(resp.data.content);
      }
    });
  }, []);

  const noticeList = () => {
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan={4}>등록된 공지가 없습니다.</td>
        </tr>
      );
    }

    return data.map((item: bbsItem, idx) => (
      <tr key={idx}>
        <td>{item.id}</td>
        <td className="contents">{item.title}</td>
        <td>{item.viewCnt}</td>
        <td>{item.regDate}</td>
      </tr>
    ));
  };
  return (
    <>
      <h1>커미션 필독 공지</h1>
      <table className="bbs-table">
        <colgroup>
          <col width="15%" />
          <col width="*" />
          <col width="15%" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">조회수</th>
            <th scope="col">등록 날짜</th>
          </tr>
        </thead>
        <tbody>{noticeList()}</tbody>
      </table>
    </>
  );
};

export default ApplyNoticeBbs;
