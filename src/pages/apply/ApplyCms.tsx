import React, { useEffect, useState } from "react";
import "./style.scss";
import LoginModal from "../signIn/modal";

const ApplyCms = () => {
  const [data, setData] = useState({});
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    /**
     * 1. 최초 랜더링 시 쿠키 등에서 세션을 확인한다.
     * 2. 비로그인 상태일 경우 <LoginModal />를 setDisplay(true)로 해서 띄운다.
     * 3. 로그인 버튼 누르면 소셜 페이지로 가고, 비회원 신청을 눌렀을 경우 setDisplay(false)를 하고, 작성자 value에 익명_uuid를 넣는다.
     *
     *
     */
  }, []);
  return (
    <>
      <LoginModal
        display={!display}
        onClick={() => {
          setDisplay(!display);
        }}
      />
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
