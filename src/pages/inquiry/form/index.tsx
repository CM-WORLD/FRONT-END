import "./style.scss";

const InquiryForm = () => {
  return (
    <>
      <div className="inquiry-form">
        <h1>문의 작성하기</h1>
        <div className="form-box">
          <div className="input-line">
            <label htmlFor="">
              제목<span className="astrik">*</span>
            </label>
            <input type="text" placeholder="제목을 입력해 주세요." />
          </div>
          <div className="input-line">
            <label htmlFor="">
              내용<span className="astrik">*</span>
            </label>
            <textarea placeholder="내용을 입력해 주세요." />
            <p>*최소 10자 이상 적어주세요.</p>
          </div>
          <div className="input-line">
            <label htmlFor="">
              첨부 이미지<span className="astrik">*</span>
            </label>
            <input type="file" id="img" />
            <label htmlFor="img">이미지 선택</label>
          </div>
        </div>
        <button>문의 제출하기</button>
        <button>문의 취소하기</button>
      </div>
    </>
  );
};

export default InquiryForm;
