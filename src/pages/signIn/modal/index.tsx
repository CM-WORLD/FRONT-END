import Modal from "../../../common/modal";
import "./style.scss";

interface LoginModalProps {
  display: boolean;
  onClick?: (display: boolean) => void;
}
const LoginModal = (props: LoginModalProps) => {
  const loginContent = (
    <>
      <div className="login-modal-content">
        <p>*로그인 시 더 많은 편리 기능을 제공합니다.</p>
        <a className="social-link naver" href="/auth/naver">
          네이버로 로그인
        </a>
        <a className="social-link kakao" href="/auth/kakao">
          카카오로 로그인
        </a>
      </div>
    </>
  );
  return (
    <>
      {/* <Modal title="로그인" display={props.display} content={loginContent} /> */}
    </>
  );
};

export default LoginModal;
