import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { API, getRtk, getAtk, AUTH_ITC } from "../../common/Request";
import CommonLoading from "../../components/loading";

import "./style.scss";

const CmsApplyComplete = React.lazy(()=> import("../apply/complete"));
const BadRequest = React.lazy(() => import("../../components/error/badRequest"));

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
  const [isComplete, setIsComplete] = useState(false);
  const [isError, setIsError] = useState(false);
  const [newCmsId, setNewCmsId] = useState("");
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

    const headers = {
      // 다른 헤더 설정들 추가 가능
      Authorization: `Bearer ${getAtk()}`, // Access Token 추가
      RefreshToken: getRtk(),
    };

    const data = await API.post("/auth/apply/form", formData, { headers });
    if (data.data.status === "200") {
      setNewCmsId(data.data.cmsId);
      setIsComplete(true);
    }
  };

  const storeFiles = (e: any) => {
    if (e.target.files) {
      setApplyForm({ ...applyForm, imgList: e.target.files });
    }
  };

  useEffect(() => {
    AUTH_ITC.get("/validate/token").then((resp) => {
      if (resp.data.status === 200) {
        // 파라미터로 온 신청 아이디가 없을 경우 400
        axios.get("/cms/check/id", {params: {id: cmsId}}).then((resp) => {
          if (resp.data) {
            if (resp.data.status === 404) {
              setIsError(true);
            }
          }
        });
      }
    });
  }, []);

  const form = (
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
  );

  const renderPage = () => {
    if (isComplete) return <CmsApplyComplete cmsId={newCmsId} />;
      return form;
  };
  return (
    <>
      <Suspense fallback={<CommonLoading />}>
        {isError 
        ? <BadRequest desc="해당 커미션 아이디는 존재하지 않습니다." /> 
        : renderPage()}
      </Suspense>
    </>
  );
};

export default ApplyCms;
