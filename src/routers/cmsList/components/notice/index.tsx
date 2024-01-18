import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../../../components/pagnation";
import { HOST_URL } from "../../../../libs/Const";
import { REQUEST_GET } from "../../../../libs/request";

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
    REQUEST_GET(
      "/bbs/aply/cms",
      {
        params: {
          page: pageObj.number,
          size: 10,
        },
      },
      (data) => bbsListCallback(data),
      "public",
      false
    );
  }, []);

  const updatePage = (page: number) => {
    setPageObj({ ...pageObj, number: page });
  };

  const noticeList = () => {
    if (data.length < 1) {
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
              <div className="py-1 font-bold text-red-600 text-left">
                {item.title}
              </div>
            </a>
          </td>
          <td>
            <div className="py-3">jinvicky</div>
          </td>
          <td>
            <div className="py-3">{item.regDate}</div>
          </td>
        </tr>
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
        </colgroup>
        <tbody>{noticeList()}</tbody>
      </table>
      <Pagination
        pageObj={pageObj}
        onClick={(page: number) => updatePage(page)}
      />
    </>
  );
};

export default ApplyNoticeBbs;
