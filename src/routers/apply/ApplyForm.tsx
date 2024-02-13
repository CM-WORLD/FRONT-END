import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../components/button";
import Locale from "../../components/locale";
import FileUploadPreview from "../../components/fileUpload";
import TextArea from "../../components/textarea";
import Select from "../../components/select";

import { ApiClient } from "../../libs/ApiClient";
import { EApiStatus } from "../../defines/api";
import Input from "../../components/input";
import { CommissionStatus } from "../../defines/globalCode";
import { NoAuthRedirect } from "../../libs/request";

interface ApplyCmsForm {
  status: string;
  title: string;
  content: string;
  imgList: [];
  nickName: string;
  bankOwner: string;
  sendAlert: string;
  phoneNum?: string;
}

const ApplyForm = () => {
  const cmsId = useParams().cmsId; //참조할 커미션 타입 id
  const [applyForm, setApplyForm] = useState<ApplyCmsForm>({
    status: CommissionStatus.Applied,
    title: "",
    content: "",
    imgList: [],
    nickName: "",
    bankOwner: "",
    sendAlert: "Y",
    phoneNum: "",
  });

  const optionList = [
    { locale: "apply", value: CommissionStatus.Applied },
    { locale: "reserve", value: CommissionStatus.Reserve },
  ];

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
        // 신청 시 mypage로 이동
      },
      (data) => {
        console.log(data);
        if (data.status === EApiStatus.BadRequest) {
          alert(data.message);
        } else alert("요청에 문제가 발생했습니다. 재시도해 주세요");
      }
    );
  };

  useEffect(() => {
    ApiClient.getInstance().get(
      "/login/check",
      {},
      () => {},
      () => {
        NoAuthRedirect()
      }
    );
  }, []);

  return (
    <>
      <div className="w-9/12 relative m-auto my-9 border border-gray-300 rounded p-5">
        <h1 className="py-5 text-2xl font-bold text-center">
          <Locale k="cms_application_form" />
        </h1>
        <div className="flex items-center flex-col p-3 gap-4">
          <div className="w-full grid grid-cols-[0.7fr,3fr] gap-3 items-center">
            <div className="text-dark flex">
              <Locale k="apply_type" />
              <span className="text-red-500 ml-2">*</span>
            </div>
            <Select
              options={optionList}
              selectedValue={applyForm.status}
              onChange={(value) =>
                setApplyForm({ ...applyForm, status: value })
              }
            />
          </div>
          <div className="w-full grid grid-cols-[0.7fr,3fr] gap-3 items-center">
            <div className="text-dark flex">
              <Locale k="title" />
              <span className="text-red-500 ml-2">*</span>
            </div>
            <Input
              placeholder="title_placeholder"
              onChange={(value) => {
                setApplyForm({ ...applyForm, title: value });
              }}
              value={applyForm.title}
            />
          </div>
          <div className="w-full grid grid-cols-[0.7fr,3fr] gap-3">
            <div className="text-dark flex">
              <Locale k="content" />
              <span className="text-red-500 ml-2">*</span>
            </div>
            <TextArea
              value={applyForm.content}
              onChange={(value) =>
                setApplyForm({ ...applyForm, content: value })
              }
            />
          </div>
          <div className="w-full grid grid-cols-[0.7fr,3fr] gap-3 items-center">
            <div className="text-dark flex">
              <Locale k="account_holder" />
              <span className="text-red-500 ml-2">*</span>
            </div>
            <Input
              placeholder="account_holder_placeholder"
              onChange={(value) =>
                setApplyForm({ ...applyForm, bankOwner: value })
              }
              value={applyForm.bankOwner}
            />
          </div>
          <div className="w-full grid grid-cols-[0.7fr,3fr] gap-3">
            <div className="text-dark flex">
              <Locale k="file_image" />
              <span className="text-red-500 ml-2">*</span>
            </div>
            <FileUploadPreview
              onChange={(files) => {
                if (files) setApplyForm({ ...applyForm, imgList: files });
              }}
            />
          </div>
          <div className="w-full grid grid-cols-[0.7fr,3fr] gap-3 ">
            <div className="text-dark flex">
              <Locale k="send_alert" />
              <span className="text-red-500 ml-2">*</span>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  checked={applyForm.sendAlert === "Y"}
                  value={"Y"}
                  className="w-5 h-5 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e) => {
                    setApplyForm({ ...applyForm, sendAlert: "Y" });
                  }}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  <Locale k="receive_agree" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={applyForm.sendAlert === "N"}
                  type="radio"
                  value={"N"}
                  className="w-5 h-5 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e) => {
                    setApplyForm({ ...applyForm, sendAlert: "N" });
                  }}
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  <Locale k="receive_disagree" />
                </label>
              </div>
            </div>
          </div>
          {applyForm.sendAlert === "N" && (
            <div className="w-full text-sm text-red-500">
              <Locale k="receive_disagree_warn" />
            </div>
          )}
          {applyForm.sendAlert === "Y" && (
            <div className="w-full grid grid-cols-[0.7fr,3fr] gap-3 items-center">
              <div className="text-dark flex">
                <Locale k="phone_number" />
                <span className="text-red-500 ml-2">*</span>
              </div>
              <Input
                type="number"
                placeholder="phone_number_placeholder"
                onChange={(value) =>
                  setApplyForm({ ...applyForm, phoneNum: value })
                }
                value={applyForm.phoneNum}
              />
            </div>
          )}
        </div>
        <div className="btn-box flex justify-center m-5 gap-5">
          <Button color="Primary" onClick={submitForm}>
            <Locale k="cms_apply" />
          </Button>
          <Button
            color="LightGray"
            textColor="Dark"
            onClick={() => history.back()}
          >
            <Locale k="cancel" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ApplyForm;
