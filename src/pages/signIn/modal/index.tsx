import Modal from "../../../common/modal";
import "./style.scss";

interface LoginModalProps {
  display: boolean;
  onClick: () => void;
}
const LoginModal = (props: LoginModalProps) => {
  const loginContent = (
    <>
      <div>this is content.....</div>
    </>
  );
  return (
    <>
      <Modal
        title="Login"
        display={props.display}
        content={loginContent}
        onClick={props.onClick}
      />
    </>
  );
};

export default LoginModal;
