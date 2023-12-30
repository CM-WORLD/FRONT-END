import { ReactNode } from "react";
import "./style.scss";

interface ModalProps {
  title?: string;
  content: ReactNode;
  display: boolean;
  onClick: () => void;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  if (!props.display) return <></>;
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className="title">{props.title}</div>
          <div className="content">{props.content}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
