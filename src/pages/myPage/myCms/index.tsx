import { useState, useEffect } from "react";

import { CmsApplyDetail } from "../../../common/interface";
import { API, HOST_URL } from "../../../common/Request";
import MyCommonContent from "../common";

import "./style.scss";
import { getAtk, getRtk } from "../../../apis/Request";
import axios from "axios";

const MyCmsList = () => {
  const [data, setData] = useState([]);

  const params = {
    page: 0,
    size: 10,
  };
  /* 세션과 회원 때문에 추후 개발 */
  useEffect(() => {
    const atk = getAtk();
    const rtk = getRtk();

    if (atk === null || rtk === null) {
      window.location.href = "/sign/in";
    }

    const params = {
      page: 0,
      size: 10,
    };

    // API 사용 말고 axios.get()을 쓰기... cors issue.
    axios
      .get("/apply/auth/list", {
        params,
        headers: {
          Authorization: `Bearer ${getAtk()}`,
          RefreshToken: getRtk(),
        },
      })
      .then((resp) => {
        setData(resp.data.data.content);
      });
  }, []);

  const cmsApplyList = () => {
    if (data.length < 1) return <>현재 신청한 내역이 없습니다.</>;

    return data.map((item: CmsApplyDetail, idx) => {
      return (
        <tr key={`my-cms-apply-${idx}`}>
          <td>
            <a href={`/mypage/cms/${item.id}`}>{item.id}</a>
          </td>
          <td className="contents">{item.title}</td>
          <td>
            <span>{item.status}</span>
            {/* TODO:: 분기처리 */}
            <div className="status-btn-box">
              <a href="/payment" className="pay-link">
                결제
              </a>
              <a
                className="rvw-link"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                리뷰 작성
              </a>
            </div>
          </td>
          <td>{item.regDate}</td>
        </tr>
      );
    });
  };
  const content = (
    <>
      <div className="my-cms-history">
        <table className="bbs-table">
          <colgroup>
            <col width="20%" />
            <col width="*" />
            <col width="30%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">커미션 번호</th>
              <th scope="col">제목</th>
              <th scope="col">상태</th>
              <th scope="col">등록 날짜</th>
            </tr>
          </thead>
          <tbody>{cmsApplyList()}</tbody>
        </table>
      </div>
    </>
  );
  return (
    <>
      <MyCommonContent
        title="커미션 신청 내역"
        content={content}
        btnLink="/commissions"
        btnTxt="커미션 신청하기"
      />
    </>
  );
};

export default MyCmsList;
