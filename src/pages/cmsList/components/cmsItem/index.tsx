import { useEffect, useState } from "react";

import { RequestGet } from "../../../../apis/Request";
import Button from "../../../../components/button";

import "./style.scss";

interface cmsItem {
  name: string;
  profileImg: string;
  status: string; //이 status라는 걸 백에서 반환을 해서 주어야 하는 건가????
  content: string;
}

const CmsItems = () => {
  useEffect(() => {
    RequestGet("/cms/list").then((resp) => {
      if (resp.data) {
        setData(resp.data);
      }
    });
  }, []);

  const [data, setData] = useState([]);

  const renderItems = () => {
    return data.map((item: cmsItem, idx) => {
      return (
        <a className="cms-item" key={idx}>
          <div>
            <img src={item.profileImg} alt="profile" className="" />
          </div>
          <div className="cms-desc">
            <div className="cms-name">{item.name}</div>
            <div>
              <span>#Ld</span>
              <span>#걍진커미션</span>
              <span>#커미션</span>
            </div>
            <div className="cms-content">{item.content}</div>
          </div>
        </a>
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
