import MyCommonContent from "../../myPage/common";
import SideNav from "../../myPage/sideNav";
import "./style.scss";

const InquiryForm = () => {
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
          />
        </div>
        <div className="input-line">
          <label htmlFor="">
            내용<span className="astrik">*</span>
          </label>
          <textarea className="input" placeholder="내용을 입력해 주세요." />
          <p>*최소 10자 이상 적어주세요.</p>
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
          <input readOnly value="호홋" className="input" type="text" />
        </div>
      </div>
      <button className="reg-btn">등록하기</button>
    </div>
  );
  return (
    <>
      <MyCommonContent title="1:1 문의 등록하기" content={form} />
    </>
  );
};

export default InquiryForm;
