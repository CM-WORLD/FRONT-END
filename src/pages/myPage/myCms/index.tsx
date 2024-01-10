import { useState, useEffect } from "react";
import axios from "axios";

import { CmsApplyDetail, CmsPayDetail } from "../../../common/interface";
import { getRtk, getAtk, AUTH_ITC, HOST_URL } from "../../../common/Request";
import WriteRvwModal from "../../review/modal";
import PaymentModal from "../../payment/modal";
import MyCommonContent from "../common";

import "./style.scss";

const MyCmsList = () => {
  const [data, setData] = useState([]);
  const [paymentData, setPaymentData] = useState<CmsPayDetail>();
  const [rvwMdDisplay, serRvwMdDisplay] = useState(false);
  const [payMdDisplay, setPayMdDisplay] = useState(false);

  useEffect(() => {
    const params = {
      page: 0,
      size: 10,
    };

    AUTH_ITC.get("/validate/token").then((resp) => {
      if (resp.data.status === 200 || resp.data.staus === 205) {
        axios
          .get(HOST_URL + "/apply/history", {
            params,
            headers: {
              Authorization: `Bearer ${getAtk()}`,
              RefreshToken: getRtk(),
            },
          })
          .then((resp) => {
            console.log(resp.data.data);
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
                <button
                  className="pay-link"
                  onClick={(e) => {
                    setPaymentData(item.cmsPayDto);
                    e.preventDefault();
                    setPayMdDisplay(!payMdDisplay);
                  }}
                >
                  결제
                </button>
              )}
              {item.status === "CM08" && (
                <button
                  className="rvw-link"
                  onClick={(e) => {
                    e.preventDefault();
                    serRvwMdDisplay(!rvwMdDisplay);
                  }}
                >
                  리뷰 작성
                </button>
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

  const payData = () => {
    if (!paymentData) return <></>;
    else
      return (
        <>
          <div>
            <div>결제 금액: </div>
            <div>{paymentData.payAmt}</div>
          </div>
          <div>
            <div>코멘트: </div>
            <div>{paymentData.comment}</div>
          </div>
        </>
      );
  };
  return (
    <>
      <PaymentModal
        paymentData={payData()}
        display={payMdDisplay}
        onClick={() => setPayMdDisplay(!payMdDisplay)}
      />
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
