import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MyCommonContent from "../../common";
import { API } from "../../../../common/Request";
import "./style.scss";
import { CmsApplyDetail, ImgDetail } from "../../../../common/interface";

const MyCmsApplyDetail = () => {
  const [data, setData] = useState<CmsApplyDetail | null>(null);
  const [imgList, setImgList] = useState([]);
  const applyId = useParams().cmsApplyId || "";

  useEffect(() => {
    API.get(`/apply/detail/${applyId}`).then((resp) => {
      if (resp.data.status === 200) {
        setData(resp.data.data);
        setImgList(resp.data.imgList);
      }
    });
  }, []);

  const content = () => {
    if (!data) return <>존재하지 않는 커미션 id입니다.</>;

    const images = () => {
      if (imgList.length < 1) return <></>;
      return imgList.map((item: ImgDetail, idx) => {
        return (
          <>
          <div>
            <img src={item.imgUrl} alt="img" />
          </div>
          </>
        );
      });
    };

    return (
      <>
        <div>Id: {data.id}</div>
        <div>제목: {data.title}</div>
        <div>내용: {data.content}</div>
        <div>상태: {data.status}</div>
        <div>커미션 이름: ~~~~ 저가고퀄 나와야 하지 않나~~~~ </div>
        <div>커미션 타입: {data.cmsType && data.cmsType}</div>
        <div>입금 여부: {data.depositYn}</div>

        <div>등록날짜: {data.regDate}</div>
        {images()}
        <div>
          <hr />
        </div>

        <div>
          <h1>결제 영수증</h1>
        </div>
      </>
    );
  };

  return (
    <>
      <MyCommonContent title="커미션 신청 상세" content={content()} />
    </>
  );
};

export default MyCmsApplyDetail;
