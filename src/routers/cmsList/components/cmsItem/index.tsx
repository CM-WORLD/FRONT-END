import { useEffect, useState } from "react";

import { REQUEST_GET } from "../../../../libs/request";
import { CommissionDetail } from "../../../../defines/api";

import Button from "../../../../components/button";

const CmsItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    REQUEST_GET("/cms/list", {}, (data) => setData(data.data), "public", false);
  }, []);

  const renderItems = () => {
    if (data.length < 1)
      return (
        <div className="py-20 text-dark text-center">
          현재 등록된 커미션이 없습니다.
        </div>
      );
    return data.map((item: CommissionDetail, idx) => {
      return (
        <div key={`${item.id}-${idx}`}>
          <a
            className="cms-item flex items-center py-7 text-dark"
            href={`/apply/${item.id}`}
          >
            <div>
              <img
                src={item.profileImg}
                alt="profile"
                className="w-48 h-44 border border-gray-300 rounded"
              />
            </div>
            <div className="ml-6">
              <div className="text-2xl font-bold">{item.name}</div>
              <div className="py-2">{item.content}</div>
              <div className="flex gap-5 py-3 font-bold">
                <div>
                  현재 신청자 <b className="text-blue-500">{item.prsCnt}</b>명
                </div>
                <div>
                  예약 대기자 <b className="text-cyan-500">{item.rsvCnt}</b>명
                </div>
              </div>
              <Button color="Primary" value="신청 & 예약하기" />
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <>
      <section className="apply-item-list">{renderItems()}</section>
    </>
  );
};

export default CmsItems;
