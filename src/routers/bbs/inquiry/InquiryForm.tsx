import { useEffect, useState } from "react";
import { globalCode } from "../../../libs/Const";
import MyCommonContent from "../../myPage/common";
import { ApiClient } from "../../../libs/ApiClient";
import InputLine from "../../../components/inputLine";

const InquiryForm = () => {
  const [inqForm, setInqForm] = useState({
    title: "",
    content: "",
    bbsCode: globalCode.bbs.inquiry,
    imgList: [],
  });

  useEffect(() => {
    // checkToken();
  }, []);

  const submitForm = () => {
    let formData = new FormData();

    const { title, content, imgList, bbsCode } = inqForm;

    formData.append("title", title);
    formData.append("content", content);
    formData.append("bbsCode", bbsCode);

    for (let i = 0; i < imgList.length; i++) {
      formData.append("imgList", imgList[i]);
    }

    ApiClient.getInstance().post(
      "/bbs/form",
      formData,
      (data) => {
        console.log("bbs.inquiry", data);
        alert("등록이 완료되었습니다.");
        window.location.href = "/mypage/inquiry";
      },
      (data) => {
        console.log("error", data);
      }
    );
  };

  const storeFiles = (e: any) => {
    if (e.target.files) {
      setInqForm({ ...inqForm, imgList: e.target.files });
    }
  };

  const form = (
    <div className="inquiry-form">
      <div className="form-box">
        <InputLine
          label="문의 제목"
          required={true}
          placeholder="제목을 입력해 주세요."
          onChange={(e) => setInqForm({ ...inqForm, title: e.target.value })}
          value={inqForm.title}
        />
        <div className="input-line">
          <label htmlFor="">
            내용<span className="astrik">*</span>
          </label>
          <textarea
            className="input"
            placeholder="내용을 입력해 주세요."
            onChange={(e) =>
              setInqForm({ ...inqForm, content: e.target.value })
            }
          />
          <p>*최소 10자 이상 적어주세요.</p>
        </div>
        <div className="input-line">
          <label htmlFor="">
            첨부 이미지<span className="astrik">*</span>
          </label>
          <input
            multiple={true}
            type="file"
            id="img"
            onChange={(e) => {
              storeFiles(e);
            }}
          />
          <label className="file-label" htmlFor="img">
            이미지 선택
          </label>
        </div>
      </div>
      <button className="reg-btn" onClick={submitForm}>
        등록하기
      </button>
    </div>
  );
  return (
    <>
      <MyCommonContent title="1:1 문의 등록하기" content={form} />
    </>
  );
};

export default InquiryForm;
