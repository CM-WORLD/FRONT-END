import React, { useEffect, useState } from "react";
import "./style.scss";

const ApplyCms = () => {
  const [data, setData] = useState({});
  return (
    <>
      <div className="apply-cms-form">
        <h1>커미션 신청서</h1>
        <div className="form-box">
          <div className="input-line">
            <label htmlFor="">
              상태 선택<span className="astrik">*</span>
            </label>
            <select className="input">
              <option value="">신청</option>
              <option value="">예약</option>
            </select>
          </div>
          <div className="input-line">
            <label htmlFor="">
              제목<span className="astrik">*</span>
            </label>
            <input
              className="input"
              type="text"
              placeholder="제목을 입력해 주세요."
            />
          </div>
          <div className="input-line">
            <label htmlFor="">
              내용<span className="astrik">*</span>
            </label>
            <textarea className="input" placeholder="내용을 입력해 주세요." />
            <p>*최소 30자 이상 적어주세요.</p>
          </div>
          <div className="input-line">
            <label htmlFor="">
              첨부 이미지<span className="astrik">*</span>
            </label>
            <input type="file" id="img" />
            <label className="file-label" htmlFor="img">
              이미지 선택
            </label>
          </div>
          <div className="input-line">
            <label htmlFor="">
              작성자<span className="astrik">*</span>
            </label>
            <input
              readOnly
              value="회원이면 jinvicky@naver.com, 비회원이면 익명_232323"
              className="input"
              type="text"
            />
          </div>
          <div className="input-line">
            <label htmlFor="">
              계좌주(실명)<span className="astrik">*</span>
            </label>
            <input
              className="input"
              type="text"
              placeholder="꼭 계좌주와 일치하는 실명 3~4글자여야 합니다.(입금 확인용)"
            />
          </div>
        </div>
        <div className="btn-box">
          <button className="reg-btn">등록하기</button>
        </div>
      </div>
    </>
  );
};

export default ApplyCms;
