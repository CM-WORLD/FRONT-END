import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";

import { API } from "../../common/Request";
import LoginModal from "../signIn/modal";

import "./style.scss";

interface ApplyForm {
  status: string;
  title: string;
  content: string;
  imgList: [];
  nickName: string;
  accOwner: string;
}

const ApplyCms = () => {
  const cmsId = useParams().cmsId; //참조할 커미션 타입 id
  const [display, setDisplay] = useState(false);
  const [applyForm, setApplyForm] = useState<ApplyForm>({
    status: "",
    title: "",
    content: "",
    imgList: [],
    nickName: "",
    accOwner: "",
  });

  const submitForm = async () => {
    let formData = new FormData();

    const { status, title, content, nickName, accOwner, imgList } = applyForm;

    formData.append("cmsId", cmsId || "");
    formData.append("status", status);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("nickName", nickName);
    formData.append("bankOwner", accOwner);

    for (let i = 0; i < imgList.length; i++) {
      formData.append("imgList", imgList[i]);
    }

    API.post("/apply/form", formData);
  };

  const storeFiles = (e: any) => {
    if (e.target.files) {
      setApplyForm({ ...applyForm, imgList: e.target.files });
    }
  };

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
          setApplyForm({
            ...applyForm,
            nickName: "unknown_" + uuid().slice(0, 8),
          });
        }}
      />
      <div className="apply-cms-form">
        <h1>커미션 신청서</h1>
        <div className="form-box">
          <div className="input-line">
            <label htmlFor="">
              상태 선택<span className="astrik">*</span>
            </label>
            <select
              className="input"
              onChange={(e) =>
                setApplyForm({ ...applyForm, status: e.target.value })
              }
            >
              <option value="CM00" selected>
                신청
              </option>
              <option value="CM02">예약</option>
            </select>
          </div>
          <div className="input-line">
            <label htmlFor="">
              제목<span className="astrik">*</span>
            </label>
            <input
              value={applyForm.title}
              className="input"
              type="text"
              placeholder="제목을 입력해 주세요."
              onChange={(e) =>
                setApplyForm({ ...applyForm, title: e.target.value })
              }
            />
          </div>
          <div className="input-line">
            <label htmlFor="">
              내용<span className="astrik">*</span>
            </label>
            <textarea
              value={applyForm.content}
              className="input"
              placeholder="내용을 입력해 주세요."
              onChange={(e) =>
                setApplyForm({ ...applyForm, content: e.target.value })
              }
            />
            <p>*최소 30자 이상 적어주세요.</p>
          </div>
          <div className="input-line">
            <label htmlFor="">
              첨부 이미지<span className="astrik">*</span>
            </label>
            <input
              multiple={true}
              type="file"
              id="img"
              onChange={(e) => storeFiles(e)}
            />
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
              value={applyForm.nickName}
              className="input"
              type="text"
            />
          </div>
          <div className="input-line">
            <label htmlFor="">
              계좌주(실명)<span className="astrik">*</span>
            </label>
            <input
              value={applyForm.accOwner}
              className="input"
              type="text"
              placeholder="꼭 계좌주와 일치하는 실명 3~4글자여야 합니다.(입금 확인용)"
              onChange={(e) =>
                setApplyForm({ ...applyForm, accOwner: e.target.value })
              }
            />
          </div>
        </div>
        <div className="btn-box">
          <button className="reg-btn" onClick={submitForm}>
            등록하기
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplyCms;
