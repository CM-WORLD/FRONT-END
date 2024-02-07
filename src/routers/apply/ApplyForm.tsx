import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CommonLoading from "../../components/loading";
import { getAtk, getRtk } from "../../libs/request";
import { HOST_URL } from "../../libs/Const";

import CmsApplyComplete from "./complete";
import InputLine from "../../components/inputLine";
import Button from "../../components/button";
import Locale from "../../components/locale";
import FileUploadPreview from "../../components/fileUpload";
import TextArea from "../../components/textarea";
import Select from "../../components/select";
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

    const data = await axios.post(HOST_URL + "/apply/form2", formData, {
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

  useEffect(() => {}, []);

  const form = (
    <div className="w-9/12 relative m-auto my-5 border border-gray-300 rounded p-5">
      <h1 className="py-5 text-2xl font-bold text-center">커미션 신청서</h1>
      <div className="flex items-center flex-col">
        <Select
          label="신청 상태"
          options={[{ locale: "신청", value: "TP01" }]}
          selectedValue={"TP01"}
          onChange={(value) => setApplyForm({ ...applyForm, status: value })}
        />
        <InputLine
          label={undefined}
          value={applyForm.title}
          // label="제목"
          required={true}
          placeholder="제목을 입력해 주세요"
          onChange={(value) => {
            setApplyForm({ ...applyForm, title: value });
          }}
        />
        {/* <div className="input-line">
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
        </div> */}
        <TextArea
          label={<Locale k="register" />}
          required={true}
          value={applyForm.content}
          onChange={(value) => setApplyForm({ ...applyForm, content: value })}
        />
        <InputLine
          label={undefined}
          required={true}
          placeholder="계좌주를 입력해 주세요"
          onChange={(value) => setApplyForm({ ...applyForm, bankOwner: value })}
          value={applyForm.bankOwner}
        />
        <FileUploadPreview />
      </div>
      <div className="btn-box flex justify-center m-5">
        <Button color="Primary" onClick={submitForm}>
          <Locale k="cms_apply" />
        </Button>
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
