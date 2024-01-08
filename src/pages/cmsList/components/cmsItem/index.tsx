import { useEffect, useState } from "react";

import { API } from "../../../../common/Request";

import "./style.scss";

interface CmsItem {
  id: number;
  name: string;
  profileImg: string;
  status: string; //이 status라는 걸 백에서 반환을 해서 주어야 하는 건가????
  content: string;
}

const CmsItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/cms/list").then((resp) => {
      if (resp.data) {
        setData(resp.data);
      }
    });
  }, []);

  const renderItems = () => {
    if(data.length < 1) return <div className="no-cms">현재 등록된 커미션이 없습니다.</div>;
    return data.map((item: CmsItem, idx) => {
      return (
        <div key={`${item.id}-${idx}`}>
          <div className="line" />
          <a className="cms-item" href={`/apply/${item.id}`}>
            <div>
              <img src={item.profileImg} alt="profile" className="" />
            </div>
            <div className="cms-desc">
              <div className="cms-name">{item.name}</div>
              <div className="cms-content">{item.content}</div>
              <div className="cms-apply-box">
                <button>신청 & 예약하기</button>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <>
      {/* <section className="btn-header">
        <div>
          <Button value="전체 신청 열기" className="primary" />
          <Button value="전체 신청 닫기" className="primary" />
        </div>
        <Button value="새 커미션 등록하기" className="primary" />
      </section> */}
      <section className="apply-item-list">{renderItems()}</section>
    </>
  );
};

export default CmsItems;
