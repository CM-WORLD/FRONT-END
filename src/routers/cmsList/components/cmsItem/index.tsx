import { useEffect, useState } from "react";

import Button from "../../../../components/button";
import { GET_AJAX } from "../../../../libs/request";

interface CmsItem {
  id: number;
  name: string;
  profileImg: string;
  status: string;
  content: string;
}

const CmsItems = () => {
  const [data, setData] = useState([]);

  const initData = (data) => {
     setData(data.data);
  };

  useEffect(() => {
    GET_AJAX("/cms/list", initData, false);
  }, []);

  const renderItems = () => {
    if (data.length < 1)
      return (
        <div className="py-20 text-dark text-center">
          현재 등록된 커미션이 없습니다.
        </div>
      );
    return data.map((item: CmsItem, idx) => {
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
              <div className="min-h-16 py-3">{item.content}</div>
              <div>
                <div className="list-cnt">
                  <div>
                    현재 신청자 <b>{0}</b>명
                  </div>
                  <div>
                    예약 대기자 <b>{0}</b>명
                  </div>
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
