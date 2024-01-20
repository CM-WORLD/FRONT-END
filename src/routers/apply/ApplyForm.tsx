import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommonLoading from "../../components/loading";
import { getAtk, getRtk } from "../../libs/request";
import { HOST_URL } from "../../libs/Const";

import "./style.scss";
import CmsApplyComplete from "./complete";
import Input from "../../components/input";
import InputLine from "../../components/inputLine";
import Button from "../../components/button";
const BadRequest = React.lazy(
  () => import("../../components/error/badRequest")
);

interface ApplyCmsForm {
  status: string;
  title: string;
  content: string;
  imgList: [];
  nickName: string;
  bankOwner: string;
}

const ApplyForm = () => {
  const cmsId = useParams().cmsId; //참조할 커미션 타입 id
  const [isComplete, setIsComplete] = useState(false);
  const [isError, setIsError] = useState(false);
  const [newCmsId, setNewCmsId] = useState("");
  const [applyForm, setApplyForm] = useState<ApplyCmsForm>({
    status: "",
    title: "",
    content: "",
    imgList: [],
    nickName: "",
    bankOwner: "",
  });

  const submitForm = async () => {
    let formData = new FormData();

    const { status, title, content, imgList } = applyForm;

    formData.append("cmsId", cmsId || "");
    formData.append("status", status);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("bankOwner", applyForm.bankOwner);

    for (let i = 0; i < imgList.length; i++) {
      formData.append("imgList", imgList[i]);
    }

    const data = await axios.post(HOST_URL + "/apply/form", formData, {
      headers: {
        Authorization: `Bearer ${getAtk()}`,
        RefreshToken: getRtk(),
      },
    });
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
    // AUTH_ITC.get(HOST_URL + "/validate/token").then((resp) => {
    //   if (resp.data.status === 200 || resp.data.staus === 205) {
    //     // 파라미터로 온 신청 아이디가 없을 경우 400
    //     axios
    //       .get(HOST_URL + "/cms/check/id", { params: { id: cmsId } })
    //       .then((resp) => {
    //         if (resp.data) {
    //           if (resp.data.status === 404) {
    //             setIsError(true);
    //           }
    //         }
    //       });
    //   }
    // });
  }, []);

  const form = (
    <div className="w-9/12 relative m-auto my-5 border border-gray-300 rounded p-5">
      <h1 className="py-5 text-2xl font-bold text-center">커미션 신청서</h1>
      <div className="flex items-center flex-col">
        <div className="input-line">
          <label htmlFor="">
            상태 선택<span className="astrik">*</span>
          </label>
          <select
            className="input"
            defaultValue={"CM00"}
            onChange={(e) =>
              setApplyForm({ ...applyForm, status: e.target.value })
            }
          >
            <option value="CM00">신청</option>
            <option value="CM02">예약</option>
          </select>
        </div>
        <InputLine
          label="이름"
          required={true}
          placeholder="이름을 입력해 주세요"
          onChange={() => {}}
          value={""}
        />
        <InputLine
          label="제목"
          required={true}
          placeholder="제목을 입력해 주세요"
          onChange={(value) => {
            setApplyForm({ ...applyForm, title: value });
          }}
          value={applyForm.title}
        />
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
          <InputLine
            label="계좌주"
            required={true}
            placeholder="계좌주를 입력해 주세요"
            onChange={(value) =>
              setApplyForm({ ...applyForm, bankOwner: value })
            }
            value={applyForm.bankOwner}
          />
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
      </div>
      <div className="btn-box flex justify-center m-5">
        <Button color="Primary" value="등록하기" onClick={submitForm} />
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
        {isError ? (
          <BadRequest desc="해당 커미션 아이디는 존재하지 않습니다." />
        ) : (
          renderPage()
        )}
      </Suspense>
    </>
  );
};

export default ApplyForm;
