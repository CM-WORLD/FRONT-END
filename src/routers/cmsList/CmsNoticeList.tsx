import { useEffect, useState } from "react";

import Pagination from "../../components/pagnation";
import { ApiClient } from "../../libs/ApiClient";
import Locale from "../../components/locale";

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
    console.log(respData);

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
    ApiClient.getInstance().get("/bbs/aply/cms", {}, bbsListCallback, () => {});
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
            {/* <div className="inline px-6 py-2 rounded border-red-500 font-bold text-red-600 bg-rose-200">
              <Locale k="read_required" />
            </div> */}

<div className="border border-gray-100">

<Locale k="read_required" />
</div>

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
      <h1 className="font-bold text-2xl text-center"><Locale k="notice" /></h1>
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
