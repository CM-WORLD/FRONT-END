import { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import Pagination from "../../../../components/pagnation";
import { HOST_URL } from "../../../../libs/Const";

interface bbsItem {
  id: number;
  title: string;
  content: string;
  nickName: string;
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
      <>
      <tr key={`cms-notice-${idx}`}>
      <td className="">
        <span className="px-6 py-2 rounded border-red-500 font-bold text-red-600 bg-rose-200">
          필독
        </span>
      </td>
      <td>
        <a href={`/notice/${item.id}`}>
        <div className="py-3 font-bold text-red-600 text-left">{item.title}</div>
        </a>
      </td>
      <td>
        <div className="py-3">jinvicky</div>
      </td>
      <td>
        <div className="py-3">{item.regDate}</div>
      </td>
      <td>
        <div className="py-3">{item.viewCnt}</div>
      </td>
    </tr>

    {/* <Pagination onClick={() => {}}/> */}
    </>

    ));
  };
  return (
    <>
      <h1 className="font-bold text-2xl">공지사항</h1>
      <table className="bbs-table">
        <colgroup>
          <col width="15%" />
          <col width="*" />
          <col width="15%" />
          <col width="15%" />
          <col width="10%" />
        </colgroup>
        <tbody>{noticeList()}</tbody>
      </table>
    </>
  );
};

export default ApplyNoticeBbs;
