import { useState, useEffect } from "react";
import axios from "axios";

import { CmsApplyDetail } from "../../../common/interface";
import { getRtk, getAtk, AUTH_ITC } from "../../../common/Request";
import WriteRvwModal from "../../review/modal";
import MyCommonContent from "../common";

import "./style.scss";

const MyCmsList = () => {
  const [data, setData] = useState([]);
  const [rvwMdDisplay, serRvwMdDisplay] = useState(false);

  useEffect(() => {
    const params = {
      page: 0,
      size: 10,
    };

    AUTH_ITC.get("/validate/token").then((resp) => {
      if (resp.data.status === 200 || resp.data.staus === 205) {
        axios
          .get("/apply/history", {
            params,
            headers: {
              Authorization: `Bearer ${getAtk()}`,
              RefreshToken: getRtk(),
            },
          })
          .then((resp) => {
            if (resp.data.data.content) {
              setData(resp.data.data.content);
            }
          });
      }
    });
  }, []);

  const cmsApplyList = () => {
    if (data.length < 1)
      return <td colSpan={4}>현재 신청한 내역이 없습니다.</td>;

    return data.map((item: CmsApplyDetail, idx) => {
      return (
        <tr key={`my-cms-apply-${idx}`}>
          <td>
            <a href={`/mypage/cms/${item.id}`}>{item.id}</a>
          </td>
          <td className="contents">{item.title}</td>
          <td>
            <span>{item.statusNm}</span>
            <div className="status-btn-box">
              {item.status === "CM02" && (
                <a href="/payment" className="pay-link">
                  결제
                </a>
              )}
              {item.status === "CM08" && (
                <a
                  className="rvw-link"
                  onClick={(e) => {
                    e.preventDefault();
                    serRvwMdDisplay(!rvwMdDisplay);
                  }}
                >
                  리뷰 작성
                </a>
              )}
            </div>
          </td>
          <td>{item.regDate}</td>
        </tr>
      );
    });
  };

  /** 리뷰 작성 제출 */
  const submitForm = () => {};
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
      <WriteRvwModal
        display={rvwMdDisplay}
        onClick={() => serRvwMdDisplay(!rvwMdDisplay)}
        onSubmit={submitForm}
      />
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
