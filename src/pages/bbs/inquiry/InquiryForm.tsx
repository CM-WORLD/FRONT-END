import { useState } from "react";
import axios from "axios";
import MyCommonContent from "../../myPage/common";
import { HOST_URL } from "../../../libs/Const";
const InquiryForm = () => {
  const [inqForm, setInqForm] = useState({
    title: "",
    content: "",
    bbsCode: "",
    nickName: "user_011007", //추후 로그인 반영
    imgList: [],
  });

  const submitForm = async () => {
    let formData = new FormData();

    const { title, content, nickName, imgList } = inqForm;

    formData.append("title", title);
    formData.append("content", content);
    formData.append("bbsCode", "BS02"); //문의는 BS02로 픽스
    formData.append("nickName", nickName);

    for (let i = 0; i < imgList.length; i++) {
      formData.append("imgList", imgList[i]);
    }

    axios.post(HOST_URL + "/bbs/form", formData);
  };

  const storeFiles = (e: any) => {
    if (e.target.files) {
      setInqForm({ ...inqForm, imgList: e.target.files });
    }
  };

  const form = (
    <div className="inquiry-form">
      <div className="form-box">
        <div className="input-line">
          <label htmlFor="">
            제목<span className="astrik">*</span>
          </label>
          <input
            className="input"
            type="text"
            placeholder="제목을 입력해 주세요."
            onChange={(e) => setInqForm({ ...inqForm, title: e.target.value })}
          />
        </div>
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
