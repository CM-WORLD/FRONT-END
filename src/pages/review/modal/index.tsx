import Modal from "../../../common/modal";
import "./style.scss";

interface ReviewModalProps {
  display: boolean;
  onClick: () => void;
}

const WriteRvwModal = (props: ReviewModalProps) => {
  const content = (
    <>
      <div className="btn-box">
        <div className="input-line">
          <label htmlFor="">
            내용<span className="astrik">*</span>
          </label>
          <textarea className="input" placeholder="내용을 입력해 주세요." />
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
        <div className="btn-box">
          <button className="confirm-btn">리뷰 등록</button>
          <button className="cancel-btn" onClick={props.onClick}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Modal title="리뷰 작성하기" display={props.display} content={content} />
    </>
  );
};

export default WriteRvwModal;
