import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import InputLine from "../../components/inputLine";
import Button from "../../components/button";
import Locale from "../../components/locale";
import FileUploadPreview from "../../components/fileUpload";
import TextArea from "../../components/textarea";
import Select from "../../components/select";

import { ApiClient } from "../../libs/ApiClient";
import { EApiStatus } from "../../defines/api";

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

    ApiClient.getInstance().post(
      "/apply/form",
      formData,
      (data) => {
        alert("신청이 완료되었습니다.");
        window.location.href = "/myPage/cms";
      },
      (data) => {
        console.log(data);
        if (data.status === EApiStatus.BadRequest){
          alert(data.message);
        } else alert("요청에 문제가 발생했습니다. 재시도해 주세요");
      }
    );
  };

  return (
    <>
      <div className="w-9/12 relative m-auto my-5 border border-gray-300 rounded p-5">
        <h1 className="py-5 text-2xl font-bold text-center">
          <Locale k="cms_application_form" />
        </h1>
        <div className="flex items-center flex-col">
          <Select
            label="신청 상태"
            options={[{ locale: "신청", value: "TP01" }]}
            selectedValue={"TP01"}
            onChange={(value) => setApplyForm({ ...applyForm, status: value })}
          />
          <InputLine
            label={<Locale k="title" />}
            value={applyForm.title}
            required={true}
            placeholder="제목을 입력해 주세요"
            onChange={(value) => {
              setApplyForm({ ...applyForm, title: value });
            }}
          />
          <TextArea
            label={<Locale k="content" />}
            required={true}
            value={applyForm.content}
            onChange={(value) => setApplyForm({ ...applyForm, content: value })}
          />
          <InputLine
            label={<Locale k="bank_owner" />}
            required={true}
            placeholder="계좌주를 입력해 주세요"
            onChange={(value) =>
              setApplyForm({ ...applyForm, bankOwner: value })
            }
            value={applyForm.bankOwner}
          />
          <FileUploadPreview
            onChange={(files) => {
              if (files) setApplyForm({ ...applyForm, imgList: files });
            }}
          />
        </div>
        <div className="btn-box flex justify-center m-5 gap-5">
          <Button color="Primary" onClick={submitForm}>
            <Locale k="cms_apply" />
          </Button>
          <Button color="LightGray" textColor="Dark" onClick={() => history.back()}>
            <Locale k="cancel" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ApplyForm;
