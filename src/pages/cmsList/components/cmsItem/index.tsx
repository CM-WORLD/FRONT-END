import { useEffect, useState } from "react";

import { HOST_URL } from "../../../../common/Request";

import "./style.scss";
import axios from "axios";
import Button from "../../../../components/button";

interface CmsItem {
  id: number;
  name: string;
  profileImg: string;
  status: string; 
  content: string;
}

const CmsItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(HOST_URL + "/cms/list").then((resp) => {
      if (resp.data) {
        setData(resp.data);
      }
    });
  }, []);

  const renderItems = () => {
    if (data.length < 1)
      return <div className="no-cms">현재 등록된 커미션이 없습니다.</div>;
    return data.map((item: CmsItem, idx) => {
      return (
        <div key={`${item.id}-${idx}`}>
          <a className="cms-item" href={`/apply/${item.id}`}>
            <div>
              <img src={item.profileImg} alt="profile" className="" />
            </div>
            <div className="cms-desc">
              <div className="">{item.name}</div>
              <div className="">{item.content}</div>
                <Button color="Rose" value="신청 & 예약하기" />
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
